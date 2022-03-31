import React from "react";

export interface ImageUploadProps {
  label: String;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default ImageUpload;
