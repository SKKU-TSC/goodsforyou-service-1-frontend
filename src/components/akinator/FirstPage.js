import React from "react";

export default function FirstPage({ setSearchOption, setIsFirst }) {
  return (
    <>
      <h3>검색어가 생각나지 않나요? 저희가 도와드릴께요.</h3>
      <h4>어떤 종류의 상품인가요?</h4>
      {["채소", "과일", "견과류", "해산물", "건어물", "고기류", "국"].map(
        (category) => (
          <button
            style={{
              margin: 2,
              backgroundColor: "purple",
              textAlign: "center",
            }}
            type="button"
            onClick={() => {
              setSearchOption([category]);
              setIsFirst(false);
            }}
          >
            {category}
          </button>
        )
      )}
    </>
  );
}
