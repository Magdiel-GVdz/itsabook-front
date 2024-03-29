import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import FeedPage from "./pages/feed/FeedPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NewPostPage from "./pages/newPost/NewPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import NotificationsPage from "./pages/notifications/NotificationsPage";
import PostPage from "./pages/post/PostPage";
import ProfilePage from "./pages/profile/ProfilePage";
import SettingsAccoutPage from "./pages/settings/SettingsAccoutPage";
import BooksPage from "./pages/books/BooksPage";
import ExplorePage from "./pages/explore/ExplorePage";
import { AccountContext } from "./context/Account";
import ProtectedRoute from "./utils/ProtectedRoute";
import SearchPage from "./pages/search/SearchPage";

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
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/settings/account" element={<SettingsAccoutPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/search/:query" element={<SearchPage />} /> 
          {/* 
          <Route path="/explore/tag/:tag" element={<ExplorePage />} />
          <Route path="/explore/author/:author" element={<ExplorePage />} />
          <Route path="/explore/category/:category" element={<ExplorePage />} />
          */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
