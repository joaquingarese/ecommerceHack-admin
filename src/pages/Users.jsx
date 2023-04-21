import "./styles/user.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios({
      method: "get",
      url: "/users",
    });
    return response.data;
  };

  const fetchData = async () => {
    const users = await getUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    users && (
      <div id="usersContainer">
        <div className="container pt-2 pb-4 ">
          <div className="container d-flex justify-content-between mt-2">
            <h5 className="fw-bold pb-3">Usuarios</h5>
            <Link to={"/nuevo-usuario"} className="text-decoration-none">
              <button type="button" className="add-button btn ms-auto d-block">
                Crear usuario
              </button>
            </Link>
          </div>
          <div className="table-container">
            <Table bordered hover className="shadow table-styles mb-0">
              <thead>
                <tr className="principal-tr">
                  <th className="d-none d-md-table-cell">Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  return (
                    <tr key={i} className="bg-white">
                      <td className="d-none d-md-table-cell">{user.id}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                      <td className="edit-td">
                        {user.firstname !== "Alan" && (
                          <Link to={`/editar-usuario/${user.id}`}>
                            <button>Editar</button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    )
  );
}

export default Users;
