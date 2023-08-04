import db from "./db";

let IDB: IDBDatabase;

db().then((result => {
    IDB = result as IDBDatabase ;
}));

const getAllTrips = <T>() => {
    const txn = IDB.transaction('trips', 'readonly');
    const store = txn.objectStore('trips');
    let query = store.getAll();

    return new Promise<T>((resolve, reject) => {
        query.onerror = () => reject(query.error);
        query.onsuccess = () => resolve((query.result) as T);
        txn.oncomplete = () => IDB.close();
    });
}

const getTripById = <T>(id: number) => {
    const txn = IDB.transaction('trips', 'readonly');
    const store = txn.objectStore('trips');
    let query = store.get(id);

    return new Promise<T>((resolve, reject) => {
        query.onerror = () => reject(query.error);
        query.onsuccess = () => resolve(query.result);
        txn.oncomplete = () => IDB.close();
    });
}

const addTrip = (trips: object) => {
    const txn = IDB.transaction('trips', 'readwrite');
    const store = txn.objectStore('trips');
    let query = store.put(trips);
    
    query.onsuccess = (event) => { console.log(event); }
    query.onerror = () => { console.log(query.error); }
    txn.oncomplete = () => IDB.close();
    console.log(IDB);
}

const deleteTrip = () => {
    return;
}

export { getAllTrips, getTripById, addTrip, deleteTrip };