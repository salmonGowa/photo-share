"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'
import{app}from '@/firebaseConfig'
import {getStorage} from "firebase/storage";
function Upload() {
  const storage=getStorage(app)
  const uploadFile=(file)=>{


  }
  return (
    <div>
      <h3>Upload and share files</h3>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file)}/>
      
    </div>
  )
}

export default Upload