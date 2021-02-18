import React, { useContext, useEffect, useState } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Label, Input } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom"
import { CatContext } from "./CatsProvider"
import Black from '../images/Black.png'
import "./Cats.css"
import { ChatContext } from "../CatChat/ChatProvider";
import { ChatCard } from "../CatChat/ChatCard";

export const CatDetail = () => {
  const { getCatById, deleteCat, updateCat } = useContext(CatContext)
  const { chats, getChats} = useContext(ChatContext)
  const [filteredChats, setFilteredChats] = useState([])
  const [cat, setCat] = useState({})
  const { catId } = useParams();
  const [isLoading, setIsLoading] = useState(true);


  //-------------------- FIND THE CATS TO DISPLAY BASED ON CAT ID (I.E. RELATED CHATS) ------------

  useEffect(() => {
    getCatById(catId)
      .then((response) => {
        getChats()
        setCat(response)
      })
  }, [])

  useEffect(() => {
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
      if (catId) {
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
    <section className="wholecatdetails">
      <div className="catStuff">
        <Card>
          <CardTitle tag="h5" className="cat__name">{cat.name}</CardTitle>
          <CardBody>
            <CardImg top width="10%" src={cat.pic} className="catPic"></CardImg>
            <CardText className="cat__color">Color of Cat: {cat?.color}</CardText>
            <br></br>
            {!cat.userId ?
              <Label check>
                <Input type="radio" name="adopted" id="userId" onChange={handleControlledInputChange} value={cat.userId} />{' '}
            Being a stray is a CATastrophe!
            Will you adopt me?
            </Label> : ""}
            <Button size="sm"
              className="btn btn-primary"
              onClick={handleRelease}>Delete Cat</Button>
          </CardBody>
        </Card>
      </div>
      <div className="chatStuff">
        {filteredChats.length > 0 ? filteredChats.map(chat => { return <ChatCard key={chat.id} chat={chat} /> }) : "no chats"}
        {console.log(filteredChats, "chatcheck")}
      </div>
    </section>
  )





}



