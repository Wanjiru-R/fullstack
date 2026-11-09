
import { useState } from "react";
import Mpesa from "../components/Mpesa";
import Footer from "../components/Footer";

const rooms = [
  {
    id: 1,
    name: "Treetop Suite",
    location: "Malindi",
    price: 7000,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    description: "A peaceful and elegant suite for a relaxing getaway.",
  },
  {
    id: 2,
    name: "Luxury Suite",
    location: "Shanzu",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    description: "Enjoy comfort and luxury near the beautiful coastline.",
  },
  {
    id: 3,
    name: "Airbnb Apartment",
    location: "Diani",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    description: "A modern and affordable space for your holiday.",
  },
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut + "T00:00:00") -
              new Date(checkIn + "T00:00:00")) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const totalPrice = nights * selectedRoom.price;

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Please select your check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    if (!selectedRoom) {
      setError("Please select a room.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-slate-50 pb-16">
        
        <div className="relative flex min-h-80 items-center justify-center bg-slate-900 px-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600"
            alt="Beautiful holiday resort"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="relative z-10 max-w-3xl text-white">
            <p className="mb-3 font-semibold uppercase tracking-[4px] text-sky-300">
              Zara Homes and Villas
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Book Your Stay
            </h1>
            <p className="text-lg text-gray-200">
              Your perfect coastal getaway is just a booking away.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pt-14">
         
          <div className="mb-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-slate-800">
                Choose Your Accommodation
              </h2>
              <p className="mt-3 text-gray-500">
                Select the space that best suits your stay.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => {
                    setSelectedRoom(room);
                    setSubmitted(false);
                  }}
                  className={`cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    selectedRoom.id === room.id
                      ? "ring-2 ring-sky-600"
                      : ""
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-sky-700">
                        {room.location}
                      </span>

                      {selectedRoom.id === room.id && (
                        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                          Selected
                        </span>
                      )}
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-slate-800">
                      {room.name}
                    </h3>

                    <p className="mb-4 text-sm text-gray-500">
                      {room.description}
                    </p>

                    <div className="flex items-center justify-between border-t pt-4">
                      <p className="font-bold text-slate-800">
                        KSh {room.price.toLocaleString()}
                        <span className="text-sm font-normal text-gray-500">
                          {" "} / night
                        </span>
                      </p>

                      <span className="text-sm font-semibold text-sky-700">
                        {selectedRoom.id === room.id
                          ? "Selected"
                          : "Select room"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div className="grid items-start gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-md md:p-9 lg:col-span-2">
              <h2 className="mb-2 text-2xl font-bold text-slate-800">
                Your Booking Details
              </h2>

              <p className="mb-8 text-gray-500">
                Fill in your details to continue with your reservation.
              </p>

              {error && (
                <p className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </p>
              )}

              {submitted && (
                <div className="mb-5 rounded-xl bg-green-50 p-4 text-sm text-green-700">
                  Your booking details have been captured in this page.
                  This is a frontend demo; no reservation has been sent to a server.
                </div>
              )}

              <form onSubmit={handleSubmit}>
               
                <div className="mb-7 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        setSubmitted(false);
                      }}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                        setSubmitted(false);
                      }}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

               
                <div className="mb-7">
                  <label className="mb-2 block font-semibold text-slate-700">
                    Number of Guests
                  </label>

                  <select
                    value={guests}
                    onChange={(e) => {
                      setGuests(e.target.value);
                      setSubmitted(false);
                    }}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-5 border-t pt-7">
                  <h3 className="mb-5 text-xl font-bold text-slate-800">
                    Guest Information
                  </h3>

                  <div className="mb-5">
                    <label className="mb-2 block font-semibold text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 block font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 block font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07XXXXXXXX"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-7">
                    <label className="mb-2 block font-semibold text-slate-700">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Any additional information..."
                      className={inputClass}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-800 px-8 py-4 font-semibold text-white transition hover:bg-sky-900"
                >
                  Check Booking Details
                </button>
              </form>
            </div>

           
            <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">
                Booking Summary
              </h2>

              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="mb-5 h-40 w-full rounded-xl object-cover"
              />

              <h3 className="mb-2 text-xl font-bold">
                {selectedRoom.name}
              </h3>

              <p className="mb-6 text-slate-300">
                {selectedRoom.location}
              </p>

              <div className="space-y-4 border-t border-slate-700 pt-5 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-slate-300">Check-in</span>
                  <span>{checkIn || "Not selected"}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-slate-300">Check-out</span>
                  <span>{checkOut || "Not selected"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-300">Guests</span>
                  <span>{guests}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-300">Nights</span>
                  <span>{nights}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-300">Price per night</span>
                  <span>
                    KSh {selectedRoom.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-700 pt-5">
                <p className="mb-2 text-slate-300">Estimated Total</p>
                <p className="text-3xl font-bold text-sky-300">
                  KSh {totalPrice.toLocaleString()}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Final price and availability must be confirmed by the property.
                </p>
              </div>
            </div>
          </div>

          
          <div className="mt-14 rounded-2xl bg-white p-7 shadow-md">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-slate-800">
                Payment Options
              </h2>
              <p className="mt-2 text-gray-500">
                M-Pesa payment information.
              </p>
            </div>

            <Mpesa />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Booking;
