import React, {useState} from 'react';
import {Button, Card, Col, Modal} from "react-bootstrap";

const PortalCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Col >
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" height={225} src={props.img}/>
                <Card.Body >
                    <Card.Title>{props.tittle}</Card.Title>
                    <Card.Text>
                        {props.cardDescription}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Відкрити</Button>
                </Card.Body>
            </Card>

            <Modal size={"lg"} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>{props.tittle}</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img variant="top" className={"w-100"}  src={props.img} alt="path"/>
                    {props.modalDescription}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Вийти
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
};

export default PortalCard;