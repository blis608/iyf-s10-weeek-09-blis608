import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import PostDetail from './pages/PostDetail.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Challenges from './pages/Challenges.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter basename="/iyf-s10-weeek-09-blis608/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
