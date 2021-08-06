import { getRelatedProduct } from "api/categoryAPI";
import { get } from "api/productAPI";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [productRelated, setProductRelated] = useState([]);
    //lấy sản phẩm
    useEffect(() => {
        console.log('get product')
        const getProduct = async () => {
            try {
                const { data } = await get(id);
                setProduct(data);
            } catch (error) { }
        };
        getProduct();

    }, [id]);
    const idCate = product.categoryId;
    console.log(idCate)
    //lấy sản phẩm liên quan
    useEffect(() => {
        const getRP = async () => {
            try {
                const { data } = await getRelatedProduct(product.categoryId, id)
                setProductRelated(data);
            } catch (error) {
            }
        }
        getRP()
    }, [idCate])
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Chi tiết sản phẩm</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                    </div>
                </div>
            </section>
            <div className="top-area">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-images">
                            <main id="gallery">
                                <div className="main-img">
                                    <img className=" img-fluid img-thumbnail" width="70%" height={225} src="https://image.thanhnien.vn/1024/uploaded/hoangnam/2020_08_24/01_esvt.jpg" alt="#" />
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="product-info">
                            <h2 className="title">{product.name}</h2>
                            <h3 className="price">{product.price} đ</h3>
                            <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                            <div className="bottom-content">
                                <div className="row align-items-end">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="button cart-button">
                                            <button className="btn" style={{ width: '100%' }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <h1 className="fw-light">Sản phẩm liên quan</h1>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {productRelated.map((item, index) => (
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

            
        </div>

    );
}