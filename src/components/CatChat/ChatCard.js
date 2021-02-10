import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { CardTitle, Card, CardText, Button } from 'reactstrap';
import { ChatContext } from "./ChatProvider";
// import { CatContext } from "../Cats/CatsProvider";


/* -------------------- The displayed content of a cHat-------------------- */

export const ChatCard = ({ chat, cat }) => {
    const { chats, getChats, getChatById, deleteChat } = useContext(ChatContext)
    const history = useHistory()
    const { catId } = useParams();

    const handleRelease = (event) => {
        deleteChat(chat.id)
            .then(getChats)
        // .then(window.location.reload())

    }
    if (chat.userId === parseInt(localStorage.getItem("capstone_customer"))) {
        return (

            <div>
                <Card body inverse color="info">
                    <CardTitle tag="h5">Note:</CardTitle>
                    <CardText>{chat.note}</CardText>
                    <Button size="sm" color="secondary" onClick={handleRelease}>Delete Chat</Button>
                    {/* <Button onClick={() => { history.push(`/cats/detail/${catId}`)  }}>Edit</Button>  */}
                </Card>
            </div>
        )
    }
    else {
        return (
            <div>
                <Card body inverse color="info">
                    <CardTitle tag="h5">Note:</CardTitle>
                    <CardText>{chat.note}</CardText>
                </Card>
            </div>

        )
    }

}



