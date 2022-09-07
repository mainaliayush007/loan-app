
import { API_URL } from "./constants";
import axiosInstance from "./requests";

const requestLoan = async (data) =>
    axiosInstance
    .post(`${API_URL}/loan/request-balancesheet`,data,{
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
    })
    .then((response)=>response)
    .catch((error)=>error);

const requestOutcome = async (data) =>
    axiosInstance
    .post(`${API_URL}/loan/request-outcome`,data,{
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
    })
    .then((response)=>response)
    .catch((error)=>error);

export {requestLoan , requestOutcome };
