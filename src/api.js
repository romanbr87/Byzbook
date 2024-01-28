import React from 'react';
import axios from 'axios';
const context = React.createContext();

export const mongoRegex_id = /^[0-9a-fA-F]{24}$/
export const whatsappLink = `https://api.whatsapp.com/send?phone=`;
//export const serverURL = (path) => `http://localhost:8081${path}`;
export const serverURL = (path) => `https://itchy-cyan-antelope.cyclic.app${path}`;
export const Provider = context.Provider;
export const Consumer = context.Consumer;
export const divideArray = (n, array) =>
array.reduce((arr, curr, i) => {
    if (i % n === 0) arr.push ([]);
    arr[arr.length - 1].push (curr);
    return arr;
}, [])

export const soryByAtrr = (arr, attr) => {
    if (!arr || arr?.length === 0) return arr;
    arr = arr.sort((a, b) => {
      let res = a[attr].localeCompare(b[attr]);
      return res;
    });
    return arr;
  };
  

export const fetchData =  async (url, method='POST', dataForServer = undefined, options = undefined) => {
    url = url.replace ("//", '/');
    dataForServer =  {...dataForServer, key: 'romanbr87'}
    const requestOptions = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: dataForServer,
        ...options
    }

    try {
        const  {data} = await axios(serverURL(url), requestOptions)
        return data;
    } 
    
    catch (error) {
        const customError = new Error(error.response.data.message)
        throw customError;
    }
} 
    
export const getPost = async (url, data = undefined, options) => {
    return await fetchData (url, 'post', data, options);
}    

