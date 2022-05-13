import { storage } from "../config/firebase";
import { uploadBytes, getDownloadURL, deleteObject, ref } from "firebase/storage";

export const insertImage = async (file: File, projectName: string, number: number) => {
  const newFile = ref(storage, `${projectName}/${projectName}_${number}`)

  const upload = await uploadBytes(newFile, file)
  const photoUrl = await getDownloadURL(upload.ref)
  
  return photoUrl
}
  
export const deleteImage = async (projectName: string, number: number) => {
  const folderRef = ref(storage, `${projectName}/${projectName}_${number}`);

  return deleteObject(folderRef)
}