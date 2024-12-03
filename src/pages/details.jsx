import { useParams } from "react-router-dom";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Header";
import DetailsProduct from "../components/Fragments/DetailsProduct";

const details = [
  {
    id: 1,
    title: "Basic Room",
    image: "bg-[url('/img/medium.jpg')]",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
  },
  {
    id: 2,
    title: "Medium Room",
    image: "bg-[url('/img/medium.jpg')]",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
  },
  {
    id: 3,
    title: "Deluxe Room",
    image: "bg-[url('/img/deluxe_3.jpg')]",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia at reprehenderit soluta, porro iste nostrum distinctio et natus molestiae obcaecati.`,
    features: (
      <ul>
        <li>Large Bed</li>
        <li>Sofa</li>
        <li>Tea Spot</li>
        <li>Cool Ornament and Painting</li>
      </ul>
    ),
  },
];

const DetailsPage = () => {
  const { id } = useParams();
  const detail = details.find((detail) => detail.id === parseInt(id));

  if (!detail) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <DetailsProduct>
        <DetailsProduct.Header
          background={detail.image}
        ></DetailsProduct.Header>
        <DetailsProduct.Body title={detail.title} desc={detail.desc}>
          {detail.features}
        </DetailsProduct.Body>
        <DetailsProduct.Footer></DetailsProduct.Footer>
      </DetailsProduct>
      <Footer />
    </>
  );
};

export default DetailsPage;
