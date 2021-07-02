import axios from 'axios';

const url = "https://tusharika-industries.herokuapp.com/api/save";

export const createInquiry = (newInquiry)=>axios.post(url,newInquiry);