import React from "react";
const MultiStepForm = ({
  data,
  onChange,
  step,
  handlePrevious,
  handleNext,
  title,
}) => {
  const input = data[step][0];
  return (
    <form id={`step${step + 1}`}>
      <h3>{title}</h3>
      <div id="step1" className="input-div">
        {step + 1 === 1 && (
          <>
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
          </>
        )}
      </div>
      <div id="step2" className="input-div">
        {step + 1 === 2 && (
          <>
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
          </>
        )}
      </div>
      <div id="step3" className="input-div">
        {step + 1 === 3 && (
          <>
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
          </>
        )}
      </div>
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
    </form>
  );
};

export default MultiStepForm;
