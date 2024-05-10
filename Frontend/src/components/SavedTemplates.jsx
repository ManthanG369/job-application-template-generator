// SavedTemplates.js
import React from "react";

const SavedTemplates = ({ savedTemplates }) => {
  return (
    <div>
      <h2>Saved Templates</h2>
      {savedTemplates.length === 0 ? (
        <p>No saved templates yet.</p>
      ) : (
        <ul>
          {savedTemplates.map((template, index) => (
            <li key={index}>
              <p>
                <strong>Position:</strong> {template.position}
              </p>
              <p>
                <strong>Company:</strong> {template.company}
              </p>
              <p>
                <strong>Experience:</strong> {template.experience} years
              </p>
              {/* Render other template details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedTemplates;
