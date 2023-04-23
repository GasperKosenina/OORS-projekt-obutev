import React from "react"
import { Navbar, Container, Nav, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { IObutev } from '../../models/Obutev';
import { Link } from "react-router-dom";
import { IKupec } from "../../models/Kupec";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { IReklamacija } from "../../models/Reklamacija";

interface reklamirajProps {
    onReklamirajObutev: (reklamacija: IReklamacija) => void;
}

const initialState: IReklamacija = {
    id: 0,
    vzrok: "",
    datum: undefined,
    id_obutve: 0,
}
const Reklamiraj = (props: reklamirajProps) => {
    const [reklamacija, setReklamacija] = React.useState<IReklamacija>(initialState)

    const navigate = useNavigate()
    const { id } = useParams();
    let parsanId: number
    if (id !== undefined) {
        parsanId = parseInt(id)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onReklamirajObutev(reklamacija)
        navigate("/seznam-reklamiranih")
        setReklamacija(initialState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReklamacija((prevState: IReklamacija) => {
            const nextState = {
                ...prevState,
                id: prevState.id++,
                id_obutve: parsanId,
                [e.target.name]: e.target.value
            }
            return nextState
        })
    }

    return(
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
                            <FormGroup controlId="vzrok">
                                <FormLabel>Vzrok</FormLabel>
                                <FormControl type="text" name="vzrok" value={reklamacija.vzrok} onChange={handleChange} required />
                            </FormGroup>
                            <br />
                            <Button variant="primary" type="submit">
                                Reklamiraj
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default Reklamiraj