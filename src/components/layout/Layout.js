import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>
);

export default Layout;
