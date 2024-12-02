const Footer = () => {
  return (
    <div className="bg-gray-700 text-white w-full lg:h-[50vh]">
      <div className="flex justify-center items-center w-full h-1/3 py-5 lg:py-0">
        <h1 className="font-bold font-logo text-2xl lg:text-4xl">
          Wangshu Inn
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center text-center w-full lg:h-1/3 gap-y-3 lg:gap-x-52">
        <div>
          <h2 className="font-bold lg:text-2xl mb-2">Navigation</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold lg:text-2xl mb-2">Support</h2>
          <ul>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">FAQ's</a>
            </li>
            <li>
              <a href="">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold lg:text-2xl mb-2">Social</h2>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-1/3 py-5 lg:py-0 ">
        <p>copyright©WangshuInn</p>
      </div>
    </div>
  );
};

export default Footer;
