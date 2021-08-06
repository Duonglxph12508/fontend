import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../api/productAPI";
import { getAllCate } from 'api/categoryAPI';

const EditProduct = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const history = useHistory();

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        console.log(data)
        reset(data);
      } catch (error) { }
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data
    };
    console.log(newItem);
    props.onEdit(newItem);
    // history.push("/product");
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
      {/* {JSON.stringify(product)} */}
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">cập nhật sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={product.name}
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
            defaultValue={product.price}
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && <span className="">required </span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-control" {...register("categoryId")}
          defaultValue={product.status}>
            {category.map((category, index) => (
              <option key={index} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
        <label className="form-label">Trạng thái</label>
          <select className="form-control" {...register("status")}
            defaultValue={product.status}
          >
            <option value="0">Còn hàng</option>
            <option value="1">Hết hàng</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </>
  );
};
export default EditProduct;
