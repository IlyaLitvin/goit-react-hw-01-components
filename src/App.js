import React from "react";
import Profile from "./components/Profile/Profile.js";
import userData from "./data/user.json";

import Statistic from "./components/Statistics/Statistics.js";
import statsData from "./data/Statistic.json";

import FriendList from "./components/FrinedList/FriendList.js";
import dataFriendList from "./data/FriendList.json";

const App = () => {
  return (
    <>
      <Profile user={userData} />

      <Statistic stats={statsData} title="Hello PITONS" />

      <FriendList friends={dataFriendList} />
    </>
  );
};
export default App;
