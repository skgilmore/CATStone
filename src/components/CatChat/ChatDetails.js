import React, { useContext, useState, useEffect, useHistory } from "react"
// import { CatCard } from "../Cats/CatCard"
import { CatContext } from "../Cats/CatsProvider"
import { ChatCard } from "./ChatCard"
import { ChatContext } from "./ChatProvider"


export const ChatList = () => {
  const { getCats } = useContext(CatContext)
  const { chats, getChats } = useContext(ChatContext)
  const [filteredChats, setFilteredChats] = useState([])
  const [cat, setCat] = useState({})
  const { catId } = useParams();
  //-------------------- CHAT INFO TO BE DISPLAYED ON THE DOM ------------
  useEffect(() => {
    console.log("CHAT DETAILS RENDER")
    getCats()
      .then(getChats)
  }, [])

  useEffect(() => {
    console.log("CHAT DETAILS RENDER")
    getCatById()
      .then((response) => {
        getChats()
          .then((chat) => {
            const filteredChatsByCat = chat.filter(chat => chat.catId === cat.id)
            setFilteredChats(filteredChatsByCat)
            setCat(response)

          })

      })

  }, [])

  return (
    <div className="chats">
      {console.log("ChatList: Render", chats)}
      {
        chats.map(chat => {
          // debugger
          const Cat = chats.find(c => c.catId === cat.id)
          return <ChatCard key={chat.id} chat={chat} />
        })
      }
      <div>
      </div>
    </div>
  )
}