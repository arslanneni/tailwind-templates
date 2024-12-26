import React, { Fragment } from "react";

const TailwindInstallation = () => {
  return (
    <Fragment>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-br from-gray-900 to-black shadow-lg rounded-lg border border-pink-600">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Getting Started with Tailwind CSS
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">What is Tailwind CSS?</h2>
          <p className="text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first CSS framework that allows you to rapidly build modern and responsive designs without leaving your HTML. It provides pre-defined utility classes that make styling quick, consistent, and easy.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Installation Steps</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>
              <strong>Install Node.js:</strong> Make sure you have Node.js installed on your system. You can download it from{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                nodejs.org
              </a>.
            </li>
            <li>
              <strong>Initialize your project:</strong> Create a new project and navigate to its directory:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>
                  mkdir my-project <br />
                  cd my-project <br />
                  npm init -y
                </code>
              </pre>
            </li>
            <li>
              <strong>Install Tailwind CSS:</strong> Install Tailwind CSS and its dependencies using npm:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
            </li>
            <li>
              <strong>Initialize Tailwind CSS:</strong> Create the default Tailwind configuration file:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>npx tailwindcss init</code>
              </pre>
            </li>
            <li>
              <strong>Configure your template paths:</strong> Open the <code>tailwind.config.js</code> file and configure the content array:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>{`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`}</code>
              </pre>
            </li>
            <li>
              <strong>Add Tailwind to your CSS:</strong> Create a <code>src/styles.css</code> file and include the following:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>
                  @tailwind base; <br />
                  @tailwind components; <br />
                  @tailwind utilities;
                </code>
              </pre>
            </li>
            <li>
              <strong>Run Tailwind CLI:</strong> Build your CSS file by running:
              <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
                <code>npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch</code>
              </pre>
            </li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Get Started with Tailwind Classes</h2>
          <p className="text-gray-300">
            Start using Tailwind's utility classes in your HTML files. For example:
          </p>
          <pre className="bg-gray-800 text-teal-400 p-3 rounded-lg mt-2 shadow-inner">
            <code>
              {`<div class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
  Hello, Tailwind!
</div>`}
            </code>
          </pre>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-500 transform transition duration-300 hover:scale-105"
          >
            Learn More at Tailwind Docs
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default TailwindInstallation;
