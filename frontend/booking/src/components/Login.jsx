
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, House } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setSuccess("Login form submitted successfully!");

    console.log("Login Details:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

       
        <div className="bg-blue-800 text-white flex flex-col justify-center items-center text-center p-10">

          <House size={65} className="mb-6" />

          <h1 className="text-4xl font-bold mb-4">
            Zara Homes
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed">
            Welcome back! Find comfort, luxury and beautiful
            spaces waiting for you.
          </p>

          <div className="mt-8 border-t border-blue-500 pt-6">
            <p className="text-sm text-blue-100">
              Your comfort, our priority.
            </p>
          </div>

        </div>

        
        <div className="p-8 md:p-12">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back!
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your Zara Homes account
            </p>

          </div>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4">
              {error}
            </p>
          )}

          {success && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg text-sm mb-4">
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit}>

           
            <div className="mb-5">

              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>

              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

           
            <div className="mb-5">

              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

                <LockKeyhole className="text-gray-400" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-blue-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

            </div>

            
            <div className="flex justify-end mb-6">
              <Link
                to="/login"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Login
            </button>

          </form>

         
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <div className="text-center mt-8">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-blue-700"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
