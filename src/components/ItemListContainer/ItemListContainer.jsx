import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import ClipLoader from "react-spinners/ClipLoader"
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore"

export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
 
  React.useEffect(() => {
    const db = getFirestore();
    if (categoryId) {
      const q = query(collection (db, "products"),
         where("category_id", "==", categoryId)
         );
         getDocs(q).then((snapshots) => {
           if (snapshots.size === 0) {
             console.log("No items");
           }
           setItems(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data() })));
            setLoading(false);
         });
        } else {
          const itemsRef = collection(db, "products")
          getDocs(itemsRef).then((snapshots) => {
            if (snapshots.size === 0) {
              console.log("No hay items");
            }
            setItems(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoading(false);
          });
        }
      }, [categoryId]);
  return (
    <Container className="itemlist-container" style={{justifyContent:'center', textAlign:'center'}}>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        { loading ? <ClipLoader/>  : <ItemList items={items} /> }
      </Row>
     
    </Container>
  )
}
