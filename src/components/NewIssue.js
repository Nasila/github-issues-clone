import React, { useState} from 'react';
import { Tabs, Tab, InputGroup, FormControl, Button } from "react-bootstrap";
import './IssuesPage.css';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
const NewIssue = (props) => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ username, setName ] = useState('');
    let [ id,setId ] = useState(28);

    const handleClick = () => {
        setId(id++);
        axios.post("http://localhost:4000/api/add-issue", {
            username, id, title, body, status: "open"

        }).then((res) => {
            console.log(res.data.message);
            props.history.push("/list-issues");
        }).catch(err => {
            console.log("Error", err);
        })
    };

    return (
        <div className="input-container">
            <InputGroup className="mb-1">
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e=> setName(e.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-1">
                <FormControl
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={e=> setTitle(e.target.value)}/>
            </InputGroup>

            <Tabs defaultActiveKey="new" id="noanim-tab-example">
                <Tab eventKey="write" title="Write">
                   <TextareaAutosize onChange={e=> setBody(e.target.value)} style={{height:'100%', width:'100%'}}/>    
                </Tab>
                <Tab eventKey="preview" title="Preview">
                <div className="preview-container">
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
                
                </Tab>
      </Tabs>
      <Button variant="success" onClick={handleClick} className="submit-button">Submit Issue</Button>
        </div>
    )
}

export default NewIssue;