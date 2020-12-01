import {useState, useEffect} from "react";
import axios from "axios";

export const useAxios = (options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runAxios = async () => {
    setIsLoading(true);
    try{
      const res = await axios(options);
      setResponse(res.data);
      setIsLoading(false);
    } catch(error) {
      setError(error);
    }
  }

  useEffect(() => {
    runAxios();
  }, []);
  
  return {response, error, isLoading, setResponse};
}
