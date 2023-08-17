import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const chatUser = getUserItem?.docs?.[0]?.data();
  const avatar = chatUser?.photoURL;
  const email = getUser(users, user);
  const name = chatUser?.name ? chatUser?.name : email.split("@")[0];

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: name,
      photoURL: avatar,
    };

    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
      {chatUser ? <C.Avatar src={avatar} /> : <MdPerson />}
      <C.Name>{name}</C.Name>
    </C.Container>
  );
};

export default SidebarChatsItem;
