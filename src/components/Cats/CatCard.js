import React from "react"
import { Link } from "react-router-dom"
import Black from '../images/Black.png'
import "./Cats.css"
import { Card, CardImg, CardBody, CardTitle, CardGroup } from 'reactstrap';

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
                    <CardBody >
                        <Card >
                            <Link to={`/cats/detail/${cat.id}`}>
                                <CardTitle tag="h5" className="mb-2 text-muted" >{cat.name}
                                    <CardImg top width="100%" src={cat.pic} alt="Card image cap"></CardImg></CardTitle>
                            </Link>
                            <br></br>
                            <br></br>
                            <wbr></wbr>
                        </Card>
                    </CardBody>
                </CardGroup>
            </div>
        )
    }
    else {
        return (
            <>
                <div name="catDetail">
                    <CardGroup>
                        <CardBody >
                            <Card >
                                <Link to={`/cats/detail/${cat.id}`}>
                                    <CardTitle tag="h5" className="mb-2 text-muted">{cat.name}
                                        <CardImg top width="100%" src={cat.pic} alt="Card image cap"></CardImg> <h5> <span class="badge badge-info">Adopted
                       </span></h5></CardTitle>
                                </Link>
                                <br></br>
                                <br></br>
                                <wbr></wbr>
                            </Card>
                        </CardBody>
                    </CardGroup>
                </div>
            </>)
    }
}
