import React, { useState } from "react";
import akinatorLogic from "../../utils/akinatorLogic";
import { getResult } from "../../apis/akinator";
import { useNavigate } from "react-router-dom";
import FinalPage from "./FinalPage";

export default function NormalPage({
  searchOption,
  setSearchOption,
  usingIndex,
  setUsingIndex,
}) {
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const handleUsingIndex = () => {
    if (
      !akinatorLogic[searchOption[0]][usingIndex + 1] &&
      searchOption.length !== 0
    ) {
      getResult(searchOption)
        .then((response) => {
          setResult(response.data.usingItems);
          setIsFinished(true);
        })
        .catch(() => {
          alert("결과를 찾을 수 없습니다.");
          navigate("/");
        });
    } else {
      setUsingIndex(usingIndex + 1);
    }
  };

  const handleOnClick = (answer) => {
    switch (answer) {
      case "YES":
        setSearchOption([
          ...searchOption,
          [akinatorLogic[searchOption[0]][usingIndex], 1],
        ]);
        handleUsingIndex();
        break;
      case "NO":
        setSearchOption([
          ...searchOption,
          [akinatorLogic[searchOption[0]][usingIndex], 0],
        ]);
        handleUsingIndex();
        break;
      case "?":
        handleUsingIndex();
      default:
      //pass
    }
  };
  return (
    <>
      {isFinished ? (
        <FinalPage result={result} />
      ) : (
        <>
          <h3>{akinatorLogic[searchOption[0]][usingIndex]}</h3>
          <button type="button" onClick={() => handleOnClick("YES")}>
            네
          </button>
          <button type="button" onClick={() => handleOnClick("NO")}>
            아니요
          </button>
          <button type="button" onClick={() => handleOnClick("?")}>
            모르겠다
          </button>
        </>
      )}
    </>
  );
}
