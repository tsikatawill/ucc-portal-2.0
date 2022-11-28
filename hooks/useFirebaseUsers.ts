import { DocUserI } from "./../types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useFirebaseUsers = () => {
  const addUser = (user: DocUserI) => {
    setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
    }).catch((error) => {
      console.log({ error });
    });
  };

  return { addUser };
};
