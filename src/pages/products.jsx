import Navbar from "../components/Fragments/Header";
import CardProduct from "../components/Fragments/CardProduct";
import Footer from "../components/Fragments/Footer";

const products = [
  {
    id: 1,
    title: "Basic Room",
    image: "/img/room.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
  },
  {
    id: 2,
    title: "Medium Room",
    image: "/img/room.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
  },
  {
    id: 3,
    title: "Deluxe Room",
    image: "/img/room.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
  },
];

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-wrap w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/room.jpg)",
        }}
      >
        <div className="flex flex-col justify-center w-full text-white text-center font-default">
          <p
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)" }}
          >
            Produk Kami
          </p>
        </div>
      </div>
      <div
        id="hero"
        className="lg:w-full min-h-screen flex flex-col justify-center items-center pt-36"
      >
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body title={product.title}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
