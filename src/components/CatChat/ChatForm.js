import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';
import { useHistory, useParams, } from 'react-router-dom';
import React, { useContext, useEffect, componentDidMount, useState } from "react"
import { CatContext } from '../Cats/CatsProvider';
import { UserContext } from '../Users/UsersProvider';
import { ChatContext } from './ChatProvider';
import { ChatCard } from './ChatCard';



export const ChatForm = () => {
    const { chats, getChats, getChatById, deleteChat, updateChat, addChat } = useContext(ChatContext)
    const { getCatById, getCats, cats } = useContext(CatContext)
    const { users, getUsersById } = useContext(UserContext)
    const [filteredChats, setFilteredChats] = useState([])
    const currentUser = (localStorage.getItem("capstone_customer"))

    /* -------------------- ASSIGN PROPS TO A CHAT AND HOLD STATE OF CHAT IN CURRENT VIEW -------------------- */

    const [chat, setChat] = useState({
        note: "",
        catId: 0,
        userId: 0
    })

    const [cat, setCat] =useState({})
    /* --------------WAIT FOR DATA BEFORE BTN IS ACTIVE -------------------- */

    const [isLoading, setIsLoading] = useState(true);

    /* -------------------- ACCESS THE ID OF A CHAT SO THAT YOU CAN FETCH THE ONE YOU WANT TO EDIT-------------------- */

    const { catId } = useParams();
    const { chatId } = useParams()
    const history = useHistory();
    const newGuy = catId

    /* -------------------GET CATS BY ID W/ PARAMS, THEN GET CHATS-------------------- */
    useEffect(() => {
        getCatById(catId)
        if (chatId) {
            getChats()
                .then(chat => {
                    setChat(chat)
                    setIsLoading(false)
                    setFilteredChats(chat)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    /* -------------------CHECK CURRENT USER AND SET NEW PROPS W/ DOT NOTATION -------------------- */

    const handleControlledInputChange = (event) => {
        const newChat = { ...chat }
        newChat[event.target.id] = event.target.value
        const currentUser = localStorage.getItem("capstone_customer")
        newChat.userId = currentUser
        console.log(newChat, "chat adds?")
        setChat(newChat)
    }
    const handleAddChat = (event) => {
        
        
        //POST - add
        addChat({
                id: chat.id,
                note: chat.note,
                catId: parseInt(catId),
                userId: parseInt(chat.userId)

            })
.then(setCat(catId))    
            // .then(getChats)
            // .then(window.location.reload())               .then(getChats)

        
    }

    /* -------------------- ALLOW USERS TO ADD A CHAT AND DESIGNATE PROPS USING FORM -------------------- */
    return (
        <Form>
            <h2>Cat Chat</h2>
            <div className="chat"></div>
            <FormGroup>
                <Label for="newChat"></Label>
                <Input type="type" name="chat" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control"
                    placeholder="Chat" value={chat.note} />
            </FormGroup>
            <div>
                <div className="refreshChat">
                    {
                        filteredChats.map(chat => {
                            // take the list of filteredCats you used in use state and give me their info
                            return <ChatCard key={chat.id} note={chat.note} />
                        })
                    }
                </div>
                <Button color="success" type="reset"
                    onClick={event => {
                        handleAddChat()
                    }}>
                    {chatId ? "Save Chat" : "Add Chat"}</Button>
            </div>
        </Form>
    );
}
