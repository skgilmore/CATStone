import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CatContext = createContext()

// This component establishes what data can be used.
export const CatProvider = (props) => {
    const [cats, setCats] = useState([])

    const getCats = () => {
        return fetch("http://localhost:8088/cats")
        .then(res => res.json())
        .then(setCats)
    }

    const addCat = animalObj => {
        return fetch("http://localhost:8088/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getCats)
    }

    /*
        You return a context provider which has the
        `cats` state, `getAnimals` function,
        and the `addCats
` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CatContext.Provider value={{
            cats, getCats, addCat
    
        }}>
            {props.children}
        </CatContext.Provider>
    )
}