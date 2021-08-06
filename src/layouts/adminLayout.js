import Footer from "components/admin/footer";
import NavAdmin from "components/website/NavCate";
import Convert from "components/convert";
import List from "pages/Admin/list";
import HeaderAdmin from "../components/admin/headrAdmin";

export default function AdminLayout(props) {
    return (
        <div>
            <div>
                <HeaderAdmin />
                <div className="container">
                    <div className="row">
                        <main className=".col-md-6">
                            {props.children}
                        </main>
                    </div>
                </div>
                <Footer />
                {/* <Convert/> */}
            </div>
        </div>
    );
};