import React, { useState, ChangeEvent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import MultiStep from "./pages/MultiStep";
import SignUp from "./pages/SignUp";

function App() {
  const [showMultiStepForm, setShowMultiStepForm] = useState(false);

  const handleFormTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowMultiStepForm(event.target.checked);
  };

  return (
    <div>
      <CssBaseline />
      <Navbar
        showMultiStepForm={showMultiStepForm}
        onFormTypeChange={handleFormTypeChange}
      />
      {showMultiStepForm ? <MultiStep /> : <SignUp />}
    </div>
  );
}

export default App;
