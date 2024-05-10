// Template.js
import React, { useRef } from "react";

const Template = ({ template, onSaveTemplate }) => {
  const templateRef = useRef(null);

  const copyToClipboard = () => {
    templateRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div className="template">
      <textarea
        ref={templateRef}
        readOnly
        value={generateTemplateText(template)}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <button onClick={copyToClipboard} style={{ marginBottom: "20px" }}>
        Copy Template
      </button>
      <button onClick={() => onSaveTemplate(template)}>Save Template</button>

      <p>
        Dear Hiring Manager,
        <br />
        <br />I hope this message finds you well. I came across your{" "}
        {highlightChanged(template.position)} at{" "}
        {highlightChanged(template.company)}, and I am excited to express my
        interest in joining your team.
        <br />
        <br />
        With over {highlightChanged(template.experience)} years of experience in
        React JS, HTML, CSS, and JavaScript, I am confident in my ability to
        contribute effectively to your projects. I am particularly drawn to the
        opportunity to work with a dynamic team and further develop my skills
        while contributing to meaningful projects at{" "}
        {highlightChanged(template.company)}.
        <br />
        <br />
        I am available for an immediate start and am flexible with the interview
        process as outlined. Please find attached my CV for your consideration.
        I look forward to the possibility of discussing how my background,
        skills, and enthusiasm can align with the needs of your team.
        <br />
        <br />
        Thank you for considering my application. I am eager to learn more about
        this opportunity and am available at your earliest convenience for an
        interview.
        <br />
        <br />
        Warm regards,
        <br />
        {highlightChanged(template.name)},
        <br />
        {highlightChanged(template.contact)}
      </p>
    </div>
  );
};

const generateTemplateText = (template) => {
  return `Dear Hiring Manager,

I hope this message finds you well. I came across your ${template.position} at ${template.company}, and I am excited to express my interest in joining your team.

With over ${template.experience} years of experience in React JS, HTML, CSS, and JavaScript, I am confident in my ability to contribute effectively to your projects. I am particularly drawn to the opportunity to work with a dynamic team and further develop my skills while contributing to meaningful projects at ${template.company}.

I am available for an immediate start and am flexible with the interview process as outlined. Please find attached my CV for your consideration. I look forward to the possibility of discussing how my background, skills, and enthusiasm can align with the needs of your team.

Thank you for considering my application. I am eager to learn more about this opportunity and am available at your earliest convenience for an interview.

Warm regards,
${template.name}
${template.contact}`;
};

const highlightChanged = (value) => {
  return <span style={{ backgroundColor: "yellow" }}>{value}</span>;
};

export default Template;
