import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>

                    </Row>
                </Col>
                <Col md={4}>
                    <Image style={{border: '3px grey solid', borderRadius: '5px'}} width={350} height={350} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 250, height: 100, fontSize: 32, border: '0'}}
                    >
                        <h3>Цена лота от: </h3>
                        <h2>{device.price} руб.</h2>
                        {/*<Button variant={"outline-dark"}>Добавить в корзину</Button>*/}
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Описание</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10, border: '1px lightgray solid', borderRadius: '2px'}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
