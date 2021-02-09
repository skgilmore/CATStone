import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CatCard } from "./CatCard"
import { CatContext } from "./CatsProvider"
import { Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { UserContext } from "../Users/UsersProvider";
import { ChatContext } from "../CatChat/ChatProvider";
import "./Cats.css"




export const CatList = () => {
    /* -------------------- To have access to cats -------------------- */

    const {  getCats, getCatsById } = useContext(CatContext)
    const { users, getUsers, getUsersById } = useContext(UserContext)
    const history = useHistory()
    const { catZip } = useParams();

    /* -------------------- Use use State to update the state of cats as it is changed -------------------- */

    const [filteredCats, setFilteredCats] = useState([])

    /* -------------------- To have access to the filter, filter cats by their zip codes, reset state and rerender page-------------------- */


    /* -------------------- Compare logged in user Id to known user Id to map matching items------------------- */

    const currentUser = (localStorage.getItem("capstone_customer"))

const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    /* -------------------- Get all cats. Get user based on current user. Filter all cats whose zip macth users zip -------------------- */
    /* -------------------- Reset the state of the page to show only cats with matching zip codes of the user -------------------- */




    useEffect(() => {
        getCats()
        .then((cats) => {
            setCats(cats)
            getUsersById(currentUser)
            .then((user) => {
                console.log("cats",cats)
                const filteredCatByZip = cats.filter(cat => cat.zip === user.zip)
                setFilteredCats(filteredCatByZip)
            })
        })
    }, [])

    return (
        <>
            <h2>Cats</h2>
                {
                    filteredCats.map(cat => {

/* -------------------- Map over the returned cats and display their info as assigned in CatCard Comp------------------- */
                        return <CatCard key={cat.id} cat={cat} zip={cat.zip} />
                    })

                }
            <Button color="info" on onClick={() => { history.push("/cats/create") }}>
                Add A Cat
            </Button>{' '}
            

            
                {console.log(cats, "allCats")}
            

        </>
    )
}
