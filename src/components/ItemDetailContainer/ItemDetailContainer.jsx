
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc} from "firebase/firestore"

export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "products", productId);
    getDoc(itemRef).then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()});
    });
  }, [productId]);

  return (
    <Container className="itemlist-container">
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
}