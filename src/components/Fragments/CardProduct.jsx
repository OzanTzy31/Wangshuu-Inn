const CardProduct = (Props) => {
  const { children } = Props;
  return (
    <div className="text-center w-full max-w-sm space-y-3 mb-5">{children}</div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="w-full max-w-lg" />
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

const Footer = (s) => {
  return (
    <div className="text-black px-8 pb-5">
      <a
        href={"/products/details"}
        className="bg-gray-500 py-2 px-3 rounded-md"
      >
        Details
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
