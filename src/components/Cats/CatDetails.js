import React, { useContext, useEffect, useState } from "react"
import { Button,} from 'reactstrap';
import { useParams, useHistory } from "react-router-dom"
import { CatContext } from "./CatsProvider"
import { ChatContext } from "../CatChat/ChatProvider";
import { ChatCard } from "../CatChat/ChatCard";
import { UserContext } from "../Users/UsersProvider";

export const CatDetail = () => {
  const { getCatById, deleteCat } = useContext(CatContext)
const {chats, getChats, getChatById } =useContext(ChatContext) 
const {getUsersById} = useContext(UserContext)

const [filteredChats, setFilteredChats] = useState([])

	const [cat, setCat] = useState({})

	const {catId} = useParams();
    
    useEffect(() => {
        getCatById(catId)
        .then((response) => {
          getChats()
          .then((chat) => {
            const filteredChatsByCat = chats.filter(chat => chat.catId === cat.id)
            setFilteredChats(filteredChatsByCat)
            setCat(response)


          })

        })
    }, [] )

  
    

    const history = useHistory();
    
    const handleRelease = () => {
        deleteCat(cat.id)
          .then(() => {
            history.push("/cats")
          })
      }
  return (
    <section className="cat">
      <h3 className="cat__name">{cat.name}</h3>
      <div className="cat__color">{cat?.color}</div>
      <div className="cat__zip">Location: {cat.zip}</div>
      {/* <div className="cat__adopter">Customer: {cat?.adopterId}</div> */}
      <div>
      <Button
      className="btn btn-primary"
        //   disabled={isLoading}
        onClick={handleRelease}>Delete Cat</Button>
          <Button
      className="btn btn-primary"
        //   disabled={isLoading}
        // onClick={handleRelease}>Cat Chat</Button>
         onClick={() => {
            history.push(`/chat/create/`)
          }}>Cat Chat</Button>
                  <div className="chats">
                  

                    {
            filteredChats.map(chat => {

            
                    return <ChatCard key={chat.id} chat={chat}  />
                })
            }
        {/* {
			chats.filter(chat => {
				return <ChatCard key={chat.id} chat={chat} />
			})
        } */}
        </div>
      </div>
    </section>
  )
}