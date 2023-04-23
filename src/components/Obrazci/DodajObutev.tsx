import React from "react"
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { IObutev } from '../../models/Obutev';
import { Link } from "react-router-dom";
interface dodajObutevProps {
    onDodajObutev: (novaObutev: IObutev) => void;
}
const initialState: IObutev = {
    id: 0,
    cena: 0,
    naziv: '',
    kategorija: '',
    velikost: 0,
    slika: '',
    podrobnosti: '',
}

const DodajObutev = (props: dodajObutevProps) => {
    const [novaObutev, setNovaObutev] = React.useState<IObutev>(initialState)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onDodajObutev(novaObutev)
        setNovaObutev(initialState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setNovaObutev((prevState: IObutev) => {
            const nextState = {
                ...prevState,
                id: prevState.id++,
                [e.target.name]: e.target.value
            }
            return nextState
        })
    }

    const handleKategorijaChange = (kategorija: string) => {
        setNovaObutev({
            ...novaObutev,
            kategorija: kategorija
        })
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Dodajanje obutve</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link to="/" className="nav-link">
                                Nazaj na seznam obutve
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-5 text-center">
                <Row>
                    <Col xs={12} md={8} lg={6} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup controlId="naziv">
                                <FormLabel>Naziv:</FormLabel>
                                <FormControl type="text" name="naziv" value={novaObutev.naziv} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="cena">
                                <FormLabel>Cena:</FormLabel>
                                <FormControl type="number" name="cena" value={novaObutev.cena} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="velikost">
                                <FormLabel>Velikost:</FormLabel>
                                <FormControl type="number" name="velikost" value={novaObutev.velikost} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="kategorija">
                                <FormLabel>Kategorija:</FormLabel>
                                <DropdownButton title={novaObutev.kategorija || 'Izberite kategorijo'}>
                                    <Dropdown.Item onClick={() => handleKategorijaChange('Vsak dan')}>Vsak dan</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleKategorijaChange('Šport')}>Šport</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleKategorijaChange('Tek')}>Tek</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleKategorijaChange('Pohodni')}>Pohodni</Dropdown.Item>
                                </DropdownButton>
                            </FormGroup>
                            <FormGroup controlId="podrobnosti">
                                <FormLabel>Podrobnosti:</FormLabel>
                                <FormControl type="text" name="podrobnosti" value={novaObutev.podrobnosti} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup controlId="slika">
                                <FormLabel>Slika:</FormLabel>
                                <FormControl type="text" name="slika" value={novaObutev.slika} onChange={handleChange} />
                            </FormGroup>
                            <br></br>
                            <Button variant="primary" type="submit">
                                Dodaj obutev
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );

}
export default DodajObutev