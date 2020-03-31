import React from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardHeader
} from "reactstrap";

function renderComments(comments) {
    if (comments != null)
        return comments.map(comment => {
            return ( <
                li >
                <
                p > { comment.comment } < /p>{" "} <
                p >
                --{ comment.author }, { " " } {
                    new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))
                } { " " } <
                /p>{" "} <
                /li>
            );
        });
    else return <div > < /div>;
}

const DishDetail = selected => {
    console.log("dishdetail render");
    const dish = selected.dish;

    if (dish != null) {
        const comment = renderComments(dish.comments);
        return ( <
            div className = "container" >
            <
            div className = "row " >
            <
            div className = "col-12 col-md-5 m-1" >
            <
            Card >
            <
            CardImg src = { dish.image }
            alt = { dish.name }
            />{" "} <
            CardBody >
            <
            CardTitle > { dish.name } < /CardTitle>{" "} <
            CardText > { dish.description } < /CardText>{" "} <
            /CardBody>{" "} <
            /Card>{" "} <
            /div>{" "} <
            div className = "col-12 col-md-5 m-1" >
            <
            h4 > Comments < /h4> <ul className="list-unstyled"> {comment}</ul > { " " } <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    } else return <div > < /div>;
};

export default DishDetail;