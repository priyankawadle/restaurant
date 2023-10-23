// import React from "react";
// import { Card } from "react-bootstrap";

//  const DishDetails = (props) => {
//     console.log("props",props)
//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={props.dish.image} />
//         <Card.Body>
//           <Card.Title>{props.dish.name}</Card.Title>
//           <Card.Text>{props.dish.description}</Card.Text>
//           <p>
//             <b>Category: {props.dish.category}</b>
//           </p>
//           <p>
//             <b>Price: {props.dish.price}</b>
//           </p>
//           <p>
//             <b>Label: {props.dish.label}</b>
//           </p>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
// export default DishDetails
import React from "react";
import { Card } from "react-bootstrap";

const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ width: "48rem" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title>{props.dish.name}</Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p>
            <b>Price : {props.dish.price}</b>
          </p>
          <p>
            <b>Label : {props.dish.label}</b>
          </p>
          <p>
            <b>Category : {props.dish.category}</b>
          </p>
          <hr></hr>

        </Card.Body>
      </Card>
    </div>
  );
};

export default DishDetail;