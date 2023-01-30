import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="h-[500] flex justify-between px-5 bg-gray-500 text-white">
      <span className="font-bold"> TypeScript</span>
      <span>
        <Link to="/" className="p-4 hover:text-blue-400">
          Products
        </Link>
        <Link to="/about" className="p-4 hover:text-blue-400">
          About
        </Link>
      </span>
    </nav>
  );
};
