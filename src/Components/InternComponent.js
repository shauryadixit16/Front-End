import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardSubtitle, CardText, CardTitle,CardBody,Button,Modal,ModalHeader,ModalBody,FormGroup, Label, Input  } from 'reactstrap';

const  RenderIntern= (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className="intern-comp">
            <Card key={props.id} className="intern" >
                <CardBody>
                    <CardTitle style={{fontWeight:500}}>{props.title}</CardTitle>
                    <CardSubtitle >{props.subtitle}</CardSubtitle>
                    <CardText>{props.desc}</CardText>
                    <Button className="details" onClick={() => toggle()} >Details</Button>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Details</ModalHeader>
                <ModalBody>
                    <span  style={{fontWeight:'bold'}}>{props.title}</span>
                    <p><span  style={{fontWeight:'bold'}}>Employer : </span>{props.subtitle}</p>
                    <p style={{fontWeight:'bold'}}>Description</p>
                    <p>{props.desc}</p>
                    <p style={{fontWeight:'bold'}}>Requirement</p>
                    <p>{props.reqs}</p>
                    <p style={{fontWeight:'bold'}}>What's in it for you</p>
                    <p>{props.reason}</p>
                    {props.stipend.available && 
                    <p style={{fontWeight:'bold'}}>Stipend:Rs {props.stipend.amount}</p>}
                    {!props.stipend.available && 
                    <p style={{fontWeight:'bold'}}>Stipend is not available.</p>}
                   
                    {!props.fromHome &&
                    <div>
                        <p style={{fontWeight:'bold'}}>Workplace Address</p>
                        <p>{props.address}</p>
                    </div>
                    }
                    {props.fromHome && <p>Work from Home.</p>}
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
export default RenderIntern;