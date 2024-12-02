import { getRequest, postRequest } from "./service";


export const loginUser = async (data: object) => {
    //email: string, password: string
    return await postRequest("/user/user-login", data);
  };
  
  export const verifyOtp = async (data: object) => {
    return await postRequest("/user/verify-otp", data);
  }
  
  export const registerUser = async (data: object) => {
    return await postRequest("/auth/register", data);
  };
  
  export const logout = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  
    // Clear any cookies (if used)
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };
  
  
  export const updateUser = async ( data: object) => {
    return await postRequest(`/auth/update-user`, data);
     
  };
  
  
  export const searchUsers = async (query: string) => {
   return await getRequest(`/searchUsers?search=${query}`);
  };