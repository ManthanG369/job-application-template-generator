// App.js
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Template from "./components/Template";
import SavedTemplates from "./components/SavedTemplates";
const App = () => {
  const [templateData, setTemplateData] = useState(null);
  const [savedTemplates, setSavedTemplates] = useState([]);

  useEffect(() => {
    const storedTemplates = JSON.parse(localStorage.getItem("savedTemplates"));
    if (storedTemplates) {
      setSavedTemplates(storedTemplates);
    }
  }, []);

  const generateTemplate = (data) => {
    setTemplateData(data);
  };

  const saveTemplate = (template) => {
    const updatedTemplates = [...savedTemplates, template];
    setSavedTemplates(updatedTemplates);
    localStorage.setItem("savedTemplates", JSON.stringify(updatedTemplates));
    alert("Template saved successfully!");
  };

  return (
    <div className="container">
      <h1>Job Application Template Generator</h1>
      <Form generateTemplate={generateTemplate} />
      {templateData && (
        <Template template={templateData} onSaveTemplate={saveTemplate} />
      )}
      {/* <SavedTemplates savedTemplates={savedTemplates} /> */}
    </div>
  );
};

export default App;
