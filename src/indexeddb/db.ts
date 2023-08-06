export default function db () {
    const keys = {
      trip: [{name: "date", unique: false},
              {name: "numPeople", unique: false},
              {name: "cardImg", unique: false},
              {name: "shortDescription", unique: false},
              {name: "detailDescription", unique: false},
              {name: "country", unique: false},
              {name: "location", unique: false},
              {name: "rate", unique: false},
              {name: "price", unique: false},
              {name: "departure", unique: false},
              {name: "departureTime", unique: false},
              {name: "returnTime", unique: false},
              {name: "dressCode", unique: false},
              {name: "notIncluded", unique: false},
              {name: "included", unique: false},
              {name: "gallery", unique: false},
          ]
  }

  let db: IDBDatabase;
  const openDatabase = () => {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open('data', 1);
          request.onerror = (err) => {
              console.error('IndexedDB error:', request.error, err);
              reject(err);
          };
    
          request.onsuccess = () => {
              db = request.result;
              resolve(db);
          };
          
          //run once
          request.onupgradeneeded = () => {
              db = request.result;
              let tripsStore = db.createObjectStore('trips', { autoIncrement: true });
              keys.trip.forEach((key) => tripsStore.createIndex(key.name, key.name, { unique: key.unique }));
          };
      });
    };
    
    async function initializeDatabase() {
      try {
        db = await openDatabase() as IDBDatabase ;
        return db;
      } catch (error) {
          console.log(error);
      }
    }
    
  return initializeDatabase();
}