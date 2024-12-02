import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="px-3">
      <Link
        to="/"
        className="md:text-2xl font-bold text-white font-logo hover:text-gray-400 transition-colors duration-300 px-5"
      >
        Wangshu Inn
      </Link>
    </div>
  );
};

export default Logo;
