import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import ProductImage from './components/image';

const firstName = " "; // Replace with your first name or leave as an empty string


function App() {
  return (
    <Container>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <ProductImage imgPath={product.imgPath} />
        </Card.Body>
      </Card>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Hello, {firstName ? firstName : "there"}!
      </h2>
      {firstName && <img src={product.imgPath} alt={product.name} style={{ display: 'block', margin: '20px auto' }} />}
    </Container>
  );
}

export default App;
