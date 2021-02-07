import React from "react"
import { Link } from "react-router-dom"
import { Card, CardImg, CardText, img, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

/* -------------------- The displayed content of a cat-------------------- */

export const CatCard = ({ cat }) => (

    <div>
        <Card>
            <CardBody>
                {/* <img src={cat.pic} alt="Card image cap" ></img> */}
                <CardTitle tag="h5" section className="cat"></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted" h3 className="cat__name">{cat.name}</CardSubtitle>
                <Link to={`/cats/detail/${cat.id}`}>
                    {cat.name}
                </Link>
                <address className="cat__zip">{cat.zip}</address>
            </CardBody>
        </Card>
    </div>
)


