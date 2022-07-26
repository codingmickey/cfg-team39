import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ConfirmPage from "./pages/ConfirmPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";
import OrderListPage from "./pages/OrderListPage";
import ErrorPage from "./pages/ErrorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Create from "./components/adminConsole/create";
import Allcampaigns from "./components/allcampaigns";
import CreateCampaign from "./components/createCampign/createCampaign";
// import CampaignComponent from "./components/homeCompaignComponent";
// import CampaignPage from "./components/campaign";
// for showing the 'new update available' banner and to register the service worker
import ServiceWorkerWrapper from "./ServiceWorkerWrapper";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  React.useEffect(() => {
    alanBtn({
      key: "6a35a5f04a43bcf4fcd818ca1c3f704d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "login") {
          // Call the client code that will react to the received command
          // <Redirect to="/campaigns" />;
          //   history.push("/login");
        }
      }
    });
  }, []);
  return (
    <Router>
      <Header />
      <ServiceWorkerWrapper />

      <main className="py-2">
        <Container>
          <Switch>
            {/*	<Route path="" element={<Allcampaigns />} />
						</Route> */}
            <Route path="/" component={HomePage} exact />
            <Route path="/campaigns/create" component={CreateCampaign} exact />
            <Route path="/campaigns" component={Allcampaigns} exact />
            <Route path="/search/:keyword" component={HomePage} exact />
            <Route path="/page/:pageNumber" component={HomePage} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              exact
              component={HomePage}
            />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route
              path="/user/password/reset/:token"
              component={PasswordResetPage}
            />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/user/confirm/:token" component={ConfirmPage} exact />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderPage} />
            <Route path="/admin/userlist" component={UserListPage} exact />
            <Route
              path="/admin/userlist/:pageNumber"
              component={UserListPage}
              exact
            />
            <Route path="/admin/user/:id/edit" component={UserEditPage} />
            <Route
              path="/admin/productlist"
              exact
              component={ProductListPage}
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListPage}
              exact
            />
            <Route path="/admin/product/:id/edit" component={ProductEditPage} />
            <Route path="/admin/orderlist" component={OrderListPage} exact />
            <Route
              path="/admin/orderlist/:pageNumber"
              component={OrderListPage}
              exact
            />
            <Route component={ErrorPage} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
