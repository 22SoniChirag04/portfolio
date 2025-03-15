// src/services/apiService.js
import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const get = async (endpoint, params = {}) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

const post = async (endpoint, data = {}) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    const { status, data } = error.response;
    throw new Error(`Error ${status}: ${data.error?.message || "Unknown error"}`);
  }
  throw new Error("Network error or no response.");
};

export { get, post };
