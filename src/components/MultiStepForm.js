import React from "react";
const MultiStepForm = ({
  data,
  onChange,
  step,
  handlePrevious,
  handleNext,
  form,
}) => {
  return (
    <div id={`step${step + 1}`}>
      <h1>{data[step].title}</h1>
      {data[step].map((input, index) => (
        <div key={`${data.id}-${index}`} className="input-div">
          <label htmlFor={input.id}>{input.label}:</label>
          <br />
          <input
            type={input.type}
            id={input.id}
            name={input.name}
            onChange={(e) => onChange(e.target.value, index)}
            value={input.value}
          />
          <div>{input.error && <p className="error">{input.error}</p>}</div>
        </div>
      ))}
      <div className="buttons">
        {step > 0 && (
          <button type="button" onClick={handlePrevious}>
            previous
          </button>
        )}
        {step < data.length - 1 && (
          <button type="button" onClick={handleNext}>
            next
          </button>
        )}
        {step === data.length - 1 && <button type="submit">submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
