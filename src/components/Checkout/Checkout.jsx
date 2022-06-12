import React from "react";
import { collection, getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Form,InputGroup, Col, Row, Button} from "react-bootstrap";


export default function CheckoutContainer () {
    // const sendOrder = () => {
    //     const order = {
    //         buyerName: "Juan",
    //         buyerEmail: "   @gmail.com",
    //         buyerPhone: "123456789",
    //         buyerAddress: "Calle falsa 123",
    //         buyerCity: "Ciudad falsa",
    //         buyerState: "Estado falso",
    //         buyerZip: "12345",
    //         buyerCountry: "Pais falso",
    //         buyerNotes: "Notas falsas",
    //         items: [
    //             {
    //                 id: "1",
    //                 title: "Mouse",
    //                 price: "$100",
    //                 quantity: 1,
    //                 image: "https://via.placeholder.com/150"
    //             },
    //             {
    //                 id: "2",
    //                 title: "Keyboard",
    //                 price: "$200",
    //                 quantity: 2,
    //                 image: "https://via.placeholder.com/150"
    //     }
    //         ]
    //     }
    //     const db = getFirestore()
    //     const ordersCollection = collection (db, "order")
    // }

    const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
        <div>
    <h1>Checkout</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
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
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
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