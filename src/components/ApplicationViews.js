import React from "react"
import { Route } from "react-router-dom"
import { CatDetail } from "../components/Cats/CatDetails"
import { CatForm } from "../components/Cats/CatForm"
import { CatList } from "../components/Cats/CatsList"
import { CatProvider } from "../components/Cats/CatsProvider"
import { ChatProvider } from "./CatChat/ChatProvider"
import { Home } from "./Home"
import { UserProvider } from "./Users/UsersProvider"
import { ChatForm } from "./CatChat/ChatForm"
import { ChatList } from "./CatChat/ChatDetails"


export const ApplicationViews = () => {
    return (
        <>


            <CatProvider>
                <UserProvider>
                    <ChatProvider>
                        <Route exact path="/cats">
                            <CatList />
                        </Route>
                        <Route exact path="/cats/detail/:catId(\d+)">
                            <CatDetail />
                        </Route>
                        <Route path="/chat/create">
                            <ChatForm />
                        
                        </Route>
                        <Route exact path="/chats/detail/:chatId(\d+)">
                            <ChatList />
                        </Route>
                     
                        <Route exact path="/cats/create">
                            <CatForm />
                        </Route>
                     
                    </ChatProvider>
                </UserProvider>
            </CatProvider>















        </>
    )
}