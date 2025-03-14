import SideMenu from "../components/SideMenu";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="main-content">
        <h1>Welcome to Dashboard</h1>
        <p>This is your dashboard screen with a sidebar menu.</p>
      </div>
    </div>
  );
}
