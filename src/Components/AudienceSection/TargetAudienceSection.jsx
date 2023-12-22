import React from "react";

const TargetAudienceSection = () => {
  return (
    <div className="container mx-auto my-12">
      {/* Other content on your website */}

      {/* New section for target audience and benefits */}
      <section id="target-audience" className="py-12 bg-gray-100">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Who Benefits from Our Website?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Developer Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-600">
              Explore powerful tools and resources for seamless development.
            </p>
          </div>

          {/* Corporate Professionals Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Corporate Professionals
            </h3>
            <p className="text-gray-600">
              Access valuable insights and solutions for corporate challenges.
            </p>
          </div>

          {/* Bankers Persona */}
          <div className="persona bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-600">
              Discover financial tools and information tailored for banking
              professionals.
            </p>
          </div>

          {/* Add more personas as needed */}
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Benefits for All Users
          </h2>

          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-3">
              Stay updated with the latest industry trends.
            </li>
            <li className="mb-3">
              Enhance your skills with our educational resources.
            </li>
            <li>Connect and collaborate with like-minded professionals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TargetAudienceSection;
