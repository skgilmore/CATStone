import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CatCard } from "./CatCard"
import { CatContext } from "./CatsProvider"
import { Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { UserContext } from "../Users/UsersProvider";




export const CatList = () => {
    const { cats, getCats, getCatsById } = useContext(CatContext)
    const { users, getUsers, getUsersById } = useContext(UserContext)
    const history = useHistory()
    const { catZip } = useParams();


    const [filteredCats, setFilteredCats] = useState([])
/*
above. use state is letting you know that the state of cats has been changed. now we want to filter the cats by their
zip codes. when we do this we want to update what is showing on the page I.e. set a new state - cats
are being filtered, trigger the use effect and "refresh" the page
*/
    const currentUser = (localStorage.getItem("capstone_customer"))
/*
local storage-capstone customer is giving us a number. We are using that number and setting it as the variable
currentUser.
n
*/
    const [isLoading, setIsLoading] = useState(true);

    /*
    use effect- its going to get all of the cats
    its giving you back all off the cats
    it goes and gets one specific user based on hte parameter currentUser (that is a # that youre passing to it)
    then it is using all of the cats that you have gotten, giltering over all of them and finding all
    of them whose zip code matches the curerent users zip code. you then reset the state of the page.
    show me the set of filtered cats by the filtered by zip cats.
    */

    useEffect(() => {
        getCats()
            .then((response) => {
                getUsersById(currentUser)
                    .then((user) => {
                        const filteredCatByZip = cats.filter(cat => cat.zip === user.zip)
                        
                        setFilteredCats(filteredCatByZip)
                    })

            })
    }, [])

    return (
        <>
            <h2>Cats</h2>
            <Button color="info" on onClick={() => { history.push("/cats/create") }}>
                Add A Cat
            </Button>{' '}
            <div>

            </div>
            <div className="cats">
                {console.log(cats, "allCats")}
                {
                    filteredCats.map(cat => {
// take the list of filteredCats you used in use state and give me their info
                        return <CatCard key={cat.id} cat={cat} zip={cat.zip} />
                    })

                }
            </div>

        </>
    )
}