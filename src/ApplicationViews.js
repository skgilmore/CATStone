import React from "react"
import { Route } from "react-router-dom"
import { CatList } from "./components/Cats/CatsList"
import { CatProvider } from "./components/Cats/CatsProvider"
import { Home } from "./Home"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <CatProvider>
                <Route exact path="/cats">
                    <CatList />
                </Route>
            </CatProvider>












        </>
    )
}