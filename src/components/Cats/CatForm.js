import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react"
import { CatContext } from './CatsProvider';
import { UserContext } from '../Users/UsersProvider';

export const CatForm = () => {
    const { addCat, getCatById, getCats,updateCat } = useContext(CatContext)
    const { users, getUsers } = useContext(UserContext)
    

    //for edit, hold on to state of cat in this view
    const [cat, setCat] = useState({
      id: 0,
      name: "",
      userId: 0,
      zip: 0,
      color: "",
      pic: ""

    })

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding an cat, you need access to the cat id for fetching the cat you want to edit
    const { catId } = useParams();
      const history = useHistory();
      
          // Get customers and locations. If catId is in the URL, getCatById
    useEffect(() => {
      getUsers().then(getCats)
        console.log(getCatById,"all cats?")
    
    }, [])

    //  Ok soo to get capstone customer getItem. ParseInt it later in cat props. add the value of the capstone customer to the 
    // new cat using dot notation
    const handleControlledInputChange = (event) => {
      const newCat = { ...cat }
      newCat[event.target.id] = event.target.value
      const currentUser = localStorage.getItem("capstone_customer")
      console.log (currentUser,"user")
        if  (event.target.name.includes("adopted")) { 
          newCat.userId = currentUser
          
          console.log(currentUser,"whats here?")
        }
        else { 
            event.target.value = 0
        }
      setCat(newCat)
      console.log(newCat)
    }




    const handleAddCat= (event) => {
        
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

        if (catId){
          //PUT - update
          updateCat({
              id: cat.id,
              name: cat.name,
              color: cat.color,
              zip: parseInt(cat.zip),
              userId: parseInt(cat.userId),
              pic: cat.pic
          })
          .then(() => history.push(`/cats/detail/${cat.id}`))
        }else {
          //POST - add
          addCat({
            id: cat.id,
            name: cat.name,
            color: cat.color,
            zip: parseInt(cat.zip),
            userId: parseInt(cat.userId),
            pic: cat.pic
          })
          .then(() => history.push("/cats"))

        }
      }
    }

    // // Get customers and locations. If catId is in the URL, getCatById
    // useEffect(() => {
        
    // //   getCustomers().then(getLocations).then(() => {
    //     if (catId) {
    //       getCatById(catId)
    //       .then(cat => {
    //           setCat(cat)
    //           setIsLoading(false)
    //       })
    //     } else {
    //       setIsLoading(false)
    //     }
      
    // }, [])
// export const CatForm = (cat) => {
  return (
    <Form>
      <FormGroup>
        <Label for="newCatName">Name</Label>
        <Input type="text" name="catName" id="name"onChange={handleControlledInputChange}  required autoFocus className="form-control"placeholder="Name of Furry Friend"value={cat.name} />
  
      </FormGroup>
      <FormGroup>
        <Label for="zip">Zip Code</Label>
        <Input type="text" name="zip" id="zip"onChange={handleControlledInputChange}  required autoFocus className="form-control" placeholder="Zip Code of Cat"   value = {cat.zip}/>
      
      </FormGroup>
      <FormGroup>
        <Label for="color">Description</Label>
        <Input type="select" name="color" id="color"onChange={handleControlledInputChange}  required autoFocus className="form-control" placeholder=" Color of Cat" value = {cat.color}  >
        <option value = "null" >Please Select a Color</option>
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
    
    
      {/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>  
          {/* <Label for="newCatName">Name</Label> */}
            <Input type="radio" name="adopted" id="userId"onChange={handleControlledInputChange} value={cat.userId}  />{' '} 
            Do you take this cat to be yours for better or worse as long as you both shall live...in this neighborhood?
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="not" id="userId"onChange={handleControlledInputChange} value={cat.userId} />{' '}
            This furry friend is in need of a home
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          {/* <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label> */}
        </FormGroup>         idk if this cat has a home or not?
      </FormGroup>
   <div>
      <Button
      className="btn btn-primary"
        //   disabled={isLoading}
          onClick={event => {
            // event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleAddCat()
          }}>{catId ? "Save Cat" : "Add Cat"}</Button>
      </div>
    </Form>
  );
}

// export default Example;