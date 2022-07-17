import {useCallback, useEffect, useState} from "react";
import {IMessage} from "react-native-gifted-chat";
import io from "socket.io-client";

const socket = io("http://192.168.1.17:5000");
const SOCKET_EVENTS = Object.freeze({
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  CHAT_MESSAGE: "chatMessage",
  TYPING_STARTED: "typingStarted",
  TYPING_ENDED: "typingEnded"
});

interface useSocketMessagingProps {
  onIncomingChatMessage: (msg: IMessage) => void;
}

const useSocketMessaging = ({onIncomingChatMessage}: useSocketMessagingProps) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [typingId, setTypingId] = useState<string>("");

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CONNECT, () => {
      setIsConnected(true);
    });
    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      setIsConnected(false);
    });

    socket.on(SOCKET_EVENTS.TYPING_STARTED, id => {
      setTypingId(id);
    });
    socket.on(SOCKET_EVENTS.TYPING_ENDED, () => {
      setTypingId("");
    });

    return () => {
      socket.off(SOCKET_EVENTS.CONNECT);
      socket.off(SOCKET_EVENTS.DISCONNECT);
      socket.off(SOCKET_EVENTS.TYPING_STARTED);
      socket.off(SOCKET_EVENTS.TYPING_ENDED);
    };
  }, []);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CHAT_MESSAGE, onIncomingChatMessage);

    return () => {
      socket.off("chatMessage");
    };
  }, [onIncomingChatMessage]);

  const sendMessage = useCallback(
    (msg: IMessage) => {
      onIncomingChatMessage(msg);
      socket.emit(SOCKET_EVENTS.CHAT_MESSAGE, msg);

      socket.emit(SOCKET_EVENTS.TYPING_ENDED);
    },
    [onIncomingChatMessage]
  );

  const startTyping = () => {
    socket.emit(SOCKET_EVENTS.TYPING_STARTED);
  };

  const endTyping = () => {
    socket.emit(SOCKET_EVENTS.TYPING_ENDED);
  };

  return {connectionId: socket.id, isConnected, typingId, sendMessage, startTyping, endTyping};
};

export default useSocketMessaging;
