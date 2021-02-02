import React, { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom"
import { CatCard } from "../Cats/CatCard";
import { CatContext } from "../Cats/CatsProvider";
import { UserContext } from "../Users/UsersProvider";
import "./Login.css"



export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const history = useHistory()
    // const { cats, getCats, getCatsById} = useContext(CatContext)
    // const {users, getUsers , getUsersById, setUsers} = useContext(UserContext)
    // const [cat, setCat, user, setUser] = useState({})
    // const {catZip} = useParams();
    
    // useEffect(() => {
    //     console.log("useEffect", catZip)
    //     getCatsById(catZip)
    //     .then((response) => {
    //         setCat(response)
    //         .then(getUsers)
    //     })
    // }, [])

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("capstone_customer", exists.id)
                    
        // const currentUser = (localStorage.getItem("capstone_customer"))
        // const currentUserFilter = currentUser.find (  (u) => u.id ===parseInt(currentUser) )
        // const filterUsers = currentUserFilter.filter(
        //   userObject => {
        //     if (userObject.id  === currentUserFilter.id) {
              
           
        //       return userObject
              
        //     }
        // }
        // )
        // // console.log(userObject)
        // setUsers(filterUsers)
        //             {
        //                 cats.map(cat => {
        //                    const neighbor = users.find(u => u.zip === cat.zip)
        //                    return <CatCard key={cat.id} cat={cat} user={neighbor} zip={cat.zip} />
        //                })
                       
        //            }

                    history.push("/cats")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Mew Girl</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

