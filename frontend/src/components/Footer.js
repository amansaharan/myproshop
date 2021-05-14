import React from 'react';
import { Container } from 'react-bootstrap';
import Clock from './Clock';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>CopyRight #copy Proshop</p>
        <Clock />
      </Container>
    </footer>
  );
};

export default Footer;
