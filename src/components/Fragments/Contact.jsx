import Button from "../Elements/Button";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../src/assets/img/room.jpg)",
      }}
    >
      <div className="mx-auto p-6 backdrop-blur-lg rounded-lg shadow-md lg:w-1/2">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-center text-white text-2xl mb-5">
          we want to hear from you!
        </p>
        <form className="space-y-6 text-white">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="text-black mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="text-black mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="text-black mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <div className="text-center">
            <Button color="bg-gray-500">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
