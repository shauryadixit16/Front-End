import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardSubtitle, CardText, CardTitle,CardBody,Button, Modal, ModalHeader, ModalBody,FormGroup, Label, Input } from 'reactstrap';
const  RenderJob= (props) => {
    console.log(props.timing)
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return(
        <div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <p style={{fontWeight:'bold'}}>Description</p>
               <p>To handle GST working at the office.</p>
               <p style={{fontWeight:'bold'}}>Requirement</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam eius cum nostrum hic.</p>
               <p style={{fontWeight:'bold'}}>What's in it for you</p>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus saepe nulla!</p>
               <p style={{fontWeight:'bold'}}>Salary:10000-25000rs</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing..</p>
               <p style={{fontWeight:'bold'}}>Workplace Address</p>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt?.</p>
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