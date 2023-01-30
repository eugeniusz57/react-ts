import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/pages/About';
import { ProductsPage } from './components/pages/ProductsPage';

const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
