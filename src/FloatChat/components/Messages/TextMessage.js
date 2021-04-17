import React from "react";
import Linkify from "react-linkify";

const TextMessage = (props) => {
  return (
    <div className="sc-message--text">
      {<Linkify properties={{ target: "_blank" }}>{props.data.text}</Linkify>}
      <div style={{ textAlign: "right" }}>
        {props.time.getHours()}:{props.time.getMinutes()}
      </div>
    </div>
  );
};

export default TextMessage;
