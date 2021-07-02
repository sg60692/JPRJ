import * as api from '../api';

export const createInquiry= (Inquiry)=>async(dispatch)=>{
    try{
        const data=await api.createInquiry(Inquiry);
        dispatch({ type:data, payload:data });
    }catch(error){
        console.log(error.message);
    }    
}
export const resetColor= ()=>async(dispatch)=>{
    try{
        dispatch({ type:{data:0}, payload:0 });
    }catch(error){
        console.log(error.message);
    }    
}