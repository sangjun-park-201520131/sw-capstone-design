import { useState } from "react";
import axios from "axios";

export const getData = async (url, bearerToken) => {
  
  let returnData
  
  axios.get(`http://localhost:8081/${url}`, {
      headers: {
        Authorization: `Bearer ${bearerToken || ""}`,
      },
      credentials: "same-origin",
    })
    .then((response) => (response.data))
    .catch((error) => console.error(`GET ERROR! ${error}`));
  return returnData;
};

export const postData = async (url, data, token) => {
  let returnValue;

  const bearerToken = token ? token : null;

  await axios
    .post(`http://localhost:8081/${url}`, data, {
      headers: {
        Authorization: `Bearer ${bearerToken || ""}`,
        "Content-Type": "application/json",
      },
      credentials: "same-origin", 
    })
    .then((response) => {
      console.log(response);
      returnValue = response;
    })
    .catch((error) => console.log(`POST ERROR! ${error}`));
  return returnValue;
};
