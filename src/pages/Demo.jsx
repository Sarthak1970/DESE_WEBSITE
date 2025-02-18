import React from "react";
import Demo1 from "../assets/Demo1.png"
const DemoPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-400 m-10">Demos</h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore our innovative demo projects showcasing cutting-edge
          technology.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <img
          src="../assets/Demo1.png"
          alt="Advanced Driver Assistance Systems"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold text-green-300 mb-2">
          Advanced Driver Assistance Systems (ADAS)
        </h2>
        <p className="text-gray-300">
          ADAS enhances vehicle safety and driving comfort using sensors,
          cameras, and AI-driven algorithms. Features include collision
          avoidance, lane-keeping assistance, and adaptive cruise control.
        </p>
      </div>
      {/* <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="path-to-demo2-image.jpg"
          alt="Demo 2"
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-xl font-semibold mt-2">Demo 2 Title</h3>
        <p className="text-gray-600">
          Brief description of the second demo. This should summarize the
          project's purpose and features.
        </p> */}
      {/* </div> */}
    </div>
  );
};

export default DemoPage;
