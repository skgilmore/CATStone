import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react"
import { CatContext } from '../Cats/CatsProvider';
import { UserContext } from '../Users/UsersProvider';
import { ChatContext } from './ChatProvider';
import { ChatCard } from './ChatCard';



export const ChatForm = () => {
    const { chats, getChats, getChatById, updateChat, addChat } = useContext(ChatContext)
    const {  getCatById, getCats, cats} = useContext(CatContext)
    const { users, getUsersById } = useContext(UserContext)


    const [filteredChats, setFilteredChats] = useState([])
    const currentUser = (localStorage.getItem("capstone_customer"))
// *I want to get all of the notes with a matching cat id
// *display all of the notes for the specific cat
// be able to add/ edit/ delete a specif note

    //for edit, hold on to state of cat in this view
    const [chat, setChat] = useState({
        note: "",
        catId: 0,
        userId: 0
    })

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding an cat, you need access to the cat id for fetching the cat you want to edit
    const { catId } = useParams();
    const { chatId } =useParams
    const history = useHistory();

    // Get customers and locations. If catId is in the URL, getCatById
    useEffect(() => {
        // getCats()
        // console.log(getCats, "wheres my shit")
        // .then(getChats)
        
        getCatById()
        // .then((response) => {
            //    if (chatId) {

                getChats()
            //     .then(chat => {
            //         setChat(chat)
            //         setIsLoading(false)
            //     })
            //   } else {
            //     setIsLoading(false)
            //   }
            //     getUsersById(currentUser)

            
    }, [])
     const submitAndClear = () => {}
 

    //  Ok soo to get capstone customer getItem. ParseInt it later in cat props. add the value of the capstone customer to the 
    // new cat using dot notation
    const handleControlledInputChange = (event) => {
        const newChat = { ...chat }
        newChat[event.target.id] = event.target.value
        const currentUser = localStorage.getItem("capstone_customer")
        newChat.userId = currentUser
    console.log(newChat, "chat adds?") 
    
        setChat(newChat)
        .then((function handleSubmit(e) {
            // e.preventDefault();
            // console.log(email, password);
            // clearing the values
            setChat("");}))
        console.log(newChat)
    }



    const handleAddChat = (event) => {
        
        if (chatId) {
            //PUT - update
            // updateChat({
            //     id: chat.id,
            //     note: chat.note,
            //     catId: parseInt(cats.id),
            //     userId: parseInt(chat.userId)
            // })
            //     .then(() => history.push("/cats/detail/:catId(\d+)"))
        } else {
            //POST - add
            addChat({
                id: chat.id,
                note: chat.note,
                catId: parseInt(catId),
                userId: parseInt(chat.userId)

            })
                .then(() => history.push(`/cats/detail/${catId}`))

        }
    }
    
      
   
    return (
        <Form className>
            <h2>Cat Chat</h2>
            <div className="chat"></div>
            <FormGroup>
                <Label for="newChat"></Label>
                <Input type="type"  name="chat" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                placeholder="Chat" value={chat.note} 
            onChange={(e) => setChat(e.target.placeholder)} />
                </FormGroup>
              
                <div> 
        <div className="refreshChat">
                    {
                        filteredChats.map(chat => {
                            // take the list of filteredCats you used in use state and give me their info
                            return <ChatCard key={chat.id}   note={chat.note}/>
                        })
    

                    } 
                    </div>
                <Button color="info" type="reset"
                 onClick={event  => { 
                     handleAddChat()
                     
                    }}>
                        
                        {chatId ? "Save Chat" : "Send Chat"}</Button>
                </div> 

    </Form>
  );
}
