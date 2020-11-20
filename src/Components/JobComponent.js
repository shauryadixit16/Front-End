import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardSubtitle, CardText, CardTitle,CardBody,Button,Modal,ModalHeader,ModalBody,FormGroup, Label, Input } from 'reactstrap';

const  RenderJob= (props) => {
    console.log(props)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className="job-comp">
        <Card key={props.id} className="job" >
            <CardBody>
                <CardTitle style={{fontWeight:500}}>{props.title}</CardTitle>
                <CardSubtitle >{props.subtitle}</CardSubtitle>
                <CardText>{props.desc}</CardText>
                {props.timing && <CardText>Full Time Job.</CardText>}
                {!props.timing && <CardText>Part Time Job.</CardText>}
                <Button className="details" onClick={() => toggle()}>Details</Button>

            </CardBody>
        </Card>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Details</ModalHeader>
            <ModalBody>
                <span  style={{fontWeight:'bold'}}>{props.title}</span>
                <p><span  style={{fontWeight:'bold'}}>Employer : </span>{props.subtitle}</p>
                <p style={{fontWeight:'bold'}}>Description</p>
                <p>{props.desc}</p>
                {props.perm && <p>This is a permanent Job.</p>}
                <p style={{fontWeight:'bold'}}>Requirement</p>
                <p>{props.reqs}</p>
                <p style={{fontWeight:'bold'}}>What's in it for you</p>
                <p>{props.reason}</p>
                <p style={{fontWeight:'bold'}}>Salary:Rs {props.salary}</p>
                <p style={{fontWeight:'bold'}}>Workplace Address</p>
                <p>{props.address}</p>
            </ModalBody>
            <FormGroup>
            <Label for="exampleFile">Enter a Proposal</Label>
            <Input type="file" name="file" id="exampleFile"/>
            </FormGroup>
            <Button outline color="success"onClick={toggle}>Apply</Button>{' '}
      </Modal>
    </div>
    )
};

export default RenderJob;   
