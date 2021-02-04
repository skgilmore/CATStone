import React from "react"
// import { Link } from "react-router-dom"


export const ChatCard = ({ chat }) => (
    <section className="chat">
        <h3 className="chat__note">{chat.note}</h3>
        {/* <Link to={`/cats/detail/${cat.id}`}>
            { cat.name }
          </Link> */}
        {/* <address className="cat__zip">{cat.zip}</address> */}
    </section>
)