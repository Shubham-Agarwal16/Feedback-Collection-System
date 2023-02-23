import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="field">
      <label className="label is-medium">{label}</label>
      <div className="control"></div>
      <input {...input} className="input is-medium" style={{ marginBottom: "5px" }} />
      <div className="has-text-danger" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
