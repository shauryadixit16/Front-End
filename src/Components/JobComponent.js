import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardSubtitle, CardText, CardTitle,CardBody,Button, Modal} from 'reactstrap';
const  RenderJob= (props) => {
    console.log(props.timing)
    return(
        <Card key={props.id} className="job" >
            <CardBody>
                <CardTitle style={{fontWeight:500}}>{props.title}</CardTitle>
                <CardSubtitle >{props.subtitle}</CardSubtitle>
                <CardText>{props.desc}</CardText>
                {props.timing && <CardText>Full Time Job.</CardText>}
                {!props.timing && <CardText>Part Time Job.</CardText>}
                <Button className="details">Details</Button>
            </CardBody>
        </Card>
    )
};

export default RenderJob;   
