import React from "react";
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
const OTrgovini = () => {
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>O trgovini</Navbar.Brand>
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
            </div>
            <div>
                <h1>Dobrodošli v spletni trgovini z obutvijo!</h1>
                <p>
                    Naše spletno mesto je namenjeno prodajalcem obutve, ki želijo prodajati
                    svoje izdelke na spletu. Naša trgovina ponuja vrsto storitev, ki vam
                    pomagajo pri prodaji vaše obutve, vključno z enostavnim postopkom
                    ustvarjanja računa, dodajanjem izdelkov, upravljanjem naročil in
                    dostavo.
                </p>
                <p>
                    Poleg tega vam nudimo tudi obsežne statistične podatke o vaših
                    prodajnih dosežkih, da boste lahko spremljali in izboljšali svojo
                    prodajo. Naša prednostna naloga je zagotoviti, da se vaši izdelki
                    prikažejo na pravem mestu, pred pravimi ljudmi, tako da lahko dosežete
                    največje število prodaj.
                </p>
                <p>
                    Naša spletna trgovina z obutvijo vam zagotavlja vse, kar potrebujete za
                    uspešno spletno prodajo vaših izdelkov. Začnite prodajati danes in
                    izkoristite priložnosti, ki jih ponuja naša trgovina!
                </p>

                
                <img src="slike/ekipa-image-3.png" alt="slika" />

            </div>
            
        </>
    );
};

export default OTrgovini;