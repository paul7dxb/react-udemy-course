import { useCallback, useState } from "react";

//requestConfig object contains url, method, headers, body
//applyData function handles the data that comes back from the request
//Assumes working with JSON data

const useHttp = () => {

    

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback( async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
        //Check these parameters are set. If not set a default GET request
      const response = await fetch(
        requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);

    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);

  return {
    isLoading,
    error,
    sendRequest
  }
};

export default useHttp;
