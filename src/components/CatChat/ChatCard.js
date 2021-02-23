import React, { useContext } from "react"
import { CardTitle, Card, CardText, Button } from 'reactstrap';
import { ChatContext } from "./ChatProvider";

/* -------------------- The displayed content of a cHat-------------------- */

export const ChatCard = ({ chat, cat }) => {
    const { getChats, deleteChat } = useContext(ChatContext)
    const handleRelease = (event) => {
        deleteChat(chat.id)
            .then(getChats)
    }

    if (chat.userId === parseInt(localStorage.getItem("capstone_customer"))) {
        return (
            <>
                <div name="catDetails">
                    <Card body inverse color="info">
                        <CardTitle tag="h4">Note:</CardTitle>
                        <CardText>{chat.note}</CardText>
                        <Button size="sm" className="btn btn-secondary float-right" id="trash" onClick={handleRelease}>🗑️</Button>
                    </Card>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div name="catDetails">
                    <Card body inverse color="info">
                        <CardTitle tag="h4">Note:</CardTitle>
                        <CardText>{chat.note}</CardText>
                    </Card>
                </div>
            </>
        )
    }

}



