import Homepage from "../pages/user/Homepage.jsx";
import Dashboard from "../pages/admin/Dashboard";
import Settings from "../pages/admin/Setting";
import SignIn from "../pages/auth/Sign_in";
import SignUp from "../pages/auth/Sign_up";
import Tables from "../pages/admin/Table";
import ProductDetail from "../pages/user/ProductDetail.jsx";
import ShoppingCart from "../pages/user/ShoppingCart.jsx";
import PurchaseHistory from "../pages/user/purchaseHistory.jsx";
import OrderSuccess from "../pages/user/OrderSuccess.jsx";
import AccountPage from "../pages/user/AccountPage.jsx";
import CancelledProductsPage from "../pages/user/CancelledProductsPage.jsx";
import CancelOrderInterface from "../components/ButtonComponent/CancelOrderInterface.jsx";
import CustomerUpdate from "../pages/admin/Customers/CustomerUpdate.jsx";
import CustomerList from "../pages/admin/Customers/CustomerList.jsx";
import ProductList from "../pages/admin/Products/ProductList.jsx";
import ProductCreate from "../pages/admin/Products/ProductCreate.jsx";
import ProductUpdate from "../pages/admin/Products/ProdctUpdate.jsx";

export const routes = [
  {
    path: "/",
    page: Homepage,
  },
  {
    path: "/sign-in",
    page: SignIn,
  },
  {
    path: "/sign-up",
    page: SignUp,
  },
  {
    path: "/detail",
    page: ProductDetail,
  },
  {
    path: "/cart",
    page: ShoppingCart,
  },
  {
    path: "/history",
    page: PurchaseHistory,
  },
  {
    path: "/order-success",
    page: OrderSuccess,
  },
  {
    path: "/account-page",
    page: AccountPage,
  },
  {
    path: "/cancel-product",
    page: CancelledProductsPage,
  },
  {
    path: "/cancel-order",
    page: CancelOrderInterface,
  },
];

export const adminRoutes = [
  // {
  //     path: '/',
  //     page: Homepage
  // },
  // {
  //     path: '/sign-in',
  //     page: SignIn
  // },
  // {
  //     path: '/sign-up',
  //     page: SignUp
  // },

  {
    path: "/admin",
    page: Dashboard,
  },
  {
    path: "/admin/settings",
    page: Settings,
  },
  {
    path: "/admin/tables",
    page: Tables,
  },
  {
    path: "/admin/CustomerUpdate",
    page: CustomerUpdate,
  },
  {
    path: "/admin/CustomerList",
    page: CustomerList,
  },
  {
    path: "/admin/ProductList",
    page: ProductList,
  },
  {
    path: "/admin/ProductCreate",
    page: ProductCreate,
  },
  {
    path: "/admin/ProductUpdate",
    page: ProductUpdate,
  },
];
