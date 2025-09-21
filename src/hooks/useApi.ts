import { useEffect, useState } from "react";
import axios from "axios";

export function useApi<T = any>(url?: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    setLoading(true);
    setError(null);

    axios
      .get<T>(url, { signal: controller.signal })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (axios.isCancel(err) || err.name === "CanceledError") return;
        setError(err?.message ?? "Unknown error");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
