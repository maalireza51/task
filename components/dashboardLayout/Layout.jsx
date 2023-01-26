import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ font, children }) => {
  return (
    <div className={`h-screen ${font}`}>
        <Header />
        <div className="h-full flex pt-16">
          <Content>{children}</Content>
          <Sidebar />
        </div>
    </div>
  );
};

export default Layout;
