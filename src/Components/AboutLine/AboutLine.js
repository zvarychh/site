import React from 'react';
import {Row} from "react-bootstrap";

const AboutLine = (props) => {
    return (

        <Row>
            {props.desc}
        </Row>

    );
};

export default AboutLine;