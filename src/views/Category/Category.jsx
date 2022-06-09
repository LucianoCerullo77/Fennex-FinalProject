import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Our Category List</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}