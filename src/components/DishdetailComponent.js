import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

function RenderComments(comments) {
    if (comments != null)
        return ( <
            > { " " } {
                comments.map(comment => {
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
                })
            } { " " } <
            CommentForm / >
            <
            />
        );
    else return <div > < /div>;
}

const DishDetail = selected => {
    console.log("dishdetail render");
    const dish = selected.dish;

    if (dish != null) {
        const comment = RenderComments(selected.comments);
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem >
            <
            Link to = "/home" > Home < /Link>{" "} <
            /BreadcrumbItem>{" "} <
            BreadcrumbItem >
            <
            Link to = "/menu" > Menu < /Link>{" "} <
            /BreadcrumbItem>{" "} <
            BreadcrumbItem active > { selected.dish.name } < /BreadcrumbItem>{" "} <
            /Breadcrumb>{" "} <
            /div>{" "} <
            div className = "row " >
            <
            div className = "col-12" >
            <
            h3 > { selected.dish.name } < /h3> <hr / >
            <
            /div>{" "} <
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

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };
    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }
    render() {
        return ( <
            React.Fragment >
            <
            Button outline onClick = { this.toggleModal } >
            <
            span className = "fa fa-pencil fa-lg" > < /span> Submit Comment{" "} <
            /Button>{" "} <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Submit Comment < /ModalHeader>{" "} <
            ModalBody >
            <
            LocalForm onSubmit = { values => this.handleSubmit(values) } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "rating"
            md = { 12 } >
            Rating { " " } <
            /Label>{" "} <
            Col md = { 12 } >
            <
            Control.select model = ".rating"
            name = "Rating"
            className = "form-control"
            defaultValue = "1" >
            <
            option > 1 < /option> <option> 2 </option > { " " } <
            option > 3 < /option> <option> 4 </option > { " " } <
            option > 5 < /option>{" "} <
            /Control.select>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            Row className = "form-group" >
            <
            Label htmlFor = "author"
            md = { 12 } >
            Your Name { " " } <
            /Label>{" "} <
            Col md = { 12 } >
            <
            Control.text model = ".author"
            id = "author"
            name = "author"
            placeholder = "Your Name"
            className = "form-control"
            validators = {
                {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                }
            }
            />{" "} <
            Errors className = "text-danger"
            model = ".author"
            show = "touched"
            messages = {
                {
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                }
            }
            />{" "} <
            /Col>{" "} <
            /Row>{" "} <
            Row className = "form-group" >
            <
            Label htmlFor = "Comment"
            md = { 12 } >
            Comment { " " } <
            /Label>{" "} <
            Col md = { 12 } >
            <
            Control.textarea model = ".comment"
            id = "comment"
            name = "comment"
            rows = "6"
            className = "form-control" /
            >
            <
            /Col>{" "} <
            /Row>{" "} <
            Row className = "form-group" >
            <
            Col md = { 12 } >
            <
            Button type = "submit"
            color = "primary" >
            Submit { " " } <
            /Button>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            /LocalForm>{" "} <
            /ModalBody>{" "} <
            /Modal>{" "} <
            /React.Fragment>
        );
    }
}