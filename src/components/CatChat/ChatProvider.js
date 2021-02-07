import React, { useState, createContext } from "react"

/* -------------------- ALLOW IMPORT OF CONTEXT TO TO BE USED BY INDIVIDUAL COMPONENTS-------------------- */
export const ChatContext = createContext()

export const ChatProvider = (props) => {
    const [chats, setChats] = useState([])

const getChats = () => {
    return fetch('http://localhost:8088/chats')
    .then(res => res.json())
    .then(setChats)
}
const getChatById = (id) => {
    return fetch(`http://localhost:8088/chats/${id}?_expand=cat`)
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
        .then(response => response.json())
        .then(getChats)

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
   /* -------------------- To make the cHats, and the cHat functions available to other components i.e. expose child elements -------------------- */

return (
    <ChatContext.Provider value={{
        chats, getChats, addChat, deleteChat, getChatById, updateChat

    }}>
        {props.children}
    </ChatContext.Provider>
)
}