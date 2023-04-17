import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/EditProduct";
import NewProduct from "./pages/NewProduct";
import EditUser from "./pages/EditUser";
import EditOrder from "./pages/EditOrder";
import Login from "./pages/Login";
import IsAuthenticated from "./hooks/IsAuthenticated";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="main w-100">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<IsAuthenticated />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/nuevo-usuario" element={<NewUser />} />
            <Route path="/editar-usuario/:id" element={<EditUser />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/editar-producto/:slug" element={<Edit />} />
            <Route path="/nuevo-producto" element={<NewProduct />} />
            <Route path="/ordenes" element={<Orders />} />
            <Route path="/editar-orden/:id" element={<EditOrder />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
