import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row} from 'react-bootstrap'
import SearchItem from "./component/SearchItem.jsx"
import Main from "./component/Main.jsx"
import List from "./component/List.jsx"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [videos,setVideos] = useState([]);
  const [query,setQuery]= useState("");
  const searchYoutube = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=reactjs&type=video&maxResults=10&key=AIzaSyAuPRFGEThXhkD8VNBqiVMAmYE6KebjdKA`)
      console.log(res.data);
      
      setVideos(res.data.video)
    }
    catch(err){
      console.log(err)

    }

  }
  useEffect(()=>{
    searchYoutube()
    
  },[])
  return (
    <Container>
      <Navbar bg="dark" variant='dark' className='px-3'>
        <Navbar.Brand href='/'>
        YOUTUBE
        </Navbar.Brand>
        <Form className="d-flex mx-auto" onSubmit={searchYoutube}>
          <FormControl
          type="search"
          placeholder='Search'
          className='me-2'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}/>
          <Button type="submit" variant='outline-height'>
            Search
          </Button>
        </Form>
      </Navbar>

      <Row>
        <Col sm={2} className='bg-light vh-100 p-3'>
          <ul>
            <li>HOME</li>
            <li>Trend</li>
            <li>Subscribe</li>
            <li>musci</li>

          </ul>
        </Col>

        <Col sm={10} className='p-3'>
        <Row>
          {videos.map((vid)=>(
            <Col key={vid.id.videoId} sm={6}>
              <Card>
                <Link to={`/watch/${vid.id.videoId}`}>
                <Card.Img variant='"top' src={vid.snippet.thumbnails.media.url}/>
                <Card.Body>
                  <Card.Title>{vid.snippet.title}</Card.Title>
                  <Card.Text>{vid.snippet.channelTitle}</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App