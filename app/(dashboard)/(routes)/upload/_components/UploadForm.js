"use client";

import { AlertCircle } from "lucide-react";
import React, { useState } from "react";

function UploadForm({ uploadBtnClick }) {
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState(false);

  const onFileSelect = (file) => {
    if (file && file.size > 3000000) {
      console.log("File size is greater than 3MB");
      setFileError(true);
      setFile(null);
    } else {
      setFile(file);
      setFileError(false);
    }
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG (MAX. 3MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {fileError && <AlertCircle msg={"Max file size exceeded"} />}
      <button
        disabled={!file}
        className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400"
        onClick={() => uploadBtnClick(file)}
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
