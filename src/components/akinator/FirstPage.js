import React from "react";

export default function FirstPage({ setSearchOption, setIsFirst }) {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          width: "100%",
          marginTop: "60px",
        }}
      >
        검색어가 생각나지 않나요? 저희가 도와드릴께요.
      </h3>
      <h3
        style={{
          textAlign: "center",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        어떤 종류의 상품인가요?
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {["채소", "과일", "견과류", "해산물", "건어물", "고기류", "국"].map(
          (category) => (
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
              className="btn"
              size="xxl"
              onClick={() => {
                setSearchOption([category]);
                setIsFirst(false);
              }}
            >
              {category}
            </button>
          )
        )}
      </div>
    </>
  );
}
