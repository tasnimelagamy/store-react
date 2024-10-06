import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
<>
<Navbar/>
<Routes>
  <Route path="/" element={<ProductList/>}></Route>
  <Route path="/details/:id" element={<Details/>}></Route>
</Routes>
 
</>
  );
}

export default App;
