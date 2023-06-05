/* eslint-disable spaced-comment */
import CareOrdersPage from "../view/pages/admin/care-orders-page";
import DashboardAdminPage from "../view/pages/admin/dashboard-admin-page";
import GraveDataPage from "../view/pages/admin/grave-data-page";
import Home from "../view/pages/home/home";
import Login from "../view/pages/login/login";
import Profile from "../view/pages/profile/profile";
import Register from "../view/pages/register/register";
import DashboardUserPage from "../view/pages/user/dashboard-user-page";
import GraveCarePage from "../view/pages/user/grave-care-page";
import SearchGravePage from "../view/pages/user/search-grave-page";

const routes = {
  "/": Home, // default page
  "/home": Home, //default page
  "/login": Login,
  "/register": Register,
  "/profile": Profile,
  "/care-orders-page": CareOrdersPage,
  "/dashboard-admin-page": DashboardAdminPage,
  "/grave-data-page": GraveDataPage,
  "/dashboard-user-page": DashboardUserPage,
  "/grave-care-page": GraveCarePage,
  "/search-grave-page": SearchGravePage,
};

export default routes;
