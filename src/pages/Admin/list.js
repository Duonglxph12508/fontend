
import { Link } from "react-router-dom";
export default function List(props) {

    return (
        <div>

            <hr />
            <div className="table-responsive">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="h2">Quản lý sản phẩm</h2>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to="/admin/product/add" className="btn btn-sm btn-outline-primary">
                            Thêm sản phẩm
                        </Link>
                    </div>
                </div>
                <table className="table table-dark table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá sản phẩm</th>
                            <th scope="col">Danh mục</th>
                            <th scope="col">Tình trạng</th>
                            <th scope="col" colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}đ</td>
                                <td>{item.categoryId}</td>
                                <td>{item.status == 1 ? "Hết hàng" : "Còn Hàng"}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => props.onRemove(item.id)}

                                    >
                                        Delete
                                    </button>
                                    <Link
                                        className="btn btn-primary btn-sm ms-1"
                                        to={`/admin/product/${item.id}/edit`}
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
}