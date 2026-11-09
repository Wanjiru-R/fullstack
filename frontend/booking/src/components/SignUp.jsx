
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setSuccess("Your registration form has been submitted successfully!");

    console.log("Registration Details:", formData);
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
            Create an account and discover comfortable,
            beautiful and memorable places to stay.
          </p>

          <div className="mt-8 border-t border-blue-500 pt-6">
            <p className="text-sm text-blue-100">
              Your next comfortable stay starts here.
            </p>
          </div>

        </div>

        
        <div className="p-8 md:p-12">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Join Zara Homes today
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
                Full Name
              </label>

              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

                <User size={20} className="text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            
            <div className="mb-5">

              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>

              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

                <Mail size={20} className="text-gray-400" />

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

                <LockKeyhole size={20} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
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

           
            <div className="mb-6">

              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>

              <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

                <LockKeyhole size={20} className="text-gray-400" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="w-full p-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="text-gray-500 hover:text-blue-700"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

           
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Create Account
            </button>

          </form>

          
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

         
          <div className="text-center mt-6">
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

export default Signup;
