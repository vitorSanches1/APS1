import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import { useCollection } from "react-firebase-hooks/firestore";

const App = () => {
  const [getBadWords] = useCollection(db.collection("bad_words"));
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  var badWords = [];
  getBadWords?.docs.find(bw => {
    badWords.push(bw.data().word);
  });

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} setUserChat={setUserChat} badWords={badWords} /> 
    </C.Container>
  );
};

export default App;
