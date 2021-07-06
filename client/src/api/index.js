import axios from 'axios';

const url =process.env.REACT_APP_BASE_URL||"http://localhost:5000/api/save";

export const createInquiry = (newInquiry)=>axios.post(url,newInquiry);