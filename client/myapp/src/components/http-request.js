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
