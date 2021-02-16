// import React from "react"
import { Link } from "react-router-dom"
import Black from '../images/Black.png'
import "./Cats.css"
import { Card, CardImg, CardText, img, Row, Col, CardBody, CardTitle, CardSubtitle, Button, Badge, CardDeck, CardGroup } from 'reactstrap';

/* -------------------- The displayed content of a cat-------------------- */

export const CatCard = ({ cat }) => {
    if (cat.pic === "") {
        let defaultCatPic = Black
        cat.pic = defaultCatPic
    }

    if (cat.userId === null) {
        return (
            <div name="catDetail">
            <CardGroup>
            {/* <Col sm="4">      */}
                
         <CardBody >
                <Card >
                          <Link to={`/cats/detail/${cat.id}`}> 
                        <CardTitle tag="h5" className="mb-2 text-muted" className="cat__name">{cat.name}
                        <CardImg top width="100%" src={cat.pic} alt="Card image cap"></CardImg></CardTitle>
                        </Link>
                        {/* </CardTitle> */}
                        {/* <h5> <span class="badge badge-info">Adopted</span></h5> */}
                        {/* <Badge color="info">Adopted </Badge> */}
                        <br></br>     
                        <br></br>
                        <wbr></wbr>
                        {/* <address className="cat__zip">{cat.zip}</address> */}
                </Card>
                    </CardBody>
                {/* </Col> */}
            </CardGroup>        
            </div>
        )
    }
    else {
        return (
            <>
<div name="catDetail">
            <CardGroup>
            {/* <Col sm="4">      */}
                
         <CardBody >
                <Card >
                          <Link to={`/cats/detail/${cat.id}`}> 
                        <CardTitle tag="h5" className="mb-2 text-muted" className="cat__name">{cat.name}
                        <CardImg top width="100%" src={cat.pic} alt="Card image cap"></CardImg> <h5> <span class="badge badge-info">Adopted 
                       </span></h5></CardTitle>
                        </Link>
                        {/* </CardTitle> */}
                        {/* <h5> <span class="badge badge-info">Adopted</span></h5> */}
                        {/* <Badge color="info">Adopted </Badge> */}
                        <br></br>     
                        <br></br>
                        <wbr></wbr>
                        {/* <address className="cat__zip">{cat.zip}</address> */}
                </Card>
                    </CardBody>
                {/* </Col> */}
            </CardGroup>        
            </div>
     </>   )
    }
}
