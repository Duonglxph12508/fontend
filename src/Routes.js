import { signup } from "api/authAPI";
import AdminRoute from "auth/adminRoute";
import CategoryLayout from "layouts/categoryLayout";
import AddProduct from "pages/Admin/add";
import AddCate from "pages/Admin/addCate";
import EditProduct from "pages/Admin/edit";
import EditCate from "pages/Admin/editCate";
import List from "pages/Admin/list";
import ListCate from "pages/Admin/listCate";
import ListUser from "pages/Admin/listUser";
import Category from "pages/Website/category";
import CategoryDetail from "pages/Website/category_detal";
import ProductDetail from "pages/Website/productDetail";
import ShowProduct from "pages/Website/showProduct";
import Signup from "pages/Website/signup";

import { BrowserRouter, Route, Switch } from "react-router-dom"
import AdminLayout from "./layouts/adminLayout"
import WebsiteLayout from "./layouts/websiteLayout";
import Signin from "./pages/Website/signin";
export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin">
                    <AdminRoute>
                        <AdminLayout>
                            <Switch>
                                <Route exact path="/admin/product">
                                    <List {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AddProduct {...props} />
                                </Route>
                                <Route exact path="/admin/product/:id/edit">
                                    <EditProduct {...props} />
                                </Route>
                                <Route exact path="/admin/category">
                                    <ListCate {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AddCate {...props} />
                                </Route>
                                <Route exact path="/admin/category/:id/edit">
                                    <EditCate {...props} />
                                </Route>
                                <Route exact path="/admin/users">
                                    <ListUser {...props} />
                                </Route>
                            </Switch>
                        </AdminLayout>
                    </AdminRoute>
                </Route>
                <Route path="">
                    <WebsiteLayout>
                        <Switch>
                            <Route exact path="/">
                                <ShowProduct {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <Signin />
                            </Route>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                            <Route exact path="/category">
                                <Category />
                            </Route>
                            <Route exact path="/ShowProduct/:id">
                                <ProductDetail >

                                </ProductDetail>
                            </Route>
                            <Route path="/categoryLayout">
                                <CategoryLayout>
                                    <Switch>
                                        <Route exact path="/categoryLayout/category/:id/product">
                                            <CategoryDetail />
                                        </Route>
                                    </Switch>
                                </CategoryLayout>
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>


            </Switch>
        </BrowserRouter>
    );
}