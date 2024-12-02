import axios from 'axios';

// import * as SecureStore from 'expo-secure-store';

// Create an Axios instance
const api = axios.create({
//   baseURL: 'https://oneplus-api.onrender.com/api',
baseURL:'http://192.168.29.105:4000/api',
// baseURL:'http://192.168.29.105:4000/api',
// baseURL:'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


const removeUser = async () => {
  try {
    // await AsyncStorage.removeItem('currentUser')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}


// Attach token to headers
api.interceptors.request.use(async (config) => {
  const token =''
  //  await SecureStore.getItemAsync('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});



export const postRequest = async (endpoint: string, data: object) => {
    return api.post(endpoint, data)
      .then((response) => response)
      .catch((error) => {
        console.error("Error making POST request:", error);
        throw error;
      });
  };
  
  export const getRequest = async (endpoint: string) => {
    return await api.get(endpoint)
      .then((response) => response)
      .catch((error) => {
        if (error.response) {
          if(error.response.status==401){
            removeUser();
          }
          // Error response from the server
          console.error("Error making GET request:", error);
          console.log("Status code:", error.response.status); // Access status code from error.response
        }
      });
  };
  
//   export const putRequest = async (endpoint: string, data: object) => {
//     return await axios
//       .put(`${API_BASE_URL}${endpoint}`, data, config)
//       .then((response) => response)
//       .catch((error) => {
//         console.error("Error making POST request:", error);
//         throw error;
//       });
//   };
  
//   export const deleteRequest = async (endpoint: string) => {
//     return await axios
//       .delete(`${API_BASE_URL}${endpoint}`, config)
//       .then((response) => response)
//       .catch((error) => {
//         console.error("Error making GET request:", error);
//         throw error;
//       });
//   };
  






export default api;
