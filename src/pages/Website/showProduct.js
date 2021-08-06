import { Link } from "react-router-dom";

export default function ShowProduct(props) {
    return (

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.data.map((item, index) => (
                <div className="col" key={index}>
                    <div className="card shadow-sm">
                        <img className="bd-placeholder-img card-img-top" width="100%" height={225} src="https://cellphones.com.vn/sforum/wp-content/uploads/2018/11/3-8.png" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <div className="card-body">
                            <strong>{item.name}</strong>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                        <Link to={`/ShowProduct/${item.id}`}>Views</Link>
                                    </button>
                                </div>
                                <p className="text-primary">{item.price} đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}