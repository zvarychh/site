import React from 'react';
import {Container} from "react-bootstrap";
import AboutLine from "../Components/AboutLine/AboutLine";
import {DescList} from "../Components/Lists/Lists";

const About = () => {




    return (
        <Container className={"text-muted pt-md-3"}>
            {DescList.map(li => {
                return (
                    <>
                        <AboutLine desc={li.desc}/>
                    </>
                )
            })}

        </Container>
    );
};

export default About;