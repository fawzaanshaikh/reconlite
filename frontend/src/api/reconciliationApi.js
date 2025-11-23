import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/reconciliation",
});

// CREATE
export const createReconciliation = (data) =>
  API.post("/create", data);

// GET ALL
export const getAllReconciliations = () =>
  API.get("");

// GET BY ID
export const getReconciliationById = (id) =>
  API.get(`/${id}`);

// UPDATE STATUS
export const updateStatus = (id, statusObj) =>
  API.put(`/${id}/status`, statusObj);

// DELETE
export const deleteReconciliation = (id) =>
  API.delete(`/${id}`);
