import { CreateProduct } from '../CreateProduct';
import { Error } from '../Error';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import { useContext } from 'react';
import { ModalContext } from '../ModalContext';
import { Product } from '../Product';
import { useProducts } from '../../hooks/products';
import { IProduct } from '../../types/types';

export const ProductsPage = () => {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const onCreate = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={onCreate} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-3 hover:bg-orange-400 "
        onClick={open}
      >
        add
      </button>
    </div>
  );
};
