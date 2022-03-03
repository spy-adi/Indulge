import { POST_INF_DETAILS_SUCCESS,AUTH_ERROR ,GET_INF_SUCCESS} from "../types";
const reducerFunc=(state,action)=>{
    switch(action.type){
        case POST_INF_DETAILS_SUCCESS:
            return {...state,infDetails:action.payload}
        case GET_INF_SUCCESS:
            return {...state,infs:[action.payload]}
        case AUTH_ERROR:
            return state;
    }
}
export default reducerFunc;