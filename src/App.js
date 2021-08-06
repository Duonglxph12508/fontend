import Routes from './Routes';
import { add, getAll, edit, remove } from 'api/productAPI';
import { useState, useEffect } from 'react';


import './App.css';
import { addCate, editCate, getAllCate, removeCate } from 'api/categoryAPI';
import { getAllUser, removeUser } from 'api/authAPI';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {

    // Danh sach
    const getProduct = async () => {
      try {
        const { data } = await getAll();

        setProduct(data);
        console.log(product)
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();

  }, []);

  //thêm sản phẩm
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      console.log(data)
      setProduct([...product, data]);
    } catch (error) {
      console.log(Error);
    }
  }

  //edit
  const onHandleEdit = async (item) => {
    console.log("app.js", item);
    try {
      const { data } = await edit(item);
      console.log(data);
      const newProducts = product.map((product) =>
        product.id == data.id ? data : product
      );
      setProduct(newProducts);
    } catch (error) {
      console.log(error);
    }

  };

  // Xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = product.filter((item) => item.id !== data.id);
      setProduct(newProducts);

    } catch (error) {
      console.log(error);
    }

  };

  //CATEGORY
  const [category, setCategory] = useState([]);


  //danh sách cate
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategory(data);
      } catch (error) { }
    };
    getCategory();
  }, []);
  //thêm category
  const onHandleAddCate = async (item) => {
    try {
      const { data } = await addCate(item);
      console.log(data)
      setProduct([...product, data]);
    } catch (error) {
      console.log(Error);
    }
  }
  //edit Category
  const onHandleEditCate = async (item) => {
    console.log("app.js", item);
    try {
      const { data } = await editCate(item);
      console.log(data);
      const newCate = category.map((category) =>
        category.id == data.id ? data : category
      );
      setCategory(newCate);
    } catch (error) {
      console.log(error);
    };
  };

  // Xoa cate
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await removeCate(id);
      const newCategory = category.filter((item) => item.id !== data.id);
      setCategory(newCategory);

    } catch (error) {
      console.log(error);
    }

  };

  //User

  const [user, setUser] = useState([]);
  //danh sách User
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getAllUser();
        setUser(data);
        console.log(user)
      } catch (error) { }
    };
    getUser();
  }, []);

  // Xoa user
  const onHandleRemoveUser = async (id) => {
    try {
      const { data } = await removeUser(id);
      const newUser = user.filter((item) => item.id !== data.id);
      setUser(newUser);

    } catch (error) {
      console.log(error);
    }

  };
  
  return (
    <Routes
      data={product}
      dataCate={category}
      dataUser={user}
      onAdd={onHandleAdd}
      onAddCate={onHandleAddCate}
      onEdit={onHandleEdit}
      onEditCate={onHandleEditCate}
      onRemove={onHandleRemove}
      onRemoveCate={onHandleRemoveCate}
      onRemoveUser={onHandleRemoveUser}

    />
  );
}

export default App;
