import React, { useState, useEffect } from 'react';
import { Button, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import IssuesList from './IssuesList';
import Pagination from './Pagination';

const IssuesPage = () => {
  const [ issueListData, setIssueListData ] = useState([]);
  const [ status, setStatus ] = useState("All issues");
  const [ defaultState, setDefualt ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentPost, setCurrentPost ] = useState([]);
  const postsPerPage  = 10;

  useEffect(() => {
    axios.get("http://localhost:4000/api/list-issue",{
        headers: { 'Content-Type' : 'application/json'}
    })
  .then(res => {
    const data = res.data.result;
    console.log(data);
    setIssueListData([...data]);
    
  })
  .catch(err => {
    if(err && err.response && err.response.data) {
      const error = err.response.data.error;
     console.log("error",error);
    }
     
  })
 },[]);
  
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 let currentList = issueListData.slice(indexOfFirstPost, indexOfLastPost);

 const paginate = (pageNumber) => {
   setCurrentPage(pageNumber);
   setDefualt(true);
   setStatus("All issues");
 }

 const handleListAll = () => {
    setCurrentPost(currentList);
    setDefualt(false);
    setStatus("All issues");
};
const handleListOpen = () => {
  setStatus("Open");
  currentList = currentList.filter(post=> post.status === "open");
  setCurrentPost(currentList);
  setDefualt(false);

};
const handleListClose = () => {
  setStatus("Closed")
  currentList = currentList.filter(post=> post.status === "close");
  setCurrentPost(currentList);
  setDefualt(false);
 
};

    return(
        <>
        <Navbar bg="light" expand="lg" style={{height: '10%', margin: '20px', borderRadius: '7px'}}>
 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item onClick = {handleListAll}>All</NavDropdown.Item>
              <NavDropdown.Item onClick = {handleListOpen}>Is Open</NavDropdown.Item>
              <NavDropdown.Item onClick = {handleListClose}>Is Closed</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/add-issue"><Button variant="success">New Issue</Button></Link>
        </Navbar.Collapse>
      </Navbar>
      <div className = "container mt-7">
        <Navbar bg="light" expand="lg" style={{width: '100%', height: '10%', borderRadius: '7px', borderColor: 'black'}}>
          <Navbar.Brand href="#home">{status}</Navbar.Brand>
        </Navbar>
        <IssuesList data={defaultState? currentList : currentPost}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={issueListData.length} paginate={paginate}/>
      </div>
</>
    )
}

export default IssuesPage;