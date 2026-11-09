
import { Link } from "react-router-dom";

const Dashboard = () => {
  const destinations = [
    {
      name: "Malindi",
      description: "Relax in beautiful coastal villas.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    },
    {
      name: "Shanzu",
      description: "Enjoy peaceful beachfront living.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
    {
      name: "Diani",
      description: "Experience luxury and tropical beauty.",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
    },
  ];

  const quickLinks = [
    {
      title: "Explore Villas",
      description: "Discover our beautiful accommodation options.",
      link: "/AllRooms",
      icon: "🏡",
    },
    {
      title: "Make a Booking",
      description: "Find your perfect holiday destination.",
      link: "/Booking",
      icon: "📅",
    },
    {
      title: "Contact Support",
      description: "Our team is ready to assist you.",
      link: "/Contacts",
      icon: "💬",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">

     
      <aside className="w-full md:w-64 bg-white shadow-md p-6 md:min-h-screen">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Zara Homes
        </Link>

        <p className="text-sm text-gray-400 mt-1">
          Homes and Villas
        </p>

        <nav className="mt-10 space-y-3">
          <Link
            to="/Dashboard"
            className="flex items-center gap-3 bg-blue-600 text-white p-3 rounded-lg font-medium"
          >
            <span>▦</span> Dashboard
          </Link>

          <Link
            to="/Booking"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>📅</span> Book a Stay
          </Link>

          <Link
            to="/AllRooms"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>🏡</span> Explore Villas
          </Link>

          <Link
            to="/Contacts"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>💬</span> Contact Us
          </Link>

          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>⌂</span> Back to Home
          </Link>
        </nav>

        <div className="mt-12 bg-blue-50 p-4 rounded-xl">
          <h3 className="font-semibold text-blue-700">
            Need Assistance?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Have questions about your stay? We are happy to help.
          </p>
          <Link
            to="/Contacts"
            className="text-blue-600 font-semibold text-sm mt-3 inline-block hover:underline"
          >
            Get Help →
          </Link>
        </div>
      </aside>

      
      <main className="flex-1 p-5 md:p-10">

        
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <p className="text-gray-500 text-sm">
              Guest Dashboard
            </p>
            <h1 className="text-3xl font-bold mt-1">
              Welcome to Zara Homes!
            </h1>
            <p className="text-gray-500 mt-2">
              Your comfort and relaxation are our priority.
            </p>
          </div>

          <Link
            to="/Booking"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center"
          >
            + Book Your Stay
          </Link>
        </header>

        
        <section
          className="relative rounded-2xl overflow-hidden min-h-64 flex items-center bg-cover bg-center mb-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-white p-8 md:p-12 max-w-2xl">
            <p className="uppercase tracking-widest text-sm mb-3">
              Welcome to luxury living
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Perfect Getaway Starts Here
            </h2>

            <p className="text-gray-100 mb-6">
              Discover beautiful homes and villas in Malindi,
              Shanzu and Diani. Enjoy comfort, style and
              unforgettable coastal experiences.
            </p>

            <Link
              to="/AllRooms"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Explore Our Villas
            </Link>
          </div>
        </section>

        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">My Bookings</p>
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-3xl font-bold mt-4">0</h3>
            <p className="text-sm text-gray-400 mt-2">
              No bookings displayed yet
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Destinations</p>
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-3xl font-bold mt-4">3</h3>
            <p className="text-sm text-gray-400 mt-2">
              Malindi, Shanzu and Diani
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Guest Support</p>
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold mt-4">Available</h3>
            <p className="text-sm text-gray-400 mt-2">
              Contact us whenever you need assistance
            </p>
          </div>
        </section>

       
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-5">
            <div>
              <h2 className="text-xl font-bold">
                My Reservations
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Keep track of your upcoming stays.
              </p>
            </div>

            <Link
              to="/Booking"
              className="text-blue-600 font-semibold hover:underline"
            >
              Make a Booking →
            </Link>
          </div>

          <div className="text-center py-10 bg-gray-50 rounded-xl">
            <div className="text-5xl mb-4">🏨</div>
            <h3 className="text-lg font-semibold">
              No Reservations Yet
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-5">
              Your confirmed bookings will appear here once booking
              data is connected.
            </p>
            <Link
              to="/Booking"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Book Your First Stay
            </Link>
          </div>
        </section>

        
        <section className="mb-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Explore Our Destinations
            </h2>
            <p className="text-gray-500 mt-2">
              Choose where your next adventure begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 mb-4">
                    {destination.description}
                  </p>

                  <Link
                    to="/AllRooms"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Explore Villas →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg hover:border-blue-200 transition"
              >
                <span className="text-3xl">{item.icon}</span>

                <h3 className="font-bold text-lg mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.description}
                </p>

                <p className="text-blue-600 font-semibold mt-4">
                  Get Started →
                </p>
              </Link>
            ))}
          </div>
        </section>

        
        <footer className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zara Homes and Villas.
          All rights reserved.
        </footer>

      </main>
    </div>
  );
};

export default Dashboard;
