import { openDB } from 'idb';

const DB_NAME = 'todo_ideas';
const DB_VERSION = 1;
const STORE_NAME = 'items';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  }
});

export const getDb = () => dbPromise;