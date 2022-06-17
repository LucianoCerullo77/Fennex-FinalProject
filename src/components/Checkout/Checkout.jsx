import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Form,InputGroup, Col, Row, Button} from "react-bootstrap";
import { CartContext } from "../../context/CartContext";


export default function CheckoutContainer () {
  const [data, setData] = React.useState();
  const {cart} = React.useContext(CartContext);
  const {cartTotalPrice} = React.useContext(CartContext);
  console.log(data);
  const [orderId, setOrderId] = React.useState();
  console.log(orderId);


  const handleChange = (e) => {
    const {name , value} = e.target;
    setData({...data, [name]: value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: cartTotalPrice
    }
    const db = getFirestore()
    const orderCollection = collection(db,"orders")
    await addDoc(orderCollection, order).then(({id}) => {
      setOrderId(id)
      alert("Order created")
})
  }
  
    return (
        <div>
    <h1>Checkout</h1>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="First name"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control
           type="text"
            placeholder="City"
            name="city"
            required onChange={handleChange}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control
           type="text"
           placeholder="State"
           name="state"
           required onChange={handleChange} 
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="Number" 
          placeholder="Zip"
          name="zipCode"
          required onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Aditional Address</Form.Label>
          <Form.Control
            required
            type="text"
            name="aditionalAddress"
            placeholder="Address"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="Number" 
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Complete Checkout</Button>
    </Form>
    </div>
    )
}