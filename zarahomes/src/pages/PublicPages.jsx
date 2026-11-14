
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  MapPin,
  Users,
  BedDouble,
  Bath,
  Check,
  ShieldCheck,
  Phone,
  Mail,
  Send,
} from "lucide-react";

import { toast } from "sonner";
import { properties } from "../data";

import {
  Heading,
  PropertyCard,
} from "../components/Sections";


export function PropertiesPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");

  let list = properties.filter((p) =>
    (p.name + " " + p.location)
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-[#f7f9fc] px-5 py-16 dark:bg-[#0d1926]">
      <div className="mx-auto max-w-7xl">

        <Heading
          eyebrow="EXPLORE STAYHAVEN"
          title="Find your kind of getaway"
          copy="Browse our collection of houses and lodges, and find a place that feels right for your next stay."
        />

        <div className="mb-8 flex flex-col gap-3 rounded-2xl bg-white p-4 dark:bg-[#14283b] sm:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by property or location..."
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm dark:border-slate-700"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm dark:border-slate-700"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>

        <p className="mb-5 text-sm text-slate-500">
          {list.length} properties found
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PropertyCard
              key={p.id}
              p={p}
            />
          ))}
        </div>

        {!list.length && (
          <p className="py-20 text-center text-slate-500">
            No stays match that search.
          </p>
        )}

      </div>
    </div>
  );
}


export function PropertyDetails() {
  const { id } = useParams();

  const p = properties.find(
    (x) => x.id === Number(id)
  );

  if (!p) {
    return (
      <div className="p-24 text-center">
        Property not found{" "}
        <Link to="/properties">
          Browse stays
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f9fc] px-5 py-12 dark:bg-[#0d1926]">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/properties"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-blue-300"
        >
          <ArrowLeft size={16} />
          All stays
        </Link>

        <img
          src={p.image}
          alt={p.name}
          className="h-[300px] w-full rounded-3xl object-cover sm:h-[480px]"
        />

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_340px]">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-mid">
              {p.tag}
            </p>

            <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink dark:text-white">
              {p.name}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              {p.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex gap-2">
                <Users size={17} />
                {p.guests} guests
              </span>

              <span className="flex gap-2">
                <BedDouble size={17} />
                {p.beds} bedrooms
              </span>

              <span className="flex gap-2">
                <Bath size={17} />
                {p.baths} bathrooms
              </span>
            </div>

            <h2 className="mt-9 text-xl font-bold dark:text-white">
              About this stay
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              {p.description}
            </p>

            <h2 className="mt-8 text-xl font-bold dark:text-white">
              What this place offers
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.amenities.map((a) => (
                <p
                  key={a}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <Check
                    size={17}
                    className="text-brand"
                  />
                  {a}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#14283b]">
            <p className="text-sm text-slate-500">
              Starting from
            </p>

            <p className="mt-1 font-heading text-2xl font-extrabold text-brand dark:text-blue-300">
              KES {p.price.toLocaleString()}
              <span className="text-sm font-normal text-slate-500">
                {" "}/ night
              </span>
            </p>

            <div className="mt-5 rounded-xl bg-brand-soft p-4 text-sm text-brand dark:bg-slate-800 dark:text-blue-200">
              <ShieldCheck
                size={18}
                className="mb-2"
              />
              Sign in or create an account to continue with your booking.
            </div>

            <Link
              to="/login"
              className="mt-5 block rounded-full bg-brand py-3 text-center text-sm font-bold text-white"
            >
              Book this stay
            </Link>
          </aside>

        </div>
      </div>
    </div>
  );
}


export function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Find us",
      content: "Kenya",
    },
    {
      icon: Phone,
      title: "Call us",
      content: "+254 700 000 000",
    },
    {
      icon: Mail,
      title: "Email us",
      content: "hello@zarahomes.co.ke",
    },
  ];

  return (
    <div className="bg-[#f7f9fc] px-5 py-20 dark:bg-[#0d1926]">
      <div className="mx-auto max-w-7xl">

        <Heading
          eyebrow="SAY HELLO"
          title="We'd love to hear from you"
          copy="Questions about a property or your next getaway? Send us a message."
        />

        <div className="grid gap-8 md:grid-cols-2">

          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 dark:bg-[#14283b]"
              >
                <Icon className="text-brand" />

                <h3 className="mt-3 font-bold dark:text-white">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {content}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message saved in this demo.");
            }}
            className="space-y-4 rounded-2xl bg-white p-6 shadow-sm dark:bg-[#14283b]"
          >
            <h2 className="text-xl font-bold dark:text-white">
              Send a message
            </h2>

            <input
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm dark:border-slate-700"
            />

            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm dark:border-slate-700"
            />

            <textarea
              required
              rows="5"
              placeholder="How can we help?"
              className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm dark:border-slate-700"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white"
            >
              <Send size={16} />
              Send message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}


export function BasicPage({ title, eyebrow, copy }) {
  return (
    <div className="min-h-[60vh] bg-[#f7f9fc] px-5 py-24 dark:bg-[#0d1926]">
      <div className="mx-auto max-w-7xl">
        <Heading
          eyebrow={eyebrow}
          title={title}
          copy={copy}
        />
      </div>
    </div>
  );
}


import {
  ArrowRight,
} from 'lucide-react';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#edf3f8] py-24 dark:bg-[#14283b]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-brand-mid dark:text-blue-300">
            GET IN TOUCH
          </p>

          <h2 className="font-heading text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            We'd love to hear from you.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
            Have a question about a property, booking or your next getaway?
            Reach out to our team and we'll be happy to help.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-4"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-brand shadow-sm dark:bg-slate-800 dark:text-blue-300">
                <Phone size={20} />
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Call us
                </p>

                <p className="mt-1 font-semibold text-ink dark:text-white">
                  +254 700 000 000
                </p>
              </div>
            </a>

            <a
              href="mailto:hello@zarahomes.co.ke"
              className="flex items-center gap-4"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-brand shadow-sm dark:bg-slate-800 dark:text-blue-300">
                <Mail size={20} />
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Email us
                </p>

                <p className="mt-1 font-semibold text-ink dark:text-white">
                  hello@zarahomes.co.ke
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-brand shadow-sm dark:bg-slate-800 dark:text-blue-300">
                <MapPin size={20} />
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-semibold text-ink dark:text-white">
                  Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Message */}
        <div className="rounded-3xl bg-white p-7 shadow-sm dark:bg-[#101e2c] sm:p-9">
          <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">
            Send us a message
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Tell us how we can help.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold text-ink dark:text-white"
              >
                Your name
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand dark:border-slate-700 dark:bg-[#14283b] dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold text-ink dark:text-white"
              >
                Email address
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand dark:border-slate-700 dark:bg-[#14283b] dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-ink dark:text-white"
              >
                Your message
              </label>

              <textarea
                id="contact-message"
                rows="4"
                placeholder="How can we help?"
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand dark:border-slate-700 dark:bg-[#14283b] dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-mid"
            >
              Send message
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



