const AWS = require("aws-sdk");
const express = require("express");
const router = express.Router();

const s3 = new AWS.S3();
const S3_BUCKET = "logicstorebucket";

router.get("/files", async (req, res) => {
  try {
    const data = await s3.listObjectsV2({ Bucket: S3_BUCKET }).promise();
    
    const files = await Promise.all(
      data.Contents.map(async (item) => {
        const params = { 
          Bucket: S3_BUCKET, 
          Key: item.Key, 
          Expires: 3600 // URL expires in 1 hour
        };
        
        const signedUrl = await s3.getSignedUrlPromise("getObject", params);
        
        return {
          name: item.Key,
          url: signedUrl
        };
      })
    );

    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Error fetching files from S3" });
  }
});

module.exports = router;
