import React from "react"
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { IObutev } from '../../models/Obutev';
import { Link } from "react-router-dom";
import { IKupec } from "../../models/Kupec";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
interface prodajaObutevProps {
    onProdajObutev: (kupec: IKupec) => void;
}


const initialState: IKupec = {
    id: 0,
    ime: "",
    priimek: "",
    naslov: "",
    kontakt: 0,
    id_obutve: 0,
}
const ProdajObutev = (props: prodajaObutevProps) => {

    const [kupec, setKupec] = React.useState<IKupec>(initialState)
    const navigate = useNavigate()
    const { id } = useParams();
    let parsanId: number
    if (id !== undefined) {
        parsanId = parseInt(id)
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onProdajObutev(kupec)
        navigate("/seznam-prodanih")
        setKupec(initialState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKupec((prevState: IKupec) => {
            const nextState = {
                ...prevState,
                id: prevState.id++,
                id_obutve: parsanId,
                [e.target.name]: e.target.value
            }
            return nextState
        })
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Prodaja Obutve</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link to="/seznam-prodanih" className="nav-link">
                                Pregled prodanih čevljev
                            </Link>
                        </Nav>
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
                            <FormGroup controlId="ime">
                                <FormLabel>Ime:</FormLabel>
                                <FormControl type="text" name="ime" value={kupec.ime} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="priimek">
                                <FormLabel>Priimek:</FormLabel>
                                <FormControl type="text" name="priimek" value={kupec.priimek} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="naslov">
                                <FormLabel>Naslov:</FormLabel>
                                <FormControl type="text" name="naslov" value={kupec.naslov} onChange={handleChange} required />
                            </FormGroup>
                            <FormGroup controlId="kontakt">
                                <FormLabel>Kontakt:</FormLabel>
                                <FormControl type="number" name="kontakt" value={kupec.kontakt} onChange={handleChange} required />
                            </FormGroup>
                            <br />
                            <Button variant="primary" type="submit">
                                Prodaj
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ProdajObutev