import React from "react"
import { Link } from "react-router-dom"
import { Card, CardImg, CardText, img, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import original from "../images/original.jpg"
export const CatCard = ({ cat }) =>  {
      
    <div>
     <Card>
     <CardBody>
     {/* <img src={cat.pic} alt="Card image cap" ></img> */}
     <CardTitle tag="h5"section className="cat"></CardTitle>
     <CardSubtitle tag="h6" className="mb-2 text-muted"h3 className="cat__name">{cat.name}</CardSubtitle>
        <Link to={`/cats/detail/${cat.id}`}>
            { cat.name }
          </Link>
        <address className="cat__zip">{cat.zip}</address>
    {/* </section> */}
       </CardBody>
       </Card>
    </div>
}


// const Example = (props) => {
//   return (
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
// //           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
// //           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
// //           <Button>Button</Button>
// //         </CardBody>
// //    
//   );
// };

// export default Example;