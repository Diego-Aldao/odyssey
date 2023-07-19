import { useState } from "react";

type Data = {
  pagination: object;
  data: object[];
};

type Error = {
  status: number;
  type: string;
  message?: string;
  messages?: object;
  error: string | null;
};

const useFetch = () => {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const fetchData = (url: string) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: Data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err: Error) => setError(err));
  };

  return { fetchData, data, loading, error };
};

export default useFetch;
