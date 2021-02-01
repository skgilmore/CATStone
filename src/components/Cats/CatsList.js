import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CatCard } from "./CatCard"
import { CatContext } from "./CatsProvider"
import { Button } from 'reactstrap';




export const CatList = () => {



    const { cats, getCats } = useContext(CatContext)
    // const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("CatList: Initial render before data")
        getCats()
    }, [])



    const history = useHistory()

    return (
        <>
        <h2>Cats</h2>
        <Button color="info"on onClick={() => {history.push("/cats/create")}}>
            Add A Cat
            </Button>{' '}
                   
        <div className="cats">
            {console.log("CatList: Render", cats)}
            {
                cats.map(cat => {
                    return <CatCard key={cat.id} cat={cat} />
                })
            }
        </div>
    
    </>
    )
}
// {
//     animals.map(animal => {
//         return <AnimalCard key={animal.id} animal={animal} />
//     })
// }

