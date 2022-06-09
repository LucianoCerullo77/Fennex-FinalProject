import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { getData } from "../../data/products";





export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    getData
    .then((res) => {
      if(categoryId){
        setItems(res.filter(item => item.category_id === +categoryId));
      }

      else {
        setItems(res);
      }
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[categoryId])

  return (
    <Container className="itemlist-container" style={{justifyContent:'center', textAlign:'center'}}>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        
        { loading ? <p>Loading Content...</p>  : <ItemList items={items} /> }
      </Row>
     
    </Container>
  );
}