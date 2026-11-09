
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const rooms = [
  {
    id: 1,
    name: "Luxury Ocean Suite",
    location: "Malindi",
    description:
      "Enjoy a peaceful stay in our elegant suite with beautiful interiors and a relaxing atmosphere.",
    price: "Contact us",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000",
    features: ["King Size Bed", "Free WiFi", "Ocean Views"],
  },
  {
    id: 2,
    name: "Premium Beach Villa",
    location: "Shanzu",
    description:
      "Experience luxury living in a spacious villa designed for comfort, privacy and relaxation.",
    price: "Contact us",
    image:
      "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=1000",
    features: ["Swimming Pool", "Private Space", "Free WiFi"],
  },
  {
    id: 3,
    name: "Modern Holiday Suite",
    location: "Diani",
    description:
      "A beautiful modern living space perfect for couples and guests looking for a memorable holiday.",
    price: "Contact us",
    image:
      "https://images.unsplash.com/photo-1781572725438-ac8c41476752?w=1000",
    features: ["Modern Interior", "Comfortable Bed", "Garden Views"],
  },
  {
    id: 4,
    name: "Exclusive Garden Villa",
    location: "Malindi",
    description:
      "Relax in a beautiful villa surrounded by peaceful surroundings and modern facilities.",
    price: "Contact us",
    image:
      "https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=1000",
    features: ["Garden View", "Spacious Rooms", "Free WiFi"],
  },
];

const AllRooms = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      
      <section
        className="relative h-112.5 bg-cover bg-center flex items-center justify-center"
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
            Our Rooms & Villas
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover beautiful accommodation designed to offer
            comfort, luxury and unforgettable coastal experiences.
          </p>

          <Link
            to="/Booking"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

    
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Find Your Perfect Stay
        </h2>

        <p className="text-gray-600 leading-relaxed">
           At Zara Homes and Villas, we believe every guest deserves
          a comfortable and memorable experience. Explore our
          accommodation options in Malindi, Shanzu and Diani.
        </p>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">
              Explore Our Accommodation
            </h2>
            <p className="text-gray-500 mt-2">
              Choose a space that feels like home.
            </p>
          </div>

          <p className="text-blue-600 font-semibold">
            {rooms.length} Featured Stays
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >

             
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {room.location}
                </span>
              </div>

             
              <div className="p-6">

                <h3 className="text-xl font-bold mb-3">
                  {room.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {room.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-blue-50 text-blue-700 text-xs px-3 py-2 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t pt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      Booking enquiries
                    </p>
                    <p className="text-blue-600 font-bold">
                      {room.price}
                    </p>
                  </div>

                  <Link
                    to="/Booking"
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Book Now
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

     
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Why Stay With Zara Homes?
          </h2>

          <p className="text-gray-500 mb-12">
            We make every stay special with comfort and quality service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-6">
              <span className="text-4xl">🏖️</span>
              <h3 className="text-xl font-bold mt-4 mb-3">
                Beautiful Locations
              </h3>
              <p className="text-gray-500">
                Discover the beauty of Malindi, Shanzu and Diani.
              </p>
            </div>

            <div className="p-6">
              <span className="text-4xl">🏡</span>
              <h3 className="text-xl font-bold mt-4 mb-3">
                Comfort & Luxury
              </h3>
              <p className="text-gray-500">
                Enjoy modern living spaces designed for relaxation.
              </p>
            </div>

            <div className="p-6">
              <span className="text-4xl">💙</span>
              <h3 className="text-xl font-bold mt-4 mb-3">
                Guest Experience
              </h3>
              <p className="text-gray-500">
                We are dedicated to making your stay memorable.
              </p>
            </div>

          </div>
        </div>
      </section>

     
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Your Dream Stay Awaits
        </h2>

        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Explore our beautiful homes and villas and get ready
          for a memorable coastal experience.
        </p>

        <Link
          to="/Booking"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Make a Reservation
        </Link>
      </section>

      <Footer />

    </div>
  );
};

export default AllRooms;
