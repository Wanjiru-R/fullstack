
import { useState } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-widest text-sm mb-4">
            Zara Homes and Villas
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are always happy to hear from you. Let us help
            you plan your perfect coastal getaway.
          </p>
        </div>
      </section>

      
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Whether you have questions about our villas, need
            assistance with a reservation, or want to learn more
            about our services, our team is ready to assist you.
            Get in touch with Zara Homes and Villas today.
          </p>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Contact Information
            </h2>

            <p className="text-blue-100 mb-10">
              Reach out to us for enquiries, bookings and
              any assistance you may need.
            </p>

            <div className="space-y-8">

              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Our Destinations
                  </h3>
                  <p className="text-blue-100 mt-1">
                    Malindi, Shanzu and Diani, Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Our Services
                  </h3>
                  <p className="text-blue-100 mt-1">
                    Luxury homes, villas and accommodation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Customer Support
                  </h3>
                  <p className="text-blue-100 mt-1">
                    Send us a message using the contact form.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 pt-6 border-t border-blue-400">
              <p className="font-semibold mb-2">
                Follow Your Dream Getaway
              </p>
              <p className="text-sm text-blue-100">
                Discover comfort, luxury and unforgettable
                experiences with Zara Homes and Villas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 md:p-10">

            <h2 className="text-2xl font-bold mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mb-8">
              Fill in the form below and let us know how we can help.
            </p>

            {submitted && (
              <div className="bg-green-50 text-green-700 border border-green-200 p-4 rounded-lg mb-6">
                Thank you for contacting Zara Homes and Villas!
                Your message has been received in this demo.
                Connect a backend or email service to deliver it.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              <div>
                <label className="block font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your enquiry about?"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </section>

      
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Find Your Perfect Destination
          </h2>

          <p className="text-gray-500 mb-10">
            Experience the beauty of Kenya's coastline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                name: "Malindi",
                image:
                  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
              },
              {
                name: "Shanzu",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
              },
              {
                name: "Diani",
                image:
                  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="rounded-xl overflow-hidden shadow-md group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold py-5">
                  {place.name}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      
      <section className="bg-gray-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ready for Your Next Getaway?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let Zara Homes and Villas make your next holiday
          comfortable, relaxing and memorable.
        </p>

        <Link
          to="/Booking"
          className="inline-block bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Your Stay
        </Link>
      </section>

     
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>
          © {new Date().getFullYear()} Zara Homes and Villas.
          All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Contacts;
