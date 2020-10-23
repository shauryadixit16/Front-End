import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardSubtitle, CardText, CardTitle,CardBody,Button } from 'reactstrap';

const  RenderJob= (props) => {
    return(
        <Card key={props.id} className="job">
            <CardBody>
                <CardTitle style={{fontWeight:500}}>{props.title}</CardTitle>
                <CardSubtitle >{props.subtitle}</CardSubtitle>
                <CardText>{props.desc}</CardText>
                <Button className="details">Details</Button>
            </CardBody>
        </Card>
    )
};

export default RenderJob;