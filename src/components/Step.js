import React from "react";
const Step = ({ data, onChange, step }) => {
  return (
    <div id={`step${step+1}`}>
      <h1>{data.title}</h1>
      {data.map((input, index) => (
        <div key={`${data.id}-${index}`} className="input-div">
          <label htmlFor={input.id}>{input.label}:</label>
          <br/>
          <input
            type={input.type}
            id={input.id}
            name={input.name}
            onChange={(e) => onChange(e.target.value,  index)}
            value={input.value}
          />
          <div>{input.error && <p className="error">{input.error}</p>}</div>
        </div>
      ))}
    </div>
  );
};

export default Step;
