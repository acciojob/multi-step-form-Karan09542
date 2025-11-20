import React from "react";
const MultiStepForm = ({
  data,
  onChange,
  step,
  handlePrevious,
  handleNext,
  title,
}) => {
  const [input1, input2] = data[step];
  return (
    <form>
      <h3>{title}</h3>
      <div id="step1">
        {step + 1 === 1 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
          </>
        )}
      </div>
      <div id="step2">
        {step + 1 === 2 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
          </>
        )}
      </div>
      <div id="step3">
        {step + 1 === 3 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
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
