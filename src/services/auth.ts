import {
    // getRequest,
    postRequest,
  } from "./service";


  export const sendOtp = async (phoneNumber: string) => {
    return await postRequest('/auth/send-otp', { phoneNumber });
  };


  export const verifyOtp = async (phoneNumber: string, otp: string) => {
    return await postRequest('/auth/send-otp', { phoneNumber, otp });
  };


