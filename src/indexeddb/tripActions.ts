import db from "./db";

let IDB: IDBDatabase;
const getAllTrips = <T>() => {
    return new Promise<T>((resolve, reject) => {
        db().then((result => {
            IDB = result as IDBDatabase ;
            const txn = IDB.transaction('trips', 'readonly');
            const store = txn.objectStore('trips');

            let queryValue = store.getAll();
            
            queryValue.onerror = () => reject(queryValue.error);
            queryValue.onsuccess = () => {
                const tripsList = queryValue.result;
                let queryKeyValue = store.getAllKeys();

                queryKeyValue.onerror = () => reject(queryKeyValue.error);
                
                queryKeyValue.onsuccess = () => {
                    tripsList.forEach((trip:any, index:number)=> {
                        trip["key"] = queryKeyValue.result[index];
                    });
                    resolve((tripsList) as T);
                }
            };
            txn.oncomplete = () => IDB.close();
        }));
    });
}

const getTripById = <T>(id: number) => {
    return new Promise<T>((resolve, reject) => {
        db().then((result => {
            IDB = result as IDBDatabase ;
            const txn = IDB.transaction('trips', 'readonly');
            const store = txn.objectStore('trips');
            let query = store.get(id);
            query.onerror = () => reject(query.error);
            query.onsuccess = () => resolve(query.result);
            txn.oncomplete = () => IDB.close();
        }));
    });
}

const addTrip = (trips: object) => {
    db().then((result => {
        IDB = result as IDBDatabase ;
        const txn = IDB.transaction('trips', 'readwrite');
        const store = txn.objectStore('trips');
        let query = store.put(trips);
        
        query.onsuccess = (event) => { console.log(event); }
        query.onerror = () => { console.log(query.error); }
        txn.oncomplete = () => IDB.close();
    }));
}

const deleteTrip = () => {
    return;
}

export { getAllTrips, getTripById, addTrip, deleteTrip };