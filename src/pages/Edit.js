import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const navigate = useNavigate();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={(e) => navigate("/")} className="btn btn-danger mt-2">
        Back to Homepage
      </button>
      <div ref={memeRef} className="mt-5">
        <img width="300px" src={params.get("url")} alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <button onClick={addText} className="btn mt-2 btn-dark">
        Add Text
      </button>
      <button
        onClick={(e) => {
          exportComponentAsJPEG(memeRef);
        }}
        className="btn btn-success mt-2 ms-2"
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
