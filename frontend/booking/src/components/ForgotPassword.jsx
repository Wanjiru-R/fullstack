
import { useState } from "react";
import { Link } from "react-router-dom";
import { House, Mail, ArrowLeft } from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setSuccess(
      "Your password reset request has been submitted. If this email is registered, you will receive further instructions."
    );

    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        
        <div className="bg-blue-800 text-white flex flex-col justify-center items-center text-center p-10">

          <House size={65} className="mb-6" />

          <h1 className="text-4xl font-bold mb-4">
            Zara Homes
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed">
            Don't worry! It happens. We'll help you get
            back to your account.
          </p>

        </div>

        
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Forgot Password?
          </h2>

          <p className="text-gray-500 text-center mt-3 mb-8">
            Enter your email address and we'll guide you
            through the password recovery process.
          </p>

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

            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">

              <Mail size={20} className="text-gray-400" />

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                required
                placeholder="Enter your registered email"
                className="w-full p-3 outline-none"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 mt-6"
            >
              Reset Password
            </button>

          </form>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-blue-700 hover:underline mt-8"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;
