import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// 사용자 데이터 가져오기
fetch(
  "https://noveland-user-database-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
  {
    method: "POST",
    body: JSON.stringify({
      id: "sangjun-park-201520131",
      password: "hello",
      userId: uuidv4,
      novel: {
        writingNovelList: [],
        readingNovelList: [],
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }
)
  .then((response) => response.json())
  .then((json) => console.log(json));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
