import React from "react";

export interface EditorProps {
  label: String;
}

const Editor: React.FC<EditorProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default Editor;
