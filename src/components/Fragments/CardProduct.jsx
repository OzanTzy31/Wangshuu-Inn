import { Link } from "react-router-dom";

const CardProduct = (Props) => {
  const { children } = Props;
  return (
    <div className="text-center w-full max-w-sm space-y-3 mb-5">{children}</div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#" className="flex justify-center">
      <img
        src={image}
        alt="product"
        className="w-3/4 md:w-full max-w-lg rounded-md"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="text-black px-8 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
        <p className="text-base truncate">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { id } = props;
  return (
    <div className="text-black px-8 pb-5">
      <Link
        to={`/products/details/${id}`}
        className="bg-gray-500 py-2 px-3 rounded-md"
      >
        Details
      </Link>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
