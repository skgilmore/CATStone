import React from "react"
import { Route } from "react-router-dom"
import { CatList } from "./Cats/CatsList"
import { CatProvider } from "./Cats/CatsProvider"
import { Home } from "./Home"



export const ApplicationViews = () => {
    return (
        <>
           
            <CatProvider>
                <Route exact path="/">
                    <Home />
                    <CatList />
                </Route>
            </CatProvider>












        </>
    )
}