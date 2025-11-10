import React from "react";
const Step = ({ step, onChange }) => {
  return (
    <div>
      <h1>{step.title}</h1>
      {step.map((input, index) => (
        <div key={`${step.id}-${index}`} className="input-div">
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
