
import {
    getRequest,
    postRequest,
  } from "./service";



  export const createPost = async (data: object) => { //  {title: string; description: string; location: string; date: string; peopleNeeded: number; }
    return await postRequest('/post/createPost', data);
  };


  export const fetchPosts = async () => { 
    return await getRequest('/post/getPost');
  };

 
export const sendMessageThroughPost = async (data: object) => { 
  return await postRequest('/post/sendMessageThroughPost', data);
}//  {title: string; description: string; location: string; date: string; peopleNeeded: number; }


export const getPostDetails = async (postId: string) => { 
  return await getRequest(`/post/getPostDetails/${postId}`);
}