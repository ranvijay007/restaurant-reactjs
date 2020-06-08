import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish(dish) {
  if (dish != null)
    return (
      <div className="col-sm-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div></div>;
}

function RenderComments(comments) {
  if (comments != null) {
    return (
      <div className="col-sm-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <ul className="list-unstyled">
            <li className="mb-3">{comment.comment}</li>
            <li>
              -- {comment.author}{" "}
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(comment.date))}
            </li>
          </ul>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        {RenderDish(props.dish)}
        {RenderComments(props.dish ? props.dish.comments : null)}
      </div>
    </div>
  );
};

export default DishDetail;
