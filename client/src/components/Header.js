import React, { useState } from 'react';
import { Menu, Input, Button, Form } from 'semantic-ui-react';
import './Style.css';

function Header() { 
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message);
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setErrorMessage('An error occurred while subscribing.');
    }
  };

  return (
      <Menu className="header-menu" secondary>
        <Menu.Menu position='left'>
          <Menu.Item header>DEV@Deakin</Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right' className="subscription-menu">
          <Form onSubmit={handleSubscribe} className="subscription-form">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginRight: '10px', width: '300px' }}
            />
            <Button primary type="submit">Subscribe to our Newsletter</Button>
          </Form>
          {successMessage && <p style={{ color: 'white' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </Menu.Menu>
      </Menu>
  );
}

export default Header;
