import React from "react";

export interface ContactFormProps {
  label: String;
}

const ContactForm: React.FC<ContactFormProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default ContactForm;
