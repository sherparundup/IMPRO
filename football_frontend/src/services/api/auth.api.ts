import API from "../axiosInstance";
import { GoogleUser } from "@/types/auth.type";


// Mutation: send Google session info to backend
export const syncGoogleUser = async (user: GoogleUser) => {
  const response = await API.post("api/user/googleSync", user);
  console.log("Sync response:", response.data); 
  return response.data;
};
