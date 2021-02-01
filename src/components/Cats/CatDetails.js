import React, { useContext, useEffect, useState } from "react"
import { Button,} from 'reactstrap';
import { useParams, useHistory } from "react-router-dom"
import { CatContext } from "./CatsProvider"

export const CatDetail = () => {
  const { getCatById, deleteCat } = useContext(CatContext)

	const [cat, setCat] = useState({})

	const {catId} = useParams();
    
    useEffect(() => {
        console.log("useEffect", catId)
        getCatById(catId)
        .then((response) => {
            setCat(response)
        })
    }, [])
    

    const history = useHistory();
    
    const handleRelease = () => {
        deleteCat(cat.id)
          .then(() => {
            history.push("/cats")
          })
      }
  return (
    <section className="cat">
      <h3 className="cat__name">{cat.name}</h3>
      <div className="cat__color">{cat?.color}</div>
      <div className="cat__zip">Location: {cat.zip}</div>
      {/* <div className="cat__adopter">Customer: {cat?.adopterId}</div> */}
      <div>
      <Button
      className="btn btn-primary"
        //   disabled={isLoading}
        onClick={handleRelease}>Delete Cat</Button>
        {/* <Button
         onClick={() => {
            history.push(`/cats/edit/${cat.id}`)
          }}>Edit</Button> */}
      </div>
    </section>
  )
}