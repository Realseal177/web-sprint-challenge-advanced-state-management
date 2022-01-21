import axios from "axios";

export const LOADING = "LOADING";
export const SET_ERROR = "SET_ERROR";
export const SUCCESS = "SUCCESS";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => (dispatch) => {
    dispatch(loading())
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(err => {
            dispatch(setError(err.error))
        })
}

const loading = () => {
    return { type: LOADING }
}

const success = (data) => {
    return { type: SUCCESS, payload: data }
}

export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf }
}

export const setError = (message) => {
    return { type: SET_ERROR, payload: message }
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.