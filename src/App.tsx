import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { CreateProduct } from './components/CreateProduct';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

const App: React.FunctionComponent = () => {
  const { products, loading, error } = useProducts();
  const [modal, setModal] = useState(true);

  const onCreate = () => {
    setModal(false);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product">
          <CreateProduct onCreate={onCreate} />
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
