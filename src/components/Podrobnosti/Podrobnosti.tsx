import { IObutev } from "../../models/Obutev"
import React from "react"
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IKupec } from "../../models/Kupec";
import { useParams } from 'react-router-dom';
interface podrobnostiProps {
    seznamObutve: IObutev[]
}

const Podrobnosti = (props: podrobnostiProps) => {
    const { id } = useParams();
    let parsanId: number
    if (id !== undefined) {
        parsanId = parseInt(id)
    }
    const obutev = props.seznamObutve.find(o => o.id === parsanId);
    if (!obutev) {
        return <div>Obutev ni najdena</div>
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Podrobnosti {obutev?.naziv}</Navbar.Brand>
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
            <div className="container mt-4">
                <p>
                    {obutev.podrobnosti ? obutev.podrobnosti : <b>Izbrana obutev nima podrobnosti!</b>}
                </p>
            </div>
        </div>
    )
}

export default Podrobnosti