
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const AboutUs = () => {
  const features = [
    {
      icon: "🏡",
      title: "Modern Accommodation",
      description:
        "Enjoy beautifully designed homes and villas with comfortable spaces and modern amenities for a relaxing stay.",
    },
    {
      icon: "🌊",
      title: "Beautiful Destinations",
      description:
        "Discover the beauty of Kenya's coast through our accommodation options in Malindi, Shanzu and Diani.",
    },
    {
      icon: "🤝",
      title: "Guest Experience",
      description:
        "We aim to make every guest feel welcome by providing a comfortable, friendly and memorable experience.",
    },
  ];

  const destinations = [
    {
      name: "Malindi",
      description: "Experience beautiful beaches and peaceful coastal living.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900",
    },
    {
      name: "Shanzu",
      description: "Enjoy a relaxing getaway along the beautiful coastline.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
    },
    {
      name: "Diani",
      description: "Explore tropical scenery and beautiful ocean views.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900",
    },
  ];

  return (
    <div className="bg-slate-50">
      <Helmet>
        <title>About Us | Zara Homes and Villas</title>
        <meta
          name="description"
          content="Discover Zara Homes and Villas, your destination for comfortable and memorable coastal accommodation in Kenya."
        />
      </Helmet>

     
      <section className="relative flex min-h-105 items-center justify-center overflow-hidden text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600"
          alt="Luxury coastal accommodation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <p className="mb-4 font-semibold uppercase tracking-[5px] text-sky-300">
            Welcome to Zara
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            About Zara Homes and Villas
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-200">
            More than just a place to stay, we aim to give you a home away
            from home along the beautiful Kenyan coast.
          </p>

          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-sky-700 px-8 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            Explore Our Stays
          </Link>
        </div>
      </section>

      
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
            Who We Are
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl">
            Creating Comfortable and Memorable Stays
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            Zara Homes and Villas is a hospitality brand focused on
            providing comfortable accommodation for guests looking to
            explore and enjoy the Kenyan coast.
          </p>

          <p className="mb-5 leading-8 text-gray-600">
            Whether you are planning a holiday, a family vacation or a
            peaceful escape, we want your stay to be relaxing, enjoyable
            and memorable.
          </p>

          <p className="leading-8 text-gray-600">
            Our accommodation destinations include Malindi, Shanzu and
            Diani, giving guests different coastal experiences to enjoy.
          </p>

          <Link
            to="/allrooms"
            className="mt-7 inline-block font-bold text-sky-700 hover:text-sky-900"
          >
            Discover Our Accommodation →
          </Link>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000"
            alt="Beautiful modern holiday interior"
            className="h-105 w-full rounded-3xl object-cover shadow-xl"
          />

          <div className="absolute -bottom-6 -left-3 rounded-2xl bg-sky-800 p-6 text-white shadow-lg md:-left-6">
            <p className="text-2xl font-bold">Zara Homes</p>
            <p className="text-sm text-sky-100">Your Coastal Getaway</p>
          </div>
        </div>
      </section>

     
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <span className="text-4xl">🎯</span>
            <h2 className="mb-4 mt-5 text-2xl font-bold text-sky-300">
              Our Mission
            </h2>
            <p className="leading-8 text-slate-300">
              To provide comfortable and welcoming accommodation while
              creating enjoyable experiences for everyone who chooses to
              stay with us.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <span className="text-4xl">🌟</span>
            <h2 className="mb-4 mt-5 text-2xl font-bold text-sky-300">
              Our Vision
            </h2>
            <p className="leading-8 text-slate-300">
              To become a trusted hospitality brand known for comfortable
              stays, memorable guest experiences and quality service.
            </p>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
            The Zara Experience
          </p>

          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We want every stay to offer comfort, convenience and a
            memorable experience.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{feature.icon}</div>

              <h3 className="mb-4 text-xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-700">
              Explore Kenya
            </p>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              Our Coastal Destinations
            </h2>

            <p className="mt-4 text-gray-500">
              Discover beautiful places for your next getaway.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-slate-800">
                    {destination.name}
                  </h3>

                  <p className="leading-7 text-gray-500">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-sky-800 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Your Next Getaway Starts Here
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-sky-100">
          Take a break, enjoy the ocean breeze and experience the comfort
          of Zara Homes and Villas.
        </p>

        <Link
          to="/booking"
          className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-bold text-sky-800 transition hover:bg-sky-100"
        >
          Book Your Stay
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
