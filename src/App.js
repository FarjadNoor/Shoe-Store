import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import {Dashboard}  from "./Component/Dashboard";
import Header from "./Component/Header";
import { Product } from "./Component/Product";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Products } from "./Component/Products";
import { Shoe } from "./Component/Shoe";
import { NotFound } from "./Component/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='product' element={<Products />} >
          <Route path='/' element={<Product />} />
          <Route path=':slug' element={<Shoe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
