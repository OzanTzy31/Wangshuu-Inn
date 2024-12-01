const Home = () => {
  return (
    <div
      className="flex flex-wrap w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../src/assets/img/Wangshu_Inn.jpg)",
      }}
    >
      <div className="flex flex-col justify-center w-full text-white text-center font-default">
        <p
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3"
          style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)" }}
        >
          Selamat datang di Wangshu Inn
        </p>
        <p
          className="lg:text-2xl font-semibold"
          style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)" }}
        >
          Kami memberikan pelayanan yang terbaik
        </p>
      </div>
    </div>
  );
};

export default Home;
