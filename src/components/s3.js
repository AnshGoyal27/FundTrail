import S3FileUpload from 'react-s3';
import { deleteFile } from 'react-s3';
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
// window.Buffer = window.Buffer || require("buffer").Buffer;

  export default function fileUpload(file){
    console.log(file);
    const config = {

      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESSKEY,

    }
    S3FileUpload.uploadFile(file, config)
    .then((data)=>{
      console.log(data.location);
    }).catch((err)=>{
      console.log(err);
    })
  }

  export function fileDelete(){
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESSKEY,
  }

  const filename = 'hello-world.pdf'

  deleteFile(filename, config)
    .then(response => console.log(response))
    .catch(err => console.error(err))


  }

