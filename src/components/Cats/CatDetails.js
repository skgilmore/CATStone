import React, { useContext, useEffect, useState } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Label,Input } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom"
import { CatContext } from "./CatsProvider"
import Black from '../images/Black.png'
import "./Cats.css"
import { ChatContext } from "../CatChat/ChatProvider";
import { ChatCard } from "../CatChat/ChatCard";
import { UserContext } from "../Users/UsersProvider";
import { CatCard } from "./CatCard"

export const CatDetail = () => {
  const { getCatById, deleteCat, updateCat } = useContext(CatContext)
  const { chats, getChats, getChatById } = useContext(ChatContext)
  const { getUsersById } = useContext(UserContext)
  const [filteredChats, setFilteredChats] = useState([])
  const [cat, setCat] = useState({})
  const { catId } = useParams();
  const [isLoading, setIsLoading] = useState(true);


  //-------------------- FIND THE CATS TO DISPLAY BASED ON CAT ID (I.E. RELATED CHATS) ------------

  useEffect(() => {
    getCatById(catId)
      .then((response) => {
        getChats(response.id)
          .then((chat) => {
            const filteredChatsByCat = chats.filter(chat => chat.catId === cat.id)
            setFilteredChats(filteredChatsByCat)
            setCat(response)
          })
      })
  }, [])

  useEffect(()  => {

    const filteredChatsByCat = chats.filter(chat => chat.catId === cat.id)
    setFilteredChats(filteredChatsByCat)

  }, [chats])

  if (cat.pic === "") {
    let defaultCatPic = Black
    cat.pic = defaultCatPic
  }
  //-----------------HANDLE DELETE --------------------

  const history = useHistory();
  const handleRelease = () => {
    deleteCat(cat.id)
      .then(() => {
        history.push("/cats")
      })
  }
  const currentUser = localStorage.getItem("capstone_customer")
  const handleControlledInputChange = (event) => {
    if (event.target.name.includes("adopted")) {
    
      setIsLoading(true);
      if (catId){
      //PUT - update
      updateCat({
        id: cat.id,
          name: cat.name,
          color: cat.color,
          zip: parseInt(cat.zip),
          userId: parseInt(currentUser),
          pic: cat.pic        
      })
      .then(() => history.push("/cats"))
    }
  }
    else {
      event.target.value = null
    }
    
  }

  //-------------------- DOM VIEW OF CAT DETAILS------------
  return (
    <section className="cat">
      <Card>
        <CardTitle tag="h5" className="cat__name">{cat.name}</CardTitle>
        {/* <CardImg top width="100%" src={images.blackCat.jpg}> </CardImg> */}
        <CardBody>
          <CardImg top width="10%" src={cat.pic} className="catPic"></CardImg>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Location: {cat.zip}</CardSubtitle><div className="cat__zip"></div>
          <CardText className="cat__color">Color of Cat: {cat?.color}</CardText>
          {!cat.userId ? <Label check>
         <Input type="radio" name="adopted" id="userId" onChange={handleControlledInputChange} value={cat.userId} />{' '}
            Being a stray is a CATastrophe!
            <br></br>
            Will you adopt me?
            </Label> : ""}
          {/* <div className="cat__adopter">Customer: {cat?.adopterId}</div> */}
            <Button size="sm"
              className="btn btn-primary"
              onClick={handleRelease}>Delete Cat</Button>
            {filteredChats.length > 0 ?   filteredChats.map(chat => { return <ChatCard key={chat.id} chat={chat} /> }) : "no chats"}
          
        </CardBody>
      </Card>
    </section>
  )





}



