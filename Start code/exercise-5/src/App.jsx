import data from "./data";
function App() {
  return (
    <div className="container">
       <h1 className="title">
        Distance from Phnom Penh to Provinces in Cambodia
      </h1>
      <div className="wrapper">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}
function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Distance: {item.distance}</p>
      <p>Road: {item.road}</p>
    </div>
  );
}

export default App;
