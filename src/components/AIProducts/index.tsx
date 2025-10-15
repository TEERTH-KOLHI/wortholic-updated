"use client";
import { useState } from "react";

const AIProducts = () => {
  const [products] = useState([
    // Add your AI products here
    {
      id: 1,
      name: "AI Product 1",
      description: "Description of your first AI product",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      image: "/images/ai-products/product1.jpg"
    },
    // Add more products as needed
  ]);

  return (
    <section id="ai-products" className="bg-white dark:bg-black py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our AI Products
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-3xl">
                Innovative AI Solutions
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Discover our cutting-edge AI products built by our team of experienced researchers and developers. Each solution is designed to transform your business operations.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 group rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                  <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 45C13.9 45 5 36.1 5 25S13.9 5 25 5s20 8.9 20 20-8.9 20-20 20z"
                        fill="currentColor"
                      />
                      <path
                        d="M25 10c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {product.description}
                  </p>
                  <ul className="mb-5 list-inside list-disc text-body-color dark:text-body-color-dark">
                    {product.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="rounded-xs bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90">
                    Learn More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <div className="mb-10 group rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                  <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 5C13.4 5 4 14.4 4 26s9.4 21 21 21 21-9.4 21-21S36.6 5 25 5zm0 38c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.6 17-17 17z"
                        fill="currentColor"
                      />
                      <path
                        d="M25 15c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
                        fill="currentColor"
                      />
                      <circle cx="25" cy="26" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    AI Products Coming Soon
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    Our team of 100+ experienced developers, engineers, and AI researchers are working on innovative AI solutions. This section will showcase our AI products - from machine learning platforms to intelligent automation tools.
                  </p>
                  <div className="mt-6">
                    <p className="text-sm text-body-color dark:text-body-color-dark italic">
                      You can add your AI products by editing the products array in this component.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIProducts;