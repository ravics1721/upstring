import React from "react";
import PropTypes from "prop-types";

const Message = (props) => {
  const { message, time, isSent, status } = props;
  const showStatusIcon = isSent ? true : false;
  return (
    <div className={isSent ? "message-data sent" : "message-data recieved"}>
      <div className={isSent ? "message sent" : "message recieved"}>
        {message}
      </div>
      <caption className="message-time">
        {showStatusIcon && (status === 1 ? <i class="ri-check-line"></i> : "")}
        {showStatusIcon &&
          (status === 2 ? <i class="ri-check-double-line"></i> : "")}
        {time}
      </caption>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  time: PropTypes.string,
  isSent: PropTypes.bool.isRequired,
  status: PropTypes.number,
};

export default Message;
