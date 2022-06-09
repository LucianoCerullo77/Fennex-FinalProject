import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
export default function Home () {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Welcome to Fennex</h1>
      <h2 style={{textAlign:'center'}}>The best place to buy PC Components</h2>
      <br />
      <ItemListContainer title="What are you looking for?"/>
    </div>
  );
}