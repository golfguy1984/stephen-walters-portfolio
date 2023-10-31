import React from "react";

import "./VTlist.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#2869CF" }
            : { color: "#a7aaaf" }
        }
      >
        {props.data.expData.company}
      </button>
    </li>
  );
}

export default VTlist;