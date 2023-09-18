import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movielist.css';
import { tvShowsAPI, hollywoodAPI } from 'E:/React_Js/movie-hub/src/api-utility.js';

function Movielist(props) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const cardStyle = {
        maxWidth: '200px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
        margin: '0',
        padding: '0',
        marginTop: '25px',
        marginLeft: '22px'
    };

    const rowStyle = {
        flexWrap: 'nowrap',
        overflowX: 'auto',
        justifyContent: 'center',
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'da9940520e054d33e7104f90fdf4829f';
                const response = await fetch(`${props.apiURL}?api_key=${apiKey}`);
                const data = await response.json();
                setMovies(data.results);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();
    }, [props.apiURL]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p id='p-tag'>{props.title}</p>
            <Row style={rowStyle}>
                {movies.map((movie, index) => (
                    <Col md={2} key={index}>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}


export default Movielist;
