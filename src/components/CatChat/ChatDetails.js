import React, { useContext, useEffect } from "react"
import { ChatCard } from "./ChatCard"
import { ChatContext } from "./ChatProvider"


export const ChatList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { chats, getChats} = useContext(ChatContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getChats()

  }, [])


  return (
    <div className="chats">
      {console.log("ChatList: Render", chats)}
      {
        chats.map(chat => {
          return <ChatCard key={chat.id} chat={chat} />
        })
      }
    </div>
  )
}