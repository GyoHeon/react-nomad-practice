import { useState } from "react";

export default function useMutation(
  url: string
): [
  (data: any) => void,
  { loading: boolean; data: null | any; error: null | any }
] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);
  function mutation(data: any) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return [mutation, { loading, data, error }];
}
