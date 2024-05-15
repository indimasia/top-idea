// src/dbOperations.js
import { getDb } from './index.js';

export const addItem = async (item) => {
  const db = await getDb();
  return db.add('items', item);
};

export const getItems = async () => {
  const db = await getDb();
  // sort latest using createdAt
  const data = await db.getAll('items').then((res) => {
    return res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  });
  return data
};

export const getItemMostVoted = async () => {
  const db = await getDb();
  const data = await db.getAll('items').then((res) => {
    return res.sort((a, b) => b.vote - a.vote)
  });
  return data
}

export const updateItem = async (item) => {
  const db = await getDb();
  return db.put('items', item);
};

export const deleteItem = async (id) => {
  const db = await getDb();
  return db.delete('items', id);
};
