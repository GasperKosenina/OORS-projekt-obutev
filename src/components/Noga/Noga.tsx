import React from 'react';
import { Container } from 'react-bootstrap';
import "../Noga/Noga.css"

const Noga = () => {
  return (
    <footer className="bg-light py-3 mt-auto noga">
      <Container>
        <p className="text-center mb-0">&copy; 2023 Moje podjetje</p>
      </Container>
    </footer>
  );
};

export default Noga;