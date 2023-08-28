import { useState, useEffect } from "react";

const useFetch = <T,>(url: string) => {
  const [respuestaApi, setRespuestaApi] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const fetchData = (url: string) => {
    setLoading(true);
    setError(undefined);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("El servidor respondio con un error");
        return response.json();
      })
      .then((data: T) => {
        setRespuestaApi(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    void fetchData(url);
  }, [url]);

  useEffect(() => {
    if (!error) return;

    setTimeout(() => {
      void fetchData(url);
    }, 3000);
  }, [error]);

  return { respuestaApi, loading };
};

export default useFetch;
