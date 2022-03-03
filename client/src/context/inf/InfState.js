import React, {  useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import InfContext from "./infContext";
import infReducer from "./infReducer";
import { POST_INF_DETAILS_SUCCESS,AUTH_ERROR,POST_INF_HR_DETAILS_SUCCESS,POST_INF_BTECH_DETAILS_SUCCESS,GET_INF_SUCCESS } from "../types";

const InfState = props =>{

    const initialState = {
        companyDetails:null,
        hr:null,
        ahr:null,
        infDetails:null,
        infBtech:null,
        infs:[]
    };
    const [state,dispatch] = useReducer(infReducer,initialState);
    // Methods
    const inf = async(formData)=>{
        // setting token in the global header ie x-auth-token = token 
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
         try {
             const res = await axios.post("/api/inf/addInf",formData,config);
             dispatch({type:POST_INF_DETAILS_SUCCESS,payload:res.data});
             return res.data;
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
     }
     const infHr = async(formData)=>{
        // setting token in the global header ie x-auth-token = token 
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
         try {
             const res = await axios.post("/api/infHrDetails/addInfHrDetails",formData,config);
            //  dispatch({type:POST_INF_HR_DETAILS_SUCCESS,payload:res.data});
             
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
     }
     const inf_btech = async(formData)=>{
        // setting token in the global header ie x-auth-token = token 
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
         try {
             const res = await axios.post("/api/infBtech/addInfBtech",formData,config);
             console.log(1);
             dispatch({type:POST_INF_BTECH_DETAILS_SUCCESS,payload:res.data});
             
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
     }
     const getInfss = async(id)=>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/inf/${id}`);
            dispatch({type:GET_INF_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }
     const infss = async(formData,hrData,b)=>{
         const infData = await inf(formData);
         
         const infBtech = await inf_btech({infId:infData.id,btechProgCourseId:b});
         console.log(infData);
         const hrdata = await infHr({...hrData,infId:infData.id});
         
         console.log(1);
     }
    return (
        <InfContext.Provider
        value={{
            ...state,
            inf,
            infHr,
            infss,
            getInfss
        }}>
            {props.children}
        </InfContext.Provider>
    )
}
export default InfState;
