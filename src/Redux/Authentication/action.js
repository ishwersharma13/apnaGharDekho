
import axios from "axios"

const sendUserData = (body)=>(dispatch)=>{
 dispatch({type:"SEND_DATA_LOADING"})
 return axios.post(`https://long-pear-giraffe-gown.cyclic.app/api/realStateLogin` , body)
}

const getUserData = (dispatch)=>{
    dispatch({type:"GET_DATA_LOADING_AUTH"})
    return axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/realStateLogin`)
    .then((res)=> dispatch({type:"GET_DATA_SUCCESS_AUTH" , payload:res.data}))
    .catch((err)=> dispatch({type:"GET_DATA_ERROR_AUTH"}))
   
   } 
export {sendUserData ,getUserData}