
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import './Layout.css'; // If you have any specific styles for the layout

const Layout = ({ title }) => {
  return (
    <div className="container">
      <SideBar />
      <main className="mainContent">
        <Header title={title} />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
