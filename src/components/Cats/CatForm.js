import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react"
import { CatContext } from './CatsProvider';
import { UserContext } from '../Users/UsersProvider';

export const CatForm = () => {
  const { addCat, getCatById, getCats, updateCat } = useContext(CatContext)
  const { users, getUsers } = useContext(UserContext)

  /* -------------------- ASSIGN PROPS TO A CAT AND HOLD STATE OF CAT IN CURRENT VIEW -------------------- */

  const [cat, setCat] = useState({
    id: 0,
    name: "",
    userId: 0,
    zip: 0,
    color: "",

  })
  /* --------------WAIT FOR DATA BEFORE BTN IS ACTIVE -------------------- */

  const [isLoading, setIsLoading] = useState(true);

  /* -------------------- ACCESS THE ID OF A CAT SO THAT YOU CAN FETCH THE ONE YOU WANT TO EDIT-------------------- */

  const { catId } = useParams();
  const history = useHistory();

  /* -------------------GET USERS. IF CATID IN URL, GET CAT BY CATID -------------------- */

  useEffect(() => {
    getUsers().then(getCats)
    console.log(getCatById, "all cats?")

  }, [])
  /* -------------------- GET LOCAL STORAGE ID, PARSE INT IN PROPS AND ADD VALUE OF NEW PROPS WITH DOT NOTATION-------------------- */


  const handleControlledInputChange = (event) => {
    const newCat = { ...cat }
    newCat[event.target.id] = event.target.value
    const currentUser = localStorage.getItem("capstone_customer")
    console.log(currentUser, "user")
    if (event.target.name.includes("adopted")) {
      newCat.userId = currentUser

      console.log(currentUser, "whats here?")
    }
    else {
      event.target.value = 0
    }
    setCat(newCat)
    console.log(newCat)
  }




  const handleAddCat = (event) => {

    if (parseInt(cat.zip) === 0) {
      window.alert("Please input a zip code")
    }
    else {
      setIsLoading(true);
      {
        if
          (parseInt(cat.color) === 0)
          window.alert("Please select a description")
      }

      if (catId) {
        //PUT - update
        updateCat({
          id: cat.id,
          name: cat.name,
          color: cat.color,
          zip: parseInt(cat.zip),
          userId: parseInt(cat.userId),
        })
          .then(() => history.push(`/cats/detail/${cat.id}`))
      } else {
        //POST - add
        addCat({
          id: cat.id,
          name: cat.name,
          color: cat.color,
          zip: parseInt(cat.zip),
          userId: parseInt(cat.userId),
        })
          .then(() => history.push("/cats"))

      }
    }
  }

  /* -------------------- ALLOW USERS TO ADD A CAT AND DESIGNATE PROPS USING FORM -------------------- */

  return (
    <Form>
      <FormGroup>
        <Label for="newCatName">Name</Label>
        <Input type="text" name="catName" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of Furry Friend" value={cat.name} />

      </FormGroup>
      <FormGroup>
        <Label for="zip">Zip Code</Label>
        <Input type="text" name="zip" id="zip" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Zip Code of Cat" value={cat.zip} />

      </FormGroup>
      <FormGroup>
        <Label for="color">Description</Label>
        <Input type="select" name="color" id="color" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder=" Color of Cat" value={cat.color}  >
          <option value="null" >Please Select a Color</option>
          <option >Orange</option>
          <option>Yellow</option>
          <option>Gray</option>
          <option>Black</option>
          <option>White</option>
          <option>Brown</option>
          <option>Calico</option>
          <option>Striped</option>


        </Input>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            {/* <Label for="newCatName">Name</Label> */}
            <Input type="radio" name="adopted" id="userId" onChange={handleControlledInputChange} value={cat.userId} />{' '}
            Do you take this cat to be yours for better or worse as long as you both shall live...in this neighborhood?
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="not" id="userId" onChange={handleControlledInputChange} value={cat.userId} />{' '}
            This furry friend is in need of a home
          </Label>
        </FormGroup>
        <FormGroup check disabled>

        </FormGroup>         I sure hope this cat finds a home...
      </FormGroup>
      <div>
        <Button
          className="btn btn-primary"
          onClick={event => {
            handleAddCat()
          }}>{catId ? "Save Cat" : "Add Cat"}</Button>
      </div>
    </Form>
  );
}

