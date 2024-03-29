import { useState } from "react";

interface IUseMutation<T> {
  loading: boolean;
  data: T;
  error: null | any;
}
type UseMutationResult<T> = [(data: any) => void, IUseMutation<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
