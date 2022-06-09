import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

export default function Cart () {

  const {cart, deleteAll, cartQuantity} = React.useContext(CartContext)

  return (
    !cart.lenght ? 
    <Container>
      <Row className="empty-cart text-center">
        <Col>
          <h3>Your cart is currently Empty</h3>
            <Link to={"/Products"}><FontAwesomeIcon icon={faArrowLeftLong}/>Back to the store</Link>
        </Col>
      </Row>
    </Container> :
      <Container className="mt-3">
          <h1>This Is Your Cart</h1>
          <Row className="text-end">
            <Col md={{span: 4, offset:5}}><Button onClick={() => deleteAll()}>Delete All Products</Button></Col>
          </Row>
          <Row>
            <Col>
            <Table striped className="mt-3 shopping-cart">
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {cart.map=(item) => (<CartItem item={item} key={item.id}/>)}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>{cartQuantity}</td>
                </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
        </Container>
  )
}