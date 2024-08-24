"use client";
import { useState } from 'react';

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploadStatus('Uploading...');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response) {
        var newfile = formData.get('file');
        console.log(newfile.name);      
        console.log(newfile.size);  
        const data = await response.json();
        setUploadStatus('Upload successful!');
        console.log('Success:', data.message);
      } else {
        setUploadStatus('Upload failed!');
        console.error('Failed to upload file:', response.statusText);
      }
    } catch (error) {
      setUploadStatus('Error occurred during upload.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}
