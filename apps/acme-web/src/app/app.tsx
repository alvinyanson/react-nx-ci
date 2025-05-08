import { Route, Routes } from 'react-router-dom';
function Home() {
  return <h1>Home Welcome Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
