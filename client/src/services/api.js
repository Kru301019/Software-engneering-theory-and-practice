import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const createProject = async (projectData) => {
    const response = await axios.post(`${API_URL}/projects`, projectData);
    return response.data;
};

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
};
