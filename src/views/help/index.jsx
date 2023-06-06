import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm6yG0AQBmFIEEL8ZzM2Tw3mtvoUYnj2I",
  authDomain: "car-rental-eede6.firebaseapp.com",
  projectId: "car-rental-eede6",
  storageBucket: "car-rental-eede6.appspot.com",
  messagingSenderId: "903624290309",
  appId: "1:903624290309:web:71d1d98d66543b6d0a6c6c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export default function Help() {
  const { isAuthenticating, profile } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    profile: state.profile,
  }));

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch messages when component mounts
    fetchMessages();
  }, []);
  useEffect(() => {
    // Scroll to the latest message when the messages update
    scrollToBottom();
  }, [messages]);
  const fetchMessages = async () => {
    try {
      // Fetch messages from Firestore
      const messagesRef = firestore.collection("messages");
      const messagesSnapshot = await messagesRef.orderBy("createdAt").get();
      const messagesData = messagesSnapshot.docs.map((doc) => doc.data());

      // Set the messages in state
      setMessages(messagesData);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const addMessage = async (message) => {
    try {
      // Add the new message to Firestore
      const messagesRef = firestore.collection("messages");
      await messagesRef.add(message);
    } catch (error) {
      console.error("Failed to add message:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageToAdd = {
      fullname: profile.fullname,
      email: profile.email,
      avatar: profile.avatar,
      content: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      id: Math.random().toString(),
      role: profile.role,
    };

    await addMessage(messageToAdd);

    // Fetch updated messages
    fetchMessages();

    // Clear the new message input
    setNewMessage("");
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh", // Set the height to 90vh
        justifyContent: "flex-start", // Adjust the vertical alignment
        alignItems: "center",
        paddingTop: "17vh", // Add top padding of 10vh
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        LifeWay Help Chat
      </h1>
      <div
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "0 20px",
          width: "65%",
          paddingTop: "10vh",
        }}
      >
        <ul>
          {messages.length > 0 &&
            messages.map((message) => (
              <li
                style={{
                  flexDirection: "column",
                  display: "flex",
                }}
                key={message.id}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  {console.log(message)}
                  <img
                    src={
                      message.role === "ADMIN"
                        ? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1686042945~exp=1686043545~hmac=8f95ef7785766837a053485ab2ba857a92b722f325e8e229b2969ab7548a2711"
                        : message.avatar
                    }
                    alt="Avatar"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  />

                  <div>
                    <h4
                      style={{
                        marginBottom: "3px",
                        color: message.role !== "USER" ? "blue" : "black",
                      }}
                    >
                      {message.fullname}
                    </h4>
                    <p
                      style={{
                        fontSize: message.role !== "USER" ? "16px" : "12px",
                        color: message.role !== "USER" ? "blue" : "#888",
                      }}
                    >
                      {message.role}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "10px",
                  }}
                >
                  <p>{message.content}</p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    {message.createdAt.toDate().toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          width: "55vw",
        }}
        onSubmit={handleSubmit}
      >
        <textarea
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            resize: "none",
            marginRight: "8px",
          }}
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          placeholder="Type your message..."
        ></textarea>
        <button
          className="btn"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
