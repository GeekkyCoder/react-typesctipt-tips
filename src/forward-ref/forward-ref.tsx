import React, { useRef, forwardRef } from "react";

interface HiddenFileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HiddenFileInput = forwardRef<HTMLInputElement, HiddenFileInputProps>(
  ({ onChange }, ref) => {
    return (
      <input
        type="file"
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
    );
  }
);

const ImageUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      console.log("files", event.target.files[0]);
      //process the file here
    }
  };

  return (
    <div>
      <img
        src="https://via.placeholder.com/150"
        alt="click to upload"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      />
      <HiddenFileInput ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};


export default ImageUploader