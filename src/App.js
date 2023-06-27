import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
     <Routes>
<Route path='/' element={<HomePage></HomePage>}></Route>
<Route path='/footer' element={<Footer></Footer>}></Route>
     </Routes>
    </div>
  );
}

export default App;
