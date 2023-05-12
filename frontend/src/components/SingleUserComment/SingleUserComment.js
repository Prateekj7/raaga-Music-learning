import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import logo from "../../images/person-fill.svg";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { BsFlagFill } from "react-icons/bs";
import "./SingleUserComment.css"

function SingleUserComment(props) {
    const { commentDetails } = props
    var replies = []
    console.log(commentDetails);
    commentDetails?.replies.map(ele => {
        replies.push(
            <div class="SingleUserComment" >
                <Row>
                <Col xs={1}>
                    <div class="wrapping-container-inner">
                        <img
                            className="nav-logo"
                            src={logo}
                            alt="raaga-logo"
                        />
                    </div>
                </Col>
                <Col xs={11}>
                    <SingleUserComment commentDetails={ele} />
                </Col>
            </Row>
            </div>
            )
    })

    return (
        <div>
            <Row>
                <Col xs={5}>
                    <div class="wrapping-container commentUserName">
                        {commentDetails.fullName}
                    </div>
                </Col>
                <Col xs={4}>
                    <div class="wrapping-container">
                        - 3days ago
                    </div>
                </Col>
            </Row>
            <Row>
                <div class="wrapping-container">
                    {commentDetails.text}
                </div>
            </Row>
            <Row>
                <div class="wrapping-container">
                    <Button variant="secondary"> Reply</Button>
                    <Button variant="light"> <AiFillLike /> {commentDetails.Likes}</Button>
                    <Button variant="light"> <AiFillDislike />{commentDetails.Dislikes}</Button>
                    <Button variant="light"> <BsFlagFill />Flag Inapropriate</Button>
                </div>
            </Row>
            {replies}
        </div>
    )
}

export default SingleUserComment