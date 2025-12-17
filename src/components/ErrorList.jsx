import React from "react";

const ErrorList = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <ul style={{ color: "red" }}>
      {errors.map((err, index) => (
        <li key={index}>
          {err.label}: {err.message}
        </li>
      ))}
    </ul>
  );
};

export default ErrorList;
