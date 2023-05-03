export interface AppName {
  name: string;
}
function App({ name }: AppName) {
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}
export default App;