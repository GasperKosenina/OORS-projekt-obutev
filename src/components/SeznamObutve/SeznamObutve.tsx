import React from 'react';
import { Link } from 'react-router-dom';
import { IObutev } from '../../models/Obutev';
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';

interface seznamObutveProps {
    seznamObutve: IObutev[]
    onOdstraniHandle: (id: number) => void
}

const SeznamObutve = (props: seznamObutveProps) => {
    const [selectedKategorija, setSelectedKategorija] = React.useState<String>("")
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Seznam vseh</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link to="/o-trgovini" className="nav-link">
                                O trgovini
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="/seznam-prodanih" className="nav-link">
                                Pregled prodanih čevljev
                            </Link>
                        </Nav>
                        &nbsp;
                        <Nav><DropdownButton
                            id="dropdown-basic-button"
                            title={`Filtriraj ${selectedKategorija ? `(${selectedKategorija})` : ""}`}
                            variant="primary"
                        >
                            <Dropdown.Item onClick={() => setSelectedKategorija("")}>Vse</Dropdown.Item>
                            {props.seznamObutve.map((o) => o.kategorija).filter((value, index, self) => self.indexOf(value) === index).map((kategorija) => (
                                <Dropdown.Item key={kategorija} onClick={() => setSelectedKategorija(kategorija)}>{kategorija}</Dropdown.Item>
                            ))}
                        </DropdownButton></Nav>
                        &nbsp;
                        <Nav>
                            <Link to="/dodaj-obutev" className="btn btn-primary mr-2">
                                Dodaj obutev
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container mt-4">
                <div className="row">
                    {props.seznamObutve
                        .filter((o) => !selectedKategorija || o.kategorija === selectedKategorija)
                        .map((o) => (
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

                                        <Link
                                            to={`/obutev/${o.id}`}
                                            className="btn btn-primary mr-2"
                                        >
                                            Več
                                        </Link>
                                        &nbsp;
                                        <Button
                                            variant="danger"
                                            onClick={() => props.onOdstraniHandle(o.id)}
                                            className="ml-2"
                                        >
                                            Izbriši
                                        </Button>
                                        &nbsp;
                                        <Link
                                            to={`/obutev/spremeni/${o.id}`}
                                            className="btn btn-warning mr-2"
                                        >
                                            Spremeni
                                        </Link>
                                        <Link to={`/prodaj/${o.id}`} className="btn btn-warning position-absolute top-0 end-0 mt-2 me-2">
                                            Prodaj
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};
export default SeznamObutve;