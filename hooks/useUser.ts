import { UserI } from "./../types";
import { useState, useCallback, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState<UserI | null>(null);

  const updateUser = useCallback((userInstance: object) => {
    localStorage.setItem("session", JSON.stringify({ user: userInstance }));
  }, []);

  useEffect(() => {
    let session = JSON.parse(localStorage.getItem("session") as string);
    if (session) {
      setUser(session.user);
    } else {
      localStorage.setItem("session", JSON.stringify({ user: null }));
    }
  }, []);

  return { user, updateUser };
};
