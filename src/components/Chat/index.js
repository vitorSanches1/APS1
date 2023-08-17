import React from "react";
import ChatHeader from "../ChatHeader";
import * as C from "./styles";
import Default from "./../Default";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";

const Chat = ({ userChat, badWords, setUserChat }) => {
  if (!userChat) return <Default />;

  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} setUserChat={setUserChat} />
      <ChatBody chatId={userChat?.chatId} badWords={badWords}/>
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
};

export default Chat;
