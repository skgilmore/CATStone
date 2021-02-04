import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ChatContext = createContext()

// This component establishes what data can be used.
export const ChatProvider = (props) => {
    const [chats, setChats] = useState([])

const getChats = () => {
    return fetch('http://localhost:8088/chats')
    .then(res => res.json())
    .then(setChats)
}
const getChatById = (id) => {
    return fetch(`http://localhost:8088/chats/${id}`)
        .then(res => res.json())
        
}

 const addChat = chat => {
    return fetch(`http://localhost:8088/chats`, {
       
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
        // .then(getChats)
        .then(response => response.json())

}
const updateChat = chat => {
    return fetch(`http://localhost:8088/chats/${chat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chat)
    })
      .then(getChats)
  }

const deleteChat = chatId => {
    return fetch(`http://localhost:8088/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
}
return (
    <ChatContext.Provider value={{
        chats, getChats, addChat, deleteChat, getChatById, updateChat

    }}>
        {props.children}
    </ChatContext.Provider>
)
}