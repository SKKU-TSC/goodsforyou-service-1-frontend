import React from "react";
import { useNavigate } from "react-router-dom";

export default function FinalPage({ result }) {
  const navigate = useNavigate();
  return (
    <>
      <p>끝나는 화면</p>
      {result?.map((item) => (
        <button onClick={navigate("/")}>{item.itemName}</button>
      ))}
    </>
  );
}
