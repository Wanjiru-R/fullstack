
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";

const reviews = [
  { id: 1, rating: 5 },
  { id: 2, rating: 4 },
  { id: 3, rating: 5 },
  { id: 4, rating: 3 },
  { id: 5, rating: 5 },
];

const rooms = [
  {
    name: "Luxury Suite",
    location: "Malindi",
    price: "KSh 6,000",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900",
  },
  {
    name: "Treetop Suite",
    location: "Shanzu",
    price: "KSh 7,000",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
  },
  {
    name: "Modern Holiday Apartment",
    location: "Diani",
    price: "KSh 3,500",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
  },
];

const destinations = [
  {
    name: "Malindi",
    description: "Discover peaceful coastal living and beautiful beaches.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900",
  },
  {
    name: "Shanzu",
    description: "Enjoy a relaxing escape along the Kenyan coastline.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  },
  {
    name: "Diani",
    description: "Experience tropical scenery and beautiful ocean views.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900",
  },
];

const HomePage = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Helmet>
        <title>Zara Homes and Villas | Coastal Luxury Stays</title>
        <meta
          name="description"
          content="Discover comfortable holiday homes and villas in Malindi, Shanzu and Diani with Zara Homes and Villas."
        />
      </Helmet>

     
      <section className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4500}
          transitionTime={800}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          swipeable
          emulateTouch
        >
          {[
            {
              title: "Welcome to Zara Homes and Villas",
              description:
                "Discover comfort, style and relaxation along the beautiful Kenyan coast.",
              image:
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600",
              button: "Book Your Stay",
              link: "/booking",
            },
            {
              title: "Your Escape by the Ocean",
              description:
                "Enjoy peaceful surroundings, beautiful views and unforgettable coastal moments.",
              image:
                "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600",
              button: "Explore Our Rooms",
              link: "/allrooms",
            },
            {
              title: "Modern Living, Timeless Comfort",
              description:
                "Find the perfect accommodation for your holiday, family vacation or getaway.",
              image:
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
              button: "Discover Zara",
              link: "/aboutus",
            },
            {
              title: "Make Every Stay Memorable",
              description:
                "Experience the beauty of Malindi, Shanzu and Diani with Zara Homes and Villas.",
              image:
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600",
              button: "Contact Us",
              link: "/contact",
            },
          ].map((slide, index) => (
            <div key={index} className="relative h-137.5 md:h-170">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/55 px-6">
                <div className="max-w-4xl text-center text-white">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[5px] text-sky-300 md:text-base">
                    Zara Homes and Villas
                  </p>

                  <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mx-auto mb-8 mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-xl">
                    {slide.description}
                  </p>

                  <Link
                    to={slide.link}
                    className="inline-block rounded-full bg-sky-700 px-9 py-4 font-semibold text-white transition hover:bg-sky-800"
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <Ratings reviews={reviews} />
        </div>
      </section>

     
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
              Welcome to Zara
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              A Home Away From Home
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              At Zara Homes and Villas, we believe that a great holiday
              begins with a comfortable place to stay. We aim to provide
              welcoming spaces where guests can relax, unwind and enjoy
              their time along the Kenyan coast.
            </p>

            <p className="mb-7 leading-8 text-gray-600">
              Whether you are travelling alone, with family or with
              friends, discover accommodation options in Malindi, Shanzu
              and Diani.
            </p>

            <Link
              to="/aboutus"
              className="inline-block rounded-full bg-sky-800 px-8 py-3 font-semibold text-white transition hover:bg-sky-900"
            >
              Learn More About Us
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100"
              alt="Modern and comfortable living space"
              className="h-105 w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

     
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-300">
              The Zara Experience
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Comfort in Every Detail
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🏡",
                title: "Luxury Accommodation",
                description:
                  "Enjoy thoughtfully selected spaces designed for comfort and relaxation.",
              },
              {
                icon: "🌴",
                title: "Beautiful Surroundings",
                description:
                  "Experience the charm of Kenya's coast and its beautiful destinations.",
              },
              {
                icon: "✨",
                title: "Memorable Experiences",
                description:
                  "Make time for yourself, your family and the moments that matter.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:-translate-y-2 hover:border-sky-400"
              >
                <div className="mb-5 text-5xl">{item.icon}</div>

                <h3 className="mb-4 text-xl font-bold text-sky-300">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
              Find Your Perfect Stay
            </p>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              Featured Accommodation
            </h2>

            <p className="mt-4 text-gray-500">
              Explore some of the accommodation options available.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold text-sky-700">
                    {room.location}
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-slate-800">
                    {room.name}
                  </h3>

                  <div className="flex items-center justify-between border-t pt-4">
                    <p className="font-bold text-slate-800">
                      {room.price}
                      <span className="text-sm font-normal text-gray-500">
                        {" "} / night
                      </span>
                    </p>

                    <Link
                      to="/booking"
                      className="font-semibold text-sky-700 hover:text-sky-900"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/allrooms"
              className="inline-block rounded-full border-2 border-sky-800 px-8 py-3 font-semibold text-sky-800 transition hover:bg-sky-800 hover:text-white"
            >
              View All Accommodation
            </Link>
          </div>
        </div>
      </section>

     
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
              Explore the Coast
            </p>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              Discover Our Destinations
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative h-87.5 overflow-hidden rounded-2xl"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 p-7 text-white">
                  <h3 className="mb-2 text-3xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="leading-7 text-gray-200">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
              Enjoy Your Stay
            </p>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              Everything You Need
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: "🏊", name: "Swimming Pool" },
              { icon: "📶", name: "Wi-Fi Access" },
              { icon: "🌳", name: "Relaxing Gardens" },
              { icon: "🛏️", name: "Comfortable Rooms" },
            ].map((amenity, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{amenity.icon}</div>

                <h3 className="font-bold text-slate-800">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-300">
              Guest Experiences
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Moments Worth Remembering
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                text: "The most quiet and peaceful place I've experienced on the Kenyan coast.",
                name: "Harry John",
              },
              {
                text: "Fast Wi-Fi, great coastal food and a relaxing atmosphere.",
                name: "Nick Kiplangat",
              },
              {
                text: "The accommodation made our holiday comfortable and memorable.",
                name: "Alice Wanjiru",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-800 p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="mb-5 text-2xl text-yellow-400">
                  ★★★★★
                </div>

                <p className="mb-6 leading-8 text-slate-200">
                  "{testimonial.text}"
                </p>

                <h3 className="font-bold text-sky-300">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-sky-800 px-6 py-20 text-center text-white">
        <p className="mb-4 font-semibold uppercase tracking-[4px] text-sky-200">
          Your Coastal Escape Awaits
        </p>

        <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
          Ready to Experience Zara Homes and Villas?
        </h2>

        <p className="mx-auto mb-8 mt-6 max-w-2xl leading-8 text-sky-100">
          Take a break from your everyday routine. Discover beautiful
          destinations, relaxing spaces and a place to call home.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/booking"
            className="rounded-full bg-white px-9 py-4 font-bold text-sky-800 transition hover:bg-sky-100"
          >
            Book Your Stay
          </Link>

          <Link
            to="/contact"
            className="rounded-full border-2 border-white px-9 py-4 font-bold text-white transition hover:bg-white hover:text-sky-800"
          >
            Contact Us
          </Link>
        </div>
      </section>

      
      <FAQ />

     
      <Footer />
    </div>
  );
};

export default HomePage;
