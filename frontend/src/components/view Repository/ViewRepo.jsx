
import { useEffect, useState } from "react";
import axios from "axios";

export default function S3FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await axios.get("http://localhost:3002/api/s3/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    }
    fetchFiles();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pushed Files</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        {files.length > 0 ? (
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between p-2 border rounded-md">
                <span>{file.name}</span>
               
                <a
                  href={file.url}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </li>
            ))}
             
          </ul>
        ) : (
          <p>No files found.</p>
        )}
      </div>
    </div>
  );
}

