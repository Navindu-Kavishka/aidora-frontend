
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="profile-icon"></div>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-icon card-icon-donors"></div>
          <div className="card-title">Total Donors</div>
          <div className="card-value">001</div>
        </div>
        <div className="card">
          <div className="card-icon card-icon-fundraisers"></div>
          <div className="card-title">Total Fundraisers</div>
          <div className="card-value">001</div>
        </div>
        <div className="card">
          <div className="card-icon card-icon-projects"></div>
          <div className="card-title">Total Projects</div>
          <div className="card-value">001</div>
        </div>
        <div className="card">
          <div className="card-icon card-icon-funds"></div>
          <div className="card-title">Total Funds</div>
          <div className="card-value">LKR. 1000</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
