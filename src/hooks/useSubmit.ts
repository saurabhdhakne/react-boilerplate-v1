import { useState } from 'react';
import { submitData } from '../api/api';
 
const useSubmit = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
 
  const handleSubmit = async (url: string, payload: Record<string, any>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await submitData(url, payload);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
 
  return { data, loading, error, handleSubmit };
};
 
export default useSubmit;