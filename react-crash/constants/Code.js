export const signupFormCode = `
  <form className="max-w-md mx-auto bg-gradient-to-br from-purple-900 to-gray-800 shadow-neon rounded-lg px-8 pt-6 pb-8">
		  <h2 className="text-4xl font-bold mb-6 text-center text-pink-300 neon-text">
			Signup
		  </h2>
		  <div className="mb-4">
			<label className="block text-cyan-300 text-sm font-bold mb-2">
			  Full Name
			</label>
			<input
			  className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
			  type="text"
			  placeholder="Enter your full name"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block text-cyan-300 text-sm font-bold mb-2">
			  Email
			</label>
			<input
			  className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
			  type="email"
			  placeholder="Enter your email"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block text-cyan-300 text-sm font-bold mb-2">
			  Password
			</label>
			<input
			  className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
			  type="password"
			  placeholder="Enter your password"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block text-cyan-300 text-sm font-bold mb-2">
			  Confirm Password
			</label>
			<input
			  className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
			  type="password"
			  placeholder="Confirm your password"
			/>
		  </div>
		  <div className="mb-6">
			<label className="block text-cyan-300 text-sm font-bold mb-2">
			  Phone Number
			</label>
			<input
			  className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
			  type="tel"
			  placeholder="Enter your phone number"
			/>
		  </div>
		  <div className="flex justify-center">
			<button
			  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg neon-glow transition duration-300 transform hover:scale-105"
			  type="submit"
			>
			  Signup
			</button>
		  </div>
		</form>
  `;

export const loginCode = `
    <form className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300 neon-text">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-neon"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  `;