import Overview from "@/components/dashboard/Overview";

import RecentProject from "@/components/dashboard/RecentProject/RecentProject";
import Message from "@/components/dashboard/Message/Message";
import Marketplace from "@/components/dashboard/MarketPlace/Marketplace";

const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-2/3 ">
        <Overview />
        <RecentProject />
      </div>
      <div className="flex flex-col w-2/3 ">
        <Marketplace />
        <Message />
      </div>
    </div>
  );
};

export default Home;
