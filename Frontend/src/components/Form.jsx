// Form.js
import React, { useState } from "react";
import { object, string, number } from "zod";

const schema = object({
  name: string().min(1),
  position: string().min(1),
  company: string().min(1),
  experience: number().min(0),
  contact: string().min(1),
});

const Form = ({ generateTemplate }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    experience: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert value to a number if the field is "experience"
    const normalizedValue = name === "experience" ? parseFloat(value) : value;

    setFormData({ ...formData, [name]: normalizedValue });
    // Validate on change
    validateField(name, normalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      generateTemplate(formData);
    }
  };

  const validateField = (name, value) => {
    try {
      schema.pick({ [name]: value }).parse({ [name]: value });
      // Remove error if field is valid
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.errors[0].message });
    }
  };

  const validateForm = () => {
    try {
      schema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={errors.name ? "error" : ""}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <input
        type="text"
        name="position"
        placeholder="Position Name"
        value={formData.position}
        onChange={handleChange}
        className={errors.position ? "error" : ""}
      />
      {errors.position && <p className="error">{errors.position}</p>}
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        className={errors.company ? "error" : ""}
      />
      {errors.company && <p className="error">{errors.company}</p>}
      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        value={formData.experience}
        onChange={handleChange}
        className={errors.experience ? "error" : ""}
      />
      {errors.experience && <p className="error">{errors.experience}</p>}
      <input
        type="tel"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className={errors.contact ? "error" : ""}
      />
      {errors.contact && <p className="error">{errors.contact}</p>}
      <button type="submit">Generate Template</button>
    </form>
  );
};

export default Form;
