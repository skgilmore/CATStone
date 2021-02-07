import React, { useContext,useState, useParams,useEffect, useHistory } from "react"
import { CatCard } from "../Cats/CatCard"
import { CatContext } from "../Cats/CatsProvider"
import { ChatCard } from "./ChatCard"
import { ChatContext } from "./ChatProvider"


export const ChatList = () => {
  const { chats, getChats} = useContext(ChatContext)

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
      <div>
      </div>
    </div>
  )
}