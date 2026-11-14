
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties, reviews } from '../data';

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function Heading({ eyebrow, title, copy, center = false }) {
  return (
    <div
      className={`mb-10 max-w-2xl ${
        center ? 'mx-auto text-center' : ''
      }`}
    >
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-brand-mid dark:text-blue-300">
        {eyebrow}
      </p>

      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink dark:text-white sm:text-4xl">
        {title}
      </h2>

      {copy && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {copy}
        </p>
      )}
    </div>
  );
}

export function PropertyCard({ p }) {
  return (
    <motion.article
      variants={reveal}
      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-[#14283b]"
    >
      <div className="relative overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-brand">
          {p.tag}
        </span>

        <button
          aria-label={`Save ${p.name}`}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-600 hover:text-rose-500"
        >
          <Heart size={17} />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs text-slate-500">
          {p.location}
        </p>

        <h3 className="mt-1 font-heading text-xl font-bold text-ink dark:text-white">
          {p.name}
        </h3>

        <div className="mt-3 flex gap-3 text-xs text-slate-500">
          <span>{p.guests} guests</span>
          <span>{p.beds} bedrooms</span>
          <span>{p.baths} bathrooms</span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
          <p>
            <strong className="font-heading text-lg text-brand dark:text-blue-300">
              KES {p.price.toLocaleString()}
            </strong>

            <span className="text-xs text-slate-500">
              {' '}/ night
            </span>
          </p>

          <Link
            to={`/properties/${p.id}`}
            className="text-sm font-bold text-brand dark:text-blue-300"
          >
            View details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function TrustSection() {
  const items = [
    [
      ShieldCheck,
      'Stays you can trust',
      'Clear property details and a booking process designed around peace of mind.',
    ],
    [
      Sparkles,
      'Comfort worth coming back to',
      'Discover welcoming places selected for memorable getaways.',
    ],
    [
      Heart,
      'A stay that feels personal',
      'Find the right space for a quiet break, family time or a special occasion.',
    ],
  ];

  return (
    <section className="bg-white py-20 dark:bg-[#101e2c]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        {items.map(([Icon, title, copy]) => (
          <motion.div
            key={title}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand dark:bg-slate-800 dark:text-blue-300">
              <Icon size={23} />
            </span>

            <div>
              <h3 className="font-heading text-lg font-bold dark:text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {copy}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Featured() {
  return (
    <section
      id="properties"
      className="bg-[#f7f9fc] py-24 dark:bg-[#0d1926]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <Heading
            eyebrow="FIND YOUR PLACE"
            title="Stays worth discovering"
            copy="Explore featured houses and lodges, each offering its own way to unwind."
          />

          <Link
            to="/properties"
            className="mb-10 text-sm font-bold text-brand dark:text-blue-300"
          >
            View all stays
            <ArrowRight className="inline" size={17} />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {properties.slice(0, 4).map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Experiences() {
  const cards = [
    [
      'Slow mornings',
      'Quiet spaces and unhurried starts.',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Outdoor escapes',
      'Fresh air, open views and nature.',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    ],
    [
      'Time together',
      'Room for family and friends.',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    ],
  ];

  return (
    <section
      id="experiences"
      className="bg-white py-24 dark:bg-[#101e2c]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Heading
          eyebrow="MORE THAN A PLACE TO SLEEP"
          title="Make space for what matters"
          copy="Find a stay for slowing down, exploring somewhere new or spending time together."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(([title, copy, image], i) => (
            <motion.div
              key={title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative h-[350px] overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Experience 0{i + 1}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-bold">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  {copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#edf3f8] py-24 dark:bg-[#14283b]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
          alt="Welcoming holiday house"
          className="h-[430px] w-full rounded-3xl object-cover"
        />

        <div>
          <Heading
            eyebrow="A LITTLE ABOUT US"
            title="The right stay makes the journey."
            copy="Zara Homes helps people discover comfortable houses and lodges for meaningful time away. We bring property details and booking essentials together so guests can choose with confidence."
          />

          <ul className="mb-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {[
              'Discover stays for different kinds of getaways',
              'Know what to expect before you book',
              'Keep your reservations together in one place',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check
                  size={17}
                  className="text-brand dark:text-blue-300"
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
          >
            Our story
            <ArrowRight className="ml-2 inline" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#102d49] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-blue-200">
              GUEST STORIES
            </p>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
             Good stays leave lasting memories.
            </h2>

            <p className="mt-4 text-base leading-7 text-white/75">
            A few words from guests about the places and experiences they enjoyed.
            </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[.06] p-6"
            >
              <div className="mb-4 flex gap-1 text-amber-300">
                {[1, 2, 3, 4, 5].map((number) => (
                  <Star
                    key={number}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-white/85">
                “{review.text}”
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-bold">
                  {review.name}
                </p>

                <p className="text-xs text-white/55">
                  {review.place}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [active, setActive] = React.useState(0);

  const questions = [
    [
      'Do I need an account to book?',
      'You can explore properties without an account, but you need to sign in or create one to complete a booking and manage reservations.',
    ],
    [
      'How do payments work?',
      'Payments will be made through M-Pesa using the platform payment gateway and banktransfers.',
    ],
    [
      'Can I change or cancel a booking?',
      'Changes and cancellations depend on the property policy. Your booking details will show the applicable terms.',
    ],
    [
      'Where can I see my reservations?',
      'After signing in, visit your customer dashboard to view upcoming, ongoing and previous bookings.',
    ],
  ];

  return (
    <section id="faq" className="bg-[#f7f9fc] py-24 dark:bg-[#0d1926]">
      <div className="mx-auto max-w-3xl px-5">
        <Heading
          eyebrow="NEED TO KNOW"
          title="Frequently asked questions"
          center
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#14283b]">
          {questions.map(([question, answer], index) => (
            <div
              key={question}
              className="border-b border-slate-200 last:border-0 dark:border-slate-800"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold dark:text-white"
              >
                {question}

                <ChevronDown
                  size={18}
                  className={`transition ${
                    active === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {active === index && (
                <p className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-white px-5 py-20 dark:bg-[#101e2c]">
      <div className="mx-auto max-w-7xl rounded-3xl bg-brand px-7 py-14 text-center text-white sm:px-14">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-blue-200">
          YOUR NEXT GETAWAY AWAITS
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-extrabold sm:text-4xl">
          Find somewhere you'll love coming back to.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
          Browse our collection of houses and lodges and start planning your next stay.
        </p>

        <Link
          to="/properties"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand"
        >
          Explore stays
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
