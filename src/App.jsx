import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewPostPage from "./pages/NewPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import NotificationsPage from "./pages/NotificationsPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsAccout from "./pages/SettingsAccout";
import { AccountContext } from "./components/Account";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  const { isUserLoggedIn } = useContext(AccountContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute
              canActivate={!isUserLoggedIn()}
              redirectPath="/feed"
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              canActivate={isUserLoggedIn()}
              redirectPath="/login"
            />
          }
        >
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/compose/post" element={<NewPostPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings/account" element={<SettingsAccout />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
