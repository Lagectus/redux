
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Navbar,
  Spinner,
  InputGroup,
  Badge,
} from "react-bootstrap";

const MOCK_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    channelTitle: "RickAstleyVEVO",
    description: "The official video for ‘Never Gonna Give You Up’ by Rick Astley",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    publishedAt: "2009-10-25",
  },
  {
    id: "kXYiU_JCYtU",
    title: "Linkin Park - Numb",
    channelTitle: "LinkinParkVEVO",
    description: "Official music video",
    thumbnail: "https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    publishedAt: "2007-03-25",
  },
  // add a couple more mock items
];

function useLocalStorage(key, initial = []) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {}
  }, [key, state]);
  return [state, setState];
}

export default function YouTubeCloneApp() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState(MOCK_VIDEOS);
  const [selected, setSelected] = useState(MOCK_VIDEOS[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recent, setRecent] = useLocalStorage("yt_clone_recent", []);

  const API_KEY =  "AIzaSyAuPRFGEThXhkD8VNBqiVMAmYE6KebjdKA"; // define in env to enable real API

  useEffect(() => {
    // ensure selected exists in videos
    if (!selected && videos.length) setSelected(videos[0]);
  }, [videos, selected]);

  async function searchYouTube(q) {
    setError(null);
    setLoading(true);
    setQuery(q);
    if (!q || q.trim() === "") {
      setVideos(MOCK_VIDEOS);
      setSelected(MOCK_VIDEOS[0]);
      setLoading(false);
      return;
    }

    // Save recent searches (dedupe)
    setRecent((prev) => {
      const arr = [q, ...prev.filter((s) => s !== q)].slice(0, 8);
      return arr;
    });

    if (!API_KEY) {
      // Fallback mock search: filter mock videos by title
      const filtered = MOCK_VIDEOS.filter((v) =>
        v.title.toLowerCase().includes(q.toLowerCase())
      );
      setVideos(filtered.length ? filtered : MOCK_VIDEOS);
      setSelected((filtered.length && filtered[0]) || MOCK_VIDEOS[0]);
      setLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams({
        part: "snippet",
        maxResults: 8,
        q: q,
        key: API_KEY,
        type: "video",
      });
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
      );
      if (!res.ok) throw new Error(`YouTube API: ${res.status}`);
      const data = await res.json();
      const mapped = data.items.map((it) => ({
        id: it.id.videoId,
        title: it.snippet.title,
        channelTitle: it.snippet.channelTitle,
        description: it.snippet.description,
        thumbnail: it.snippet.thumbnails.high?.url || it.snippet.thumbnails.default.url,
        publishedAt: it.snippet.publishedAt,
      }));
      setVideos(mapped);
      setSelected(mapped[0] || null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e) {
    e && e.preventDefault();
    searchYouTube(query);
  }

  function playVideo(v) {
    setSelected(v);
    // scroll into view on small screens
    const el = document.getElementById("player-column");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#">YouTube Clone</Navbar.Brand>
          <Form className="d-flex w-50" onSubmit={onSubmit}>
            <InputGroup>
              <Form.Control
                placeholder="Search videos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="primary" onClick={onSubmit}>
                Search
              </Button>
            </InputGroup>
          </Form>
          <div>
            <small className="text-muted">{API_KEY ? "Live API" : "Mock mode"}</small>
          </div>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col lg={8} id="player-column">
            <Card className="mb-3">
              {selected ? (
                <div>
                  <div className="ratio ratio-16x9">
                    <iframe
                      title={selected.title}
                      src={`https://www.youtube.com/embed/${selected.id}`}
                      allowFullScreen
                    />
                  </div>
                  <Card.Body>
                    <h5>{selected.title}jjddjsndjsdn</h5>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <small className="text-muted">{selected.channelTitle}</small>
                      <Badge bg="secondary">{new Date(selected.publishedAt).toLocaleDateString()}</Badge>
                    </div>
                    <p className="text-muted" style={{ whiteSpace: "pre-wrap" }}>
                      {selected.description}
                    </p>
                  </Card.Body>
                </div>
              ) : (
                <div className="p-5 text-center">Select a video to play</div>
              )}
            </Card>

            {loading && (
              <div className="text-center my-3">
                <Spinner animation="border" role="status" />
              </div>
            )}

            {error && (
              <div className="alert alert-danger">Error: {error}</div>
            )}
          </Col>

          <Col lg={4}>
            <Card className="mb-3 p-2">
              <Card.Title className="px-2">Recent Searches</Card.Title>
              <Card.Body className="px-2">
                {recent.length === 0 ? (
                  <small className="text-muted">No recent searches</small>
                ) : (
                  <div className="d-flex flex-wrap gap-2">
                    {recent.map((r) => (
                      <Button
                        key={r}
                        size="sm"
                        variant="outline-primary"
                        onClick={() => searchYouTube(r)}
                      >
                        {r}
                      </Button>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>

            <div>
              {videos.map((v) => (
                <Card key={v.id} className="mb-2" style={{ cursor: "pointer" }} onClick={() => playVideo(v)}>
                  <Row className="g-0">
                    <Col xs={5} md={5} lg={5}>
                      <img src={v.thumbnail} alt={v.title} className="img-fluid" />
                    </Col>
                    <Col xs={7} md={7} lg={7}>
                      <Card.Body>
                        <Card.Title style={{ fontSize: "0.95rem" }}>{v.title}</Card.Title>
                        <Card.Text>
                          <small className="text-muted">{v.channelTitle}dddddd</small>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="text-center py-3 mt-4 text-muted">
        Built with React + React-Bootstrap — demo clone
      </footer>
    </div>
  );
}

// frontend development
// html css javascript

// spa (single page application) react vue angular svelte

// backend 
// nodejs python ruby go java c# php
// express 
// api (application programming interface)
// rest api
// social media app
// mini apps 

database
// sql
// nosql
// mongodb
// sql


// aws 