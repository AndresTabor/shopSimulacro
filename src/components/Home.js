import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { endPoint } from '../helpers/Url';
import { CardDescription, CardImage } from '../styles/Styles';

const Home = () => {

    const [state, setState] = useState([]);

    const getData = (url) =>{   
        axios.get(url)
        .then(resp =>{
            setState(resp.data)
            //console.log(state);
        })
        .catch(e =>{
            console.log(e);
        })
    }

    useEffect(() => {
        getData(endPoint);
    }, [state]);
    
    const deleteProduct = (id) => {
        axios.delete(endPoint + id)
        getData(endPoint);
    }

    return <>
                <Container fluid className='pt-5 '>
                    <Row>
                        {
                            state.map(item => (
                                <Col xs xl="3" sm="12" lg="6" className='mb-3' key={item.id}>
                                    <Card style={{width: '80%', height: '600px'}} className='mx-auto'>
                                    <CardImage  variant="top" src={item.image} alt="image product"/>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <CardDescription>{item.description}</CardDescription>
                                        <Card.Text>US ${item.price}</Card.Text>
                                        <Button variant="primary" onClick={() => deleteProduct(item.id)}>Eliminar Producto</Button>                            
                                    </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </>;
};

export default Home;
