import React from "react"
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { IObutev } from '../../models/Obutev';
import { Link } from "react-router-dom";
interface seznamProdaneObutveProps {
    seznamProdaneObutve: IObutev[]
}

const SeznamProdaneObutve = (props: seznamProdaneObutveProps) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Prodana Obutev</Navbar.Brand>
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
            {props.seznamProdaneObutve.length > 0 ? (
                <div className="container mt-4">
                    <div className="row">
                        {props.seznamProdaneObutve.map((o) => (
                            <div className="col-md-4 mb-4" key={o.id}>
                                <div className="card h-100">
                                    {o.slika ? (
                                        <img
                                            src={o.slika}
                                            className="card-img-top"
                                            alt={o.naziv}
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                    ) : (
                                        <div className="text-center" style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <b>Ni slike!</b>
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{o.naziv}</h5>
                                        <p className="card-text">
                                            Cena: {o.cena} € <br />
                                            Kategorija: {o.kategorija} <br />
                                            Velikost: {o.velikost}
                                        </p>
                                        <Link to={`/reklamiraj/${o.id}`} className="btn btn-success position-absolute top-0 end-0 mt-2 me-2">
                                            Reklamiraj
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="container mt-4">
                    <h3 className="text-center">Ni zadetkov!</h3>
                </div>
            )}
        </div>
    )
}

export default SeznamProdaneObutve