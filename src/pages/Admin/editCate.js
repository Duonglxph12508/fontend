import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../api/productAPI";
import {  getCate } from 'api/categoryAPI';

const EditCate = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  

  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getCate(id);
        setCategory(data);
        reset(data);
      } catch (error) { }
    };
    getCategory();
  }, []);

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data
    };
    console.log(newItem);
    props.onEditCate(newItem);
    // history.push("/product");
  };
  
  return (
    <>
      {/* {JSON.stringify(product)} */}
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">cập nhật Category</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên CateGory</label>
          <input
            type="text"
            defaultValue={category.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </>
  );
};
export default EditCate;
