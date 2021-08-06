import Category from "pages/Website/category";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { getAllCate } from 'api/categoryAPI';
import { useEffect, useState } from "react";

const AddProduct = (props) => {


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data
    };
    console.log(newItem);
    props.onAdd(newItem);

  };
  //hiển thị cate lên select box
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        console.log(data)
        setCategory(data);
      } catch (error) { }
    };
    getCategory();
  }, []);
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            className="form-control"
            {...register("price")}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-control" {...register("categoryId")}>
            {category.map((category, index) => (
              <option key={index} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Trạng thái</label>
          <select className="form-control" {...register("status")}>
            <option value="0">Còn hàng</option>
            <option value="1">Hết hàng</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" onClick={() => { return <Redirect to="/admin/product" />; }}>
          Thêm sản phẩm
        </button>

      </form>

    </>

  );
};
export default AddProduct;
