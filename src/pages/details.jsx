import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Header";
import ImageSlider from "../components/Elements/Slider/Slider";

const DetailsPage = () => {
  return (
    <>
      <Navbar />
      <section
        id="header"
        className="h-[50vh] flex flex-col items-center justify-center w-full bg-[url('/img/room.jpg')] bg-contain bg-no-repeat md:bg-cover md:bg-center"
      ></section>
      <section id="hero">
        <div className="flex flex-col justify-center items-center text-center gap-y-3 py-20">
          <h1 className="text-2xl font-bold">Basic Room</h1>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            repellat recusandae accusamus mollitia esse. Unde temporibus
            suscipit tempora possimus, quae sequi quisquam eligendi in facilis,
            quam perspiciatis incidunt at animi.
          </p>
          <h2 className="text-2xl font-bold">Room Features</h2>
          <ul>
            <li>Bed</li>
            <li>lemari</li>
            <li>meja</li>
          </ul>
        </div>
        <ImageSlider />
      </section>
      <Footer />
    </>
  );
};

export default DetailsPage;
