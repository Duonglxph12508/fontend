import Category from "pages/Website/category";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { getAllCate } from 'api/categoryAPI';
import { useEffect, useState } from "react";

const AddCate = (props) => {


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(10).substring(15),
      ...data
    };
    console.log(newItem);
    props.onAddCate(newItem);

  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý Category</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên Category</label>
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
        <button type="submit" className="btn btn-primary" >
          Thêm Cate
        </button>

      </form>

    </>

  );
};
export default AddCate;
