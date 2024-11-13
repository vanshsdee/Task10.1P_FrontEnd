import React from 'react';
import { Segment } from 'semantic-ui-react';
import './Style.css'

const Footer = () => {
  return (
    <Segment textAlign='center'>
      <p>© 2024 DEV@Deakin - All rights reserved</p>
      <ul>
        <li><a href="#">Dev@Deakin22</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Code of Conduct</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </Segment>
  );
};

export default Footer;
