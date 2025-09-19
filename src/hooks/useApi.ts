import { useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

export function useApi<T = any>(url?: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    let source: CancelTokenSource = axios.CancelToken.source();
    setLoading(true);
    setError(null);
    axios
      .get<T>(url, { cancelToken: source.token })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err?.message ?? "Unknown error");
      })
      .finally(() => setLoading(false));
    return () => source.cancel("Request cancelled");
  }, [url]);

  return { data, loading, error };
}
