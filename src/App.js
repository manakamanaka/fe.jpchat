import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserInfoProvider } from "./context/UserInfoProvider";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/HomePage/Homepage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import ChatDetails from "./components/ChatWindowRightContent/ChatDetails/ChatDetails";
import { CurrentFriendInfoProvider } from "./context/CurrentFriendInfoProvider";
import FriendsManagement from "./components/ChatWindowRightContent/FriendsManagement/FriendsManagement";
import AIChatDetails from "./components/ChatWindowRightContent/AIChatDetails/AIChatDetails";

function App() {
  return (
    <UserInfoProvider>
      <CurrentFriendInfoProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={<ChatPage />}>
            <Route
              path="/chat/:conversationId/:friendId"
              element={<ChatDetails />}
            />
            <Route
              path="/chat/chtholly/:conversationId/:friendId"
              element={<AIChatDetails />}
            />
            <Route path="/chat/friends" element={<FriendsManagement />} />
            <Route path="/chat/settings" element="" />
          </Route>
        </Routes>
      </CurrentFriendInfoProvider>
    </UserInfoProvider>
  );
}

export default App;
