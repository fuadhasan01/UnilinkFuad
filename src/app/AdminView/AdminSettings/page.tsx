"use client";
import { useState } from 'react';



export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected.');
    }
  }
    return (
       <div>
        <h1 className='text-5xl font-bold mb-10 text-center'>Admin Settings</h1>
        <div className='flex justify-between w-3/4 m-auto px-11 py-6 border-2 border-slate-300  rounded-2xl'>
            <div className='w-9/12'>
               <div className='flex items-center gap-5 py-6'>
                 <label htmlFor="" className='text-2xl'>Admin Name: </label>
                 <input type="text" className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id="" />
               </div>
               <div className='flex items-center gap-5 py-6'>
               <label htmlFor="" className='text-2xl'>Email : </label>
                 <input type="email"  className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'  name="" id="" />
               </div>
               <div className='flex items-center gap-5 py-6'>
                <label htmlFor="" className='text-2xl'>Password : </label>
                 <input type="password"  className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id="" />
               </div>
            </div>
             
            <div className='w-3/12'>
                 <div>
                  <input type="file" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button>
                </div>

            </div>
            
        </div>
        <div className='flex justify-end w-9/12 m-auto'>
            <button className='bg-blue-400 text-white px-5 py-4 text-xl rounded-2xl my-8'>Save Changes</button>
        </div>
            
       </div>
    ) 
  }
