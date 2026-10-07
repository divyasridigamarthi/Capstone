import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus(`File uploaded successfully! Result ID: ${response.data.id}`);
    } catch (error) {
      setUploadStatus('File upload failed. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upload CT Scan</h1>
      <div
        style={styles.uploadArea}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          handleFileUpload(file);
        }}
      >
        <i className="fas fa-cloud-upload-alt" style={styles.icon}></i>
        <p style={styles.text}>Drop CT scan images here or click to browse</p>
      </div>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '32px',
  },
  title: {
    fontSize: '32px',
    color: '#1F2937',
    marginBottom: '24px',
  },
  uploadArea: {
    border: '2px dashed #3B82F6',
    borderRadius: '8px',
    padding: '48px',
    backgroundColor: '#F9FAFB',
    cursor: 'pointer',
    transition: 'border-color 0.3s, background-color 0.3s',
  },
  icon: {
    fontSize: '48px',
    color: '#3B82F6',
    marginBottom: '16px',
  },
  text: {
    fontSize: '16px',
    color: '#6B7280',
  },
};

export default UploadPage;