import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
export default function Home () {
  return (
    <div className="App">
      <h1 >Welcome to Fennex</h1>
      <h2 >The best place to buy PC Components</h2>
      <br />
      <ItemListContainer title="What are you looking for?"/>
    </div>
  );
}