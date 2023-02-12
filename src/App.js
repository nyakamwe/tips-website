import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Tips from './pages/tips';
import Comments from './pages/comments';
import NotFound from './pages/notFound';
import Home from './pages/home';
import Analytics from './pages/Analytics';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/tips' exact element={<Tips/>}></Route>
          <Route path='/comments' exact element={<Comments/>}></Route>
          <Route path='/analytics' exact element={<Analytics/>}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
