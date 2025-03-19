import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white font-serif">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <div
          className="bg-cover bg-center h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        ></div>
        <div className="mt-[-50px]">
          <h2 className="text-2xl font-semibold text-gray-700">
            Looks like you're lost
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            The page you are looking for is not available!
          </p>
          <a
            href="/"
            className="mt-5 inline-block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
