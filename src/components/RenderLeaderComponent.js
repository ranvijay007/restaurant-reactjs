import React from "react";
import { Media } from "reactstrap";

function RenderLeader(props) {
  var imgStyle = {
    width: "80px",
    height: "80px",
  };

  return (
    <Media className="m-3">
      <Media left>
        <Media
          style={imgStyle}
          object
          src={props.leader.image}
          alt={props.leader.name}
        />
      </Media>
      <Media body className="pr-4 pl-4 pb-4">
        <Media heading>{props.leader.name}</Media>
        <p>{props.leader.designation} </p>
        <p>{props.leader.description}</p>
      </Media>
    </Media>
  );
}

export default RenderLeader;
