import React from "react";
import { useNavigate } from "react-router-dom";

export default function FinalPage({ result }) {
  const navigate = useNavigate();
  return (
    <>
      <h3 style={{ textAlign: "center" }}>추천 결과</h3>
      <h3 style={{ textAlign: "center" }}>클릭해서 검색하세요</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {result?.map((item) => (
          <button
            style={{
              backgroundColor: "#6937a1",
              border: "none",
              width: "100px",
              minWidth: "100px",
              height: "40px",
              margin: "5px",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={() => navigate("/")}
          >
            {item.itemName}
          </button>
        ))}
      </div>
    </>
  );
}
