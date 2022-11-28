import { UserI } from "./../types";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useUser = () => {
  const [user, setUser] = useState<UserI | null>(null);
  const router = useRouter();

  const updateUser = useCallback((userInstance: object) => {
    localStorage.setItem("session", JSON.stringify({ user: userInstance }));
  }, []);

  const getUser = useCallback(() => {
    let session = JSON.parse(localStorage.getItem("session") as string);
    if (session) {
      setUser(session.user);
    } else {
      localStorage.setItem("session", JSON.stringify({ user: null }));
    }
  }, []);

  const logout = () => {
    localStorage.setItem("session", JSON.stringify({ user: null }));
    router.push("/sign-in");
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  return { user, updateUser, logout };
};
