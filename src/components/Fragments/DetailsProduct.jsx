import ImageSlider from "../Elements/Slider/Slider";

const DetailsProduct = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

const Header = (props) => {
  const { background } = props;
  return (
    <section
      id="header"
      className={`h-[50vh] flex flex-col items-center justify-center w-full ${background} bg-contain bg-no-repeat md:bg-cover md:bg-center`}
    ></section>
  );
};

const Body = (props) => {
  const { title, desc, children } = props;
  return (
    <section id="body">
      <div className="flex flex-col justify-center items-center text-center gap-y-3 md:py-20">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="w-1/2 mb-20">{desc}</p>
        <h2 className="text-2xl font-bold">Room Features</h2>
        {children}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section id="footer" className="">
      <ImageSlider />
    </section>
  );
};

DetailsProduct.Header = Header;
DetailsProduct.Body = Body;
DetailsProduct.Footer = Footer;

export default DetailsProduct;
