import React from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";
import PortalCard from "../PortalCard/PortalCard";
import {HeroesList, UpdateList, ItemList} from "../Lists/Lists";

const PortalTab = () => {



    return (
        <div className={"pb-5 mb-5"}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="">
                    <Col sm={3} >
                        <Nav variant="pills" className="flex-column mb-4">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Оновлення</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Герої</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Предмети</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row xs={1} md={2} xl={3} className={"g-2"}>
                                    {UpdateList.map(update => {
                                        return (
                                            <PortalCard tittle={update.tittle} img={update.imgurl}
                                                        cardDescription={update.cardDescription}
                                                        modalDescription={update.modalDescription}/>
                                        );
                                    })}
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row xs={1} md={2} xl={3} className={"g-2"}>
                                    {HeroesList.map(hero => {
                                        return (
                                            <PortalCard tittle={hero.tittle} img={hero.imgurl}
                                                        cardDescription={hero.cardDescription}
                                                        modalDescription={hero.modalDescription}/>
                                        );
                                    })}

                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row xs={1} md={2} xl={3} className={"g-3"}>
                                    {ItemList.map(item => {
                                        return (
                                            <PortalCard tittle={item.tittle} img={item.imgurl}
                                                        cardDescription={item.cardDescription}
                                                        modalDescription={item.modalDescription}/>
                                        );
                                    })}

                                </Row>

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default PortalTab;