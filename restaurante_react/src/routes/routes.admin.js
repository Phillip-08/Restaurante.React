import { AdminLayout } from "../layouts";
import {
  UsersAdmin,
  CategoriesAdmin,
  ProductAdmin,
  TablesAdmin,
  OrdersAdmin,
  TableDetailsAdmin,
  PaymentsHistory,
  SupplierAdmin,
  Inventary,
  InventaryAdmin,
} from "../pages/Admin";
import { InventoryAdmin } from "../pages/Admin/InventaryAdmin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: OrdersAdmin,
    exact: true,
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UsersAdmin,
    exact: true,
  },
  {
    path: "/admin/categories",
    layout: AdminLayout,
    component: CategoriesAdmin,
    exact: true,
  },
  {
    path: "/admin/products",
    layout: AdminLayout,
    component: ProductAdmin,
    exact: true,
  },
  {
    path: "/admin/tables",
    layout: AdminLayout,
    component: TablesAdmin,
    exact: true,
  },
  {
    path: "/admin/table/:id",
    layout: AdminLayout,
    component: TableDetailsAdmin,
    exact: true,
  },
  {
    path: "/admin/payments-history",
    layout: AdminLayout,
    component: PaymentsHistory,
    exact: true,
  },
  {
    path: "/admin/supplier",
    layout: AdminLayout,
    component: SupplierAdmin,
    exact: true,
  },
  {
    path: "/admin/inventory",
    layout: AdminLayout,
    component: InventaryAdmin,
    exact: true,
  },
];

export default routesAdmin;
