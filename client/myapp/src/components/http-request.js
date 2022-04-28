import axios from "axios";

export const getData = async (url) => {
  const result = axios
    .get(`https://novel-and-default-rtdb.firebaseio.com/${url}`, {
      credentials: "same-origin",
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(`GET ERROR! ${error}`));

  return result;
};

export const postData = async (url, data) => {
  const result = await axios
    .post(`https://localhost:8081/${url}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(`POST ERROR! ${error}`));

  return result;
};
