import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CatCard } from "./CatCard"
import { CatContext } from "./CatsProvider"




export const CatList = () => {



    const { cats, getCats } = useContext(CatContext)
    // const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("CatList: Initial render before data")
        getCats()
    }, [])





    return (
        <div className="cats">
            {console.log("CatList: Render", cats)}
            {
                cats.map(cat => {
                    return <CatCard key={cat.id} cat={cat} />
                })
            }
        </div>
    )
}