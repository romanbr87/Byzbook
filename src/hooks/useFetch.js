import { useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "../api";

const defaultHeaders={'Content-Type': 'application/json'}
const useFetch = (url, method='POST', body = undefined, headers=defaultHeaders) => {
    const [data, setData] = useState(undefined);
    
    console.log (`${serverURL(url)}`)
    useEffect(() => {
        const cancelSource = axios.CancelToken.source();
        (async () => {
            try {
                const response = await axios (serverURL(url), { 
                    method,
                    headers,
                    withCredentials: true,
                    data: {...body },
                    cancelToken: cancelSource.token, 
                });
                setData (response.data); 
            }
            catch (e) {
                if (axios.isCancel(e)) {
                    
                } 
                else {
                    //todo: handle other errors
                }
            }
        })();
        

        return () => { 
            cancelSource.cancel();
        };

    }, [body, headers, method, url]);
  
    return {data, setData};
  };
  
  export default useFetch;