import { useState } from "react";
import axios from "axios";

export const getData = async (url, bearerToken) => {  
  const response = await axios.get(`http://localhost:8081/${url}`, {
      headers: {
        Authorization: `Bearer ${bearerToken || ""}`,
      },
      credentials: "same-origin",
    })
  const responseData = await response.data;
  
  return responseData;
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
      returnValue = response;
    })
    .catch((error) => console.log(`POST ERROR! ${error}`));
  return returnValue;
};
