import React from 'react'
import logo from "../../images/person-fill.svg";
import "./CommentSection.css";
import { Col, Row } from 'react-bootstrap';
import SingleUserComment from '../SingleUserComment/SingleUserComment';
var AllComments =
    [
        {
            userId: "02b",
            comId: "017",
            userProfile: "",
            fullName: "Gaurang Chauhan",
            text: "Anushka Sharma born 1 mMay 1998 is an Indian actress and producer who works in Hindi films.",
            Likes: "178",
            Dislikes: "23",
            replies: [
                {
                    userId: "022",
                    comId: "013",
                    fullName: "Rayan Johnson",
                    text: "Indian actress and producer who works in Hindi films",
                    Likes: "178",
                    Dislikes: "23",
                    replies: []
                },
                {
                    userId: "022",
                    comId: "013",
                    fullName: "Rayan Johnson",
                    text: "Indian actress and producer who works in Hindi films",
                    Likes: "178",
                    Dislikes: "23",
                    replies: []
                }
            ]
        },
        {
            userId: "024",
            comId: "015",
            fullName: "Sumit Sharma",
            text: "It is unfortunate while a majority of medical feternity spend time in treating the Covid patuents, a few  are busy in scaring people",
            Likes: "178",
            Dislikes: "23",
            replies: []
        },
        {
            userId: "124",
            comId: "215",
            fullName: "Ramesh sargam",
            text: "It is unfortunate while a majority of medical feternity spend time in treating the Covid patuents, a few  are busy in scaring people",
            Likes: "178",
            Dislikes: "23",
            replies: []
        },
        {
            userId: "324",
            comId: "415",
            fullName: "Gopalkrishnan Rajgopalan",
            text: "So this has to nothing to do with covid! But it is linked! This is not news, but scare. It was present for dacedes, but now getting linked! who benifits? Certainly not common man.",
            Likes: "178",
            Dislikes: "23",
            replies: []
        },
        {
            avatarrl: "https://ui-avatars.com/api/name=Lily&background=random",
            userId: "524",
            comId: "615",
            fullName: "Ramesh Kumar",
            text: "what about green and blue what are they waiting for?",
            Likes: "178",
            Dislikes: "23",
            replies: []
        },
        {
            userId: "724",
            comId: "077",
            fullName: "Leo Kanath",
            text: "Roasts fungus with salt and paper. Cheers",
            Likes: "178",
            Dislikes: "23",
            replies: []
        },
        {
            userId: "s24",
            comId: "014",
            fullName: "Nikhil M",
            text: "How many colors of fungus? which one is more dangereous? Every color is more scarier than the previous one.",
            Likes: "178",
            Dislikes: "23",
            replies: []
        }
    ]
function CommentSection(props) {
    var comments = []
    AllComments.map(ele => {
        comments.push(
            <div class="SingleUserComment" >
                <Row>
                    <Col xs={1}>
                        <div class="wrapping-container">
                            <div class="progress-indicator">
                                <img
                                    className="nav-logo"
                                    src={logo}
                                    alt="raaga-logo"
                                />
                            </div>
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
            {comments}
        </div>
    )
}

export default CommentSection