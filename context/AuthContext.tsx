"use client";
import React from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { app } from "../lib/Firebase";
const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

type propTypes = {
  children: React.ReactNode;
};
export const AuthContextProvider = ({ children }: propTypes) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
