import React from "react"
import { Route } from "react-router-dom"
import { CatForm } from "./components/Cats/CatForm"
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
                <Route exact path="/cats/create">
                                <CatForm />
                            </Route>
            </CatProvider>


           












        </>
    )
}