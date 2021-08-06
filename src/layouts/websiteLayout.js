import Header from "../components/website/header";
import Footer from "../components/website/footer";
import ShowProduct from "pages/Website/showProduct";
import ProductDetail from "pages/Website/productDetail";
export default function WebsiteLayout(props) {
    return (
        <div>
            <div>
                <Header />
                <main>
                    {/* <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Sản phẩm</h1>
                                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                            </div>
                        </div>
                    </section> */}
                    <div className="container">
                        {props.children}

                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};