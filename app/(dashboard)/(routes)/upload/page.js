import React from "react";
import UploadForm from "./_components/UploadForm";

const Upload = () => {
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[30px] text-center">
        Start
        <strong className="  text-primary"> Uploading </strong>
        File and
        <strong className="text-primary"> Share </strong> it
      </h2>
      <UploadForm />
    </div>
  );
};

export default Upload;
