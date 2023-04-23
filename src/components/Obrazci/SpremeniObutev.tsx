import React, { useState } from "react";
import { IObutev } from "../../models/Obutev";
import { useParams } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface spremeniObutevProps {
    seznamObutve: IObutev[]
    onUrediHandle: (obutev: IObutev) => void;
}


const SpremeniObutev = (props: spremeniObutevProps) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const parsanId = id !== undefined ? parseInt(id) : undefined;
    const izbranaObutev = props.seznamObutve.find(o => o.id === parsanId);
    const [spremenjenaObutev, setSpremenjenaObutev] = useState<IObutev>(izbranaObutev ?? {
        id: 0,
        naziv: '',
        cena: 0,
        velikost: 0,
        kategorija: '',
        podrobnosti: '',
        slika: ''
    });
    if (!izbranaObutev) {
        return <div>Obutev ni najdena</div>
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onUrediHandle(spremenjenaObutev)
        navigate("/")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSpremenjenaObutev((prevState: IObutev) => {
            const nextState = {
                ...prevState,
                id: prevState.id,
                [e.target.name]: e.target.value
            }
            return nextState
        })
    }

    const handleKategorijaChange = (kategorija: string) => {
        setSpremenjenaObutev({
            ...spremenjenaObutev,
            kategorija: kategorija
        })
    }

    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Sprememba</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Link to="/o-trgovini" className="nav-link">
                                    O trgovini
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to="/" className="nav-link">
                                    Nazaj na seznam
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Container className="mt-5 text-center">
                    <Row>
                        <Col xs={12} md={8} lg={6} className="mx-auto">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup controlId="naziv">
                                    <FormLabel>Naziv:</FormLabel>
                                    <FormControl type="text" name="naziv" value={spremenjenaObutev.naziv} onChange={handleChange} required />
                                </FormGroup>
                                <FormGroup controlId="cena">
                                    <FormLabel>Cena:</FormLabel>
                                    <FormControl type="number" name="cena" value={spremenjenaObutev.cena} onChange={handleChange} required />
                                </FormGroup>
                                <FormGroup controlId="velikost">
                                    <FormLabel>Velikost:</FormLabel>
                                    <FormControl type="number" name="velikost" value={spremenjenaObutev.velikost} onChange={handleChange} required />
                                </FormGroup>
                                <FormGroup controlId="kategorija">
                                    <FormLabel>Kategorija:</FormLabel>
                                    <DropdownButton title={spremenjenaObutev.kategorija || 'Izberite kategorijo'}>
                                        <Dropdown.Item onClick={() => handleKategorijaChange('Vsak dan')}>Vsak dan</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleKategorijaChange('Šport')}>Šport</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleKategorijaChange('Tek')}>Tek</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleKategorijaChange('Pohodni')}>Pohodni</Dropdown.Item>
                                    </DropdownButton>
                                </FormGroup>
                                <FormGroup controlId="podrobnosti">
                                    <FormLabel>Podrobnosti:</FormLabel>
                                    <FormControl type="text" name="podrobnosti" value={spremenjenaObutev.podrobnosti} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup controlId="slika">
                                    <FormLabel>Slika:</FormLabel>
                                    <FormControl type="text" name="slika" value={spremenjenaObutev.slika} onChange={handleChange} />
                                </FormGroup>
                                <br></br>
                                <Button variant="primary" type="submit">
                                    Potrdi spremembo
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SpremeniObutev;