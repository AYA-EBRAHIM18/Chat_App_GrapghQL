import { useEffect, useRef } from "react";

// import notificationSound from "../assets/sounds/notification.mp3";
import { useChats } from "../zustand/useChats.jsx";
import { useSocketContext } from "../context/socketContext.jsx";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useChats();
  const chatInputRef = useRef(null);
  const typingRef = useRef(null);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      console.log(newMessage);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);

  useEffect(() => {
    const handleTyping = () => {
      if (typingRef.current) {
        typingRef.current.innerHTML = "Typing....";
      }
    };

    // Function to hide typing indicator
    const handleStopTyping = () => {
      if (typingRef.current) {
        setTimeout(() => {
          typingRef.current.innerHTML = "";
        }, 500);
      }
    };

    // Attach socket listeners
    socket?.on("userTyping", handleTyping);
    socket?.on("userStopTyping", handleStopTyping);

    // Cleanup function
    return () => {
      socket?.off("userTyping", handleTyping);
      socket?.off("userStopTyping", handleStopTyping);
    };
  }, [socket, setMessages]);
  useEffect(() => {
    const chatInput = chatInputRef.current;

    if (chatInput) {
      // Emit typing event
      const handleInput = () => {
        socket.emit("Typing");
      };

      // Emit stop typing event
      const handleKeyUp = () => {
        socket.emit("stopTyping");
      };

      chatInput.addEventListener("input", handleInput);
      chatInput.addEventListener("keyup", handleKeyUp);

      // Cleanup input listeners
      return () => {
        chatInput.removeEventListener("input", handleInput);
        chatInput.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [socket]);

  return { chatInputRef, typingRef };
};
export default useListenMessages;
