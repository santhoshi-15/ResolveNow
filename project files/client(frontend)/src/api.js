import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const registerUser = (userData) => API.post('/SignUp', userData);
export const loginUser = (userData) => API.post('/Login', userData);
export const fetchAgentUsers = () => API.get('/AgentUsers');
export const fetchOrdinaryUsers = () => API.get('/OrdinaryUsers');
export const deleteUser = (userId) => API.delete(`/OrdinaryUsers/${userId}`);
export const registerComplaint = (userId, complaintData) => API.post(`/Complaint/${userId}`, complaintData);
export const fetchUserComplaints = (userId) => API.get(`/status/${userId}`);
export const fetchAllComplaints = () => API.get('/status');
export const assignComplaint = (assignedComplaintData) => API.post('/assignedComplaints', assignedComplaintData);
export const fetchComplaintsByAgent = (agentId) => API.get(`/allcomplaints/${agentId}`);
export const updateUser = (_id, updatedData) => API.put(`/user/${_id}`, updatedData);
export const updateComplaintStatus = (complaintId, statusData) => API.put(`/complaint/${complaintId}`, statusData);
export const sendMessage = (messageData) => API.post('/messages', messageData);
export const getMessages = (complaintId) => API.get(`/messages/${complaintId}`);
