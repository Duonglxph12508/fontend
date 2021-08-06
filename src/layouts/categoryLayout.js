
import NavCate from "components/website/NavCate";
import CategoryDetail from "pages/Website/category_detal";


export default function CategoryLayout(props) {

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <NavCate />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
};