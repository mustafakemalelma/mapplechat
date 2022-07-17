import React, {useState} from "react";
import {TextInputProps} from "react-native";
import {GiftedChat, IMessage} from "react-native-gifted-chat";
import useSocketMessaging from "../../hooks/useSocketMessaging";

import {ChatScreenProps} from "../routeTypes";

const Chat = ({route}: ChatScreenProps) => {
  const nickname = route.params.nickname;

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  const {sendMessage, typingId, isConnected, connectionId, startTyping, endTyping} = useSocketMessaging({
    onIncomingChatMessage: msg => setMessageList(previousMessages => GiftedChat.append(previousMessages, [msg]))
  });

  const onInputTextChanged = (messageText: string) => {
    if (messageText.length > 0 && message.length === 0) startTyping();
    else if (messageText.length === 0 && message.length > 0) endTyping();

    setMessage(messageText);
  };

  return (
    <GiftedChat
      messages={messageList}
      onSend={newMessages => sendMessage(newMessages[0])}
      isTyping={Boolean(typingId)}
      text={message}
      onInputTextChanged={onInputTextChanged}
      textInputProps={{editable: isConnected} as TextInputProps}
      renderUsernameOnMessage
      user={{
        _id: connectionId,
        name: nickname,
        avatar: "https://placeimg.com/140/140/any"
      }}
    />
  );
};

export default Chat;
