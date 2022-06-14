import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Test from "./pages/Test";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post/:id' element={<Detail />} />
        <Route path='/write/:id' element={<Write />} />
        <Route path='/write' element={<Write />} />
        <Route path='/test' element={<Test />} />
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;