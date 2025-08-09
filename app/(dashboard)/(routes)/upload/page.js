"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../firebaseConfig";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

const Upload = () => {
  const storage = getStorage(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };

    const imageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(imageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    });

    console.log("File to upload:", file);
  };

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[30px] text-center">
        Start
        <strong className="text-primary"> Uploading </strong>
        File and
        <strong className="text-primary"> Share </strong> it
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
};

export default Upload;
