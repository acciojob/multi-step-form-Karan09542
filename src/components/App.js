import React, { useCallback, useEffect, useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = React.useState([
    [
      {
        value: "",
        type: "text",
        id: "first_name",
        label: "First Name",
        error: "",
        name: "firstName",
      },
      {
        value: "",
        type: "text",
        id: "last_name",
        label: "Last Name",
        error: "",
        name: "lastName",
      },
    ],
    [
      {
        value: "",
        type: "text",
        id: "brand",
        label: "Brand",
        error: "",
        name: "make",
      },
      {
        value: "",
        type: "text",
        id: "model",
        label: "Model",
        error: "",
        name: "model",
      },
    ],
    [
      {
        value: "",
        type: "text",
        id: "card_info",
        label: "Card Number",
        error: "",
        name: "card_number",
      },
      {
        value: "",
        type: "text",
        id: "expiry_date",
        label: "Expiry Date",
        error: "",
        name: "expiry_date",
      },
    ],
  ]);

  const getError = (name, value) => {
    if (name === "card_number" && value.length !== 12) {
      return "Credit Card Number must be 12 digit long";
    }
    if (
      name === "expiry_date" &&
      value.split("/").length !== 2 ||
      !value.split("/").every((num) => parseInt(num) > 0 && num.length <= 2 && num.length >0)
    ) {
      return "Expiry Date must be in MM/YY format";
    }
  };

  const handleChangeInput = useCallback(
    (value, index) => {
      setForm((prevForm) => {
        const updated = [...prevForm];
        const currentStep = [...updated[step]]; // make sure we clone inner array too
        currentStep[index] = {
          ...currentStep[index],
          value,
          error: getError(currentStep[index].name, value),
        };
        updated[step] = currentStep;
        return updated;
      });
    },
    [step]
  );

  const handlePrevious = () => {
    setStep((prev) => {
      if (prev === 0) return prev;
      else return prev - 1;
    });
  };
  const handleNext = () => {
    const item = form[step];
    if (item.some((input) => !input.value.trim())) return;
    setStep((prev) => {
      if (prev === form.length - 1) return prev;
      else return prev + 1;
    });
  };
  function getTitle(step) {
    if (step === 0) {
      return "Customer Details";
    } else if (step === 1) {
      return "Car Details";
    } else if (step === 2) {
      return "Payment Details";
    }
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <form>
        <h3>{getTitle(step)}</h3>
        <Step step={form[step]} onChange={handleChangeInput} />
        <div className="buttons">
          {step > 0 && (
            <button type="button" onClick={handlePrevious}>
              previous
            </button>
          )}
          {step < form.length - 1 && (
            <button type="button" onClick={handleNext}>
              next
            </button>
          )}
          {step === form.length - 1 && <button type="submit">submit</button>}
        </div>
      </form>
    </div>
  );
};

export default App;
