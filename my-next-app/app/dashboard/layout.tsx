interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white flex justify-between items-center p-4">
        <h1 className="text-3xl">Logo</h1>
        <ul className="flex justify-between items-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen w-[400px] text-white bg-black text-2xl">
          <ul className="flex flex-col pt-5 gap-4">
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Payment</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
