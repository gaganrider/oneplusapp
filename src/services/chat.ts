import {
    // deleteRequest,
    getRequest,
    postRequest,
    // putRequest,
  } from "./service";






export const getAllChats = async () => {
  return await getRequest('/chat/getAllChats');
}


export const getAllMessages = async (data: object) => {
  return await postRequest(`/chat/getAllMessages`,data);
}


export const sendMessage=async(chatId:string,message:string)=>{
  return await postRequest('/chat/sendMessage',{chatId,message});
}

export const sendImage=async(data:object)=>{
  return await postRequest('/chat/sendImage',data);
}

export const getChatDetails = async (chatId: string) => {
  return await getRequest(`/chat/getChatDetails/${chatId}`);
}



export const acceptChatRequest = async (chatId: string) => {
  return await getRequest(`/chat/acceptChatRequest/${chatId}`);
}


















  // export const getChats = async () => {
  //   return await getRequest('/convo/getChats');
  // };


  
  // export const getMessages = async (chatId: string) => {
  //   return await getRequest(`/convo/getMessages/${chatId}`);
  // };
  
  // export const accessChat = async (userId: string) => {
  //   return await postRequest('/convo/accessChat', { userId });
  // };
  
  // export const sendMessageRequest = async (receiverId: string, postId: string, message: string) => { 
  //   return await postRequest('/convo/send-message-request', { receiverId, postId, message });
  // };
  
  // export const getMessageRequest = async (requestId: string) => {
  //   return await postRequest('/convo/message-request' , {requestId});
  // };
  
  // export const handleMessageRequest = async (requestId: string , action: string) => {
  //   return await postRequest('/convo/handle-message-request', { requestId , action});
  // };




  // export const sendMessage = async (chatId: string, content: string, fileUrl: string, fileType: string) => {
  //   return await postRequest('/convo/message', { chatId, content, mediaUrl: fileUrl, contentType: fileType });
  // };
  
  // export const createConversation = async (participants: string[]) => {
  //   return await postRequest('/conversations', { participants });
  // };
  
  // export const updateConversation = async (conversationId: string, data:object) => {
  //  return await putRequest(`/conversations/${conversationId}`, data);
  // };

  // export const deleteConversation = async (conversationId: string) => {
  //   return await deleteRequest(`/conversations/${conversationId}`);
  // };