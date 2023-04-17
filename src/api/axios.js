import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const login = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "/tokens",
    data: {
      email,
      password,
    },
  });
  return response.data;
};

const adminLogin = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "tokens/adminToken",
    data: {
      email,
      password,
    },
  });
  return response.data;
};

const register = async ({ firstname, lastname, email, password }) => {
  const response = await axios({
    method: "post",
    url: "/users",
    data: {
      firstname,
      lastname,
      email,
      password,
    },
  });
  return response.data;
};

const getProducts = async () => {
  const response = await axios({
    method: "get",
    url: "/products",
  });

  return response.data;
};

const getOneProduct = async (slug) => {
  const response = await axios({
    method: "get",
    url: `/products/${slug}`,
  });
  return response.data;
};

const getUser = async (id) => {
  const response = await axios({
    method: "get",
    url: `/users/${id}`,
  });
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/users/${id}`,
  });
  return response.data;
};

const newProduct = async (formData) => {
  const response = await axios({
    method: "POST",
    url: `/products`,
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  });
  return console.log("New product added");
};

const getCategories = async () => {
  const response = await axios({
    method: "get",
    url: "/categories",
  });
  return response.data;
};

const deleteOrder = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/orders/${id}`,
  });
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/products/${id}`,
  });
  return response.data;
};

const newCategory = async (fromValue) => {
  const response = await axios({
    method: "POST",
    url: `/categories`,
    data: fromValue,
  });
  return console.log("New category added");
};

const api = {
  getProducts,
  getOneProduct,
  login,
  register,
  getUser,
  adminLogin,
  newProduct,
  getCategories,
  deleteUser,
  deleteOrder,
  deleteProduct,
  newCategory,
};
export default api;
