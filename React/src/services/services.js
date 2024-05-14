import Axios from "axios";

const baseUrl = "http://localhost:8082/products";

export function getEmployees(sortChoice) {
  return Axios.get(`${baseUrl}/sort/${sortChoice}`);
}

export function getRevenue() {
  return Axios.get(`${baseUrl}/totrevenue`);
}

export function getAdmin() {
  return Axios.get(`${baseUrl}/adminusers`);
}

export function getEmployee(id) {
  return Axios.get(`${baseUrl}/view/${id}`);
}

export function addEmployee(empObject) {
  return Axios.post(`${baseUrl}/add`, empObject);
}

export function updateEmployee(id, empObject) {
  return Axios.put(`${baseUrl}/update/${id}`, empObject);
}

export function deleteEmployee(id) {
  return Axios.delete(`${baseUrl}/delete/${id}`);
}
