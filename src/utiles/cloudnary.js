import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_CLOUD_KEY,
    api_secret:CLOUDINARY_CLOUD_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath)return null // upload the file on clodinary

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"  // file has been uploaded successfully
        })

        console.log("file is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary files as the upload operation got faild
        return null
        
    }
}

export {uploadOnCloudinary}