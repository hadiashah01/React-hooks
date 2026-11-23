import { useEffect, useState } from "react";
export default function LocalStorageHook(key, initialVal) {
  const [fullName, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialVal,
  );
  useEffect(() => {
    localStorage.setItem(key, fullName);
  }, [fullName]);
  return [fullName, setName];
}
