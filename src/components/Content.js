import React from "react";


function Content(props) {
  return (
    <div className="px-9 pt-5 absolute w-full">
      {props.children}
    </div>
  );
}

export default Content;
