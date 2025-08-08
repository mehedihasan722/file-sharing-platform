"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="flex items-center gap-2 justify-between border rounded-md mt-5 p-2 border-blue-400">
      <div className="flex items-center  p-3  ">
        <Image
          src="/file.png"
          alt="File Preview"
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="text-left ">
          <h2 className="text-[20px]">{file.name}</h2>
          <h2 className="text-[12px]">
            {file?.type}/ {file.size / 1024 / 1024}MB
          </h2>
        </div>
      </div>

      <X className="text-red-500 cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
};

export default FilePreview;
