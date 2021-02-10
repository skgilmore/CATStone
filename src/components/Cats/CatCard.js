import React from "react"
import { Link } from "react-router-dom"
import Black from '../images/Black.png'
import "./Cats.css"
import { Card, CardImg, CardText, img, Row, Col, CardBody, CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

/* -------------------- The displayed content of a cat-------------------- */

export const CatCard = ({ cat }) => {
    if (cat.pic === "") {
        let defaultCatPic = Black
        cat.pic = defaultCatPic
    }

    if (cat.userId === null) {
        return (
            <div name="catDetail">
            <Col sm="4">
                <Card>
                    <CardBody>
                        <CardImg top width="100%" src={cat.pic} alt="Card image cap" />
                        <CardTitle tag="h5" className="catCard"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted" className="cat__name">{cat.name}</CardSubtitle>
                        <Link to={`/cats/detail/${cat.id}`}>
                            {cat.name}
                        </Link>
                        <address className="cat__zip">{cat.zip}</address>
                    </CardBody>
                </Card>
            </Col>
            </div>
        )
    }
    else {
        return (
            <section>
            {/* <Col lg="4"> */}
                {/* <Row lg="4"> */}
                <Card>
         <CardBody>
                        <CardImg top width="100%" src={cat.pic} alt="Card image cap" />
                        <CardTitle tag="h5" className="catCard"></CardTitle>
                        <Badge color="info">Adopted </Badge>
                        <br></br>     
                        <CardSubtitle tag="h5" className="mb-2 text-muted" className="cat__name"><em>{cat.name}</em></CardSubtitle>
                          <Link to={`/cats/detail/${cat.id}`}>
                            {cat.name}
                        </Link>
                        <address className="cat__zip">{cat.zip}</address>
                    </CardBody>
                </Card>
                {/* </Row> */}
            {/* </Col> */}
                <br></br>
                </section>
        )
    }
}
