import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import FirstPage from "../components/akinator/FirstPage";
import NormalPage from "../components/akinator/NormalPage";
import MobileDisplay from "../components/common/MobileDisplay";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Akinator() {
  const navigate = useNavigate();
  const [isFirst, setIsFirst] = useState(true);
  const [searchOption, setSearchOption] = useState([]);
  const [usingIndex, setUsingIndex] = useState(0);

  return (
    <>
      <MobileDisplay>
        <Header />
        {isFirst ? (
          <FirstPage
            setSearchOption={setSearchOption}
            setIsFirst={setIsFirst}
          />
        ) : (
          <NormalPage
            searchOption={searchOption}
            setSearchOption={setSearchOption}
            usingIndex={usingIndex}
            setUsingIndex={setUsingIndex}
          />
        )}
        <button onClick={() => navigate("/")}>BACK</button>
        <Navbar />
      </MobileDisplay>
    </>
  );
}
