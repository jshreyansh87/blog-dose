import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />
        <Route path='/login' element={<div>Login Page</div>} />

      </Route>
    </Routes>

  );
}

export default App;
