import React from "react";
import "./NovelCard.css";
import {Card, Container, Button} from'react-bootstrap';

const NovelCard = () => {
    return(
        <>
            <Container>
                <Card className="cards">
                    <Card.Img className="cards_Img" variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>소설 제목</Card.Title>
                        <Card.Text>
                        간단한 소설 소개
                        </Card.Text>
                        <Button variant="success">소설 챕터 목록</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default NovelCard;