"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import {
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { app } from "@/firebaseConfig";
import { getFirestore, setDoc } from "firebase/firestore";
import { FileType } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import {generateRandomString} from "../../../_utils/GenerateRandomString"


function Upload() {
  const{user}=useUser();
  const storage = getStorage(app);
  const db = getFirestore(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");

      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file,downloadURL);
        });
    });
  };

  const saveInfo = async (file,fileUrl) => {
    const docId = generateRandomString().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName:file.Name,
      fileSize:file.size,
      fileType:file.type,
      fileUrl:fileUrl,
      userEmail:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      password:"",
      id:docId,
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+docId

    });
  };
  return (
    <div>
      <h3>Upload and share files</h3>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
