import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { refreshLogin } from "../actions/userActions";
import { listAllOrders } from "../actions/orderActions";
import getDateString from "../utils/getDateString";
import { PieChart } from "react-minimal-pie-chart";

const ProductListPage = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1; // to fetch various pages of orders
  const dispatch = useDispatch();
  const orderListAll = useSelector((state) => state.orderListAll); // to avoid blank screen display
  const { loading, orders, error, page, pages, total } = orderListAll;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { error: userLoginError } = userDetails;

  // refresh access tokens aif user details are failed
  useEffect(() => {
    if (userLoginError && userInfo && !userInfo.isSocialLogin) {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user && dispatch(refreshLogin(user.email));
    }
  }, [userLoginError, dispatch, userInfo]);

  // get all orders by pagenumber
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) dispatch(listAllOrders(pageNumber));
    else history.push("/login");
  }, [dispatch, history, userInfo, pageNumber]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Based on category</h1>

          <div style={{ width: "10rem" }}>
            <PieChart
              data={[
                { title: "Category 1", value: 10, color: "#E38627" },
                { title: "Category 2", value: 15, color: "#C13C37" },
                { title: "Category 3", value: 20, color: "#6A2135" }
              ]}
            />
          </div>
        </Col>
        <Col>
          <h1>Based on Product</h1>

          <div style={{ width: "10rem" }}>
            <PieChart
              data={[
                { title: "Product 1", value: 10, color: "#2274A5" },
                { title: "Product 2", value: 15, color: "#CC59D2" },
                { title: "Product 3", value: 3, color: "#F487B6" },
                { title: "Product 4", value: 2, color: "#2C4251" },
                { title: "Product 5", value: 2, color: "#000000" }
              ]}
            />
          </div>
        </Col>
        <Col>
          <h1>Based on location</h1>

          <div style={{ width: "10rem" }}>
            <PieChart
              data={[
                { title: "Location 1", value: 10, color: "#CCF5AC" },
                { title: "Location 2", value: 15, color: "#0C1618" },
                { title: "Location 3", value: 20, color: "#FFBA49" }
              ]}
            />
          </div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <h1>All Orders ({`${total || 0}`})</h1>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message dismissible variant="danger" duration={10}>
          {error}
        </Message>
      ) : (
        <Table striped bordered responsive className="table-sm text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>TOTAL</th>
              <th>DATE</th>
              <th>PAID</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user && order.user.name}</td>
                    <td>
                      {order.totalPrice.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR"
                      })}
                    </td>
                    <td>{getDateString(order.createdAt)}</td>
                    <td>
                      {order.isPaid ? (
                        getDateString(order.paidAt)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{
                            color: "red"
                          }}
                        />
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        getDateString(order.deliveredAt)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{
                            color: "red"
                          }}
                        />
                      )}
                    </td>
                    {/* <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                      }}>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button variant="link" className="btn-sm">
                          View Details
                        </Button>
                      </LinkContainer>
                    </td> */}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
      <Paginate pages={pages} page={page} isAdmin={true} forOrders={true} />
    </>
  );
};

export default ProductListPage;
