
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Pause,
  Play,
  Search,
  Users,
} from 'lucide-react';
import { toast } from 'sonner';
import { slides } from '../data';

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const [destination, setDestination] = useState('');
  const [inDate, setInDate] = useState('');
  const [outDate, setOutDate] = useState('');
  const [guests, setGuests] = useState('2');

  const slide = slides[active];
  const today = new Date().toLocaleDateString('en-CA');

  const next = () => {
    setActive((index) => (index + 1) % slides.length);
  };

  const prev = () => {
    setActive((index) =>
      (index - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [paused, active]);

  const submit = (event) => {
    event.preventDefault();

    if (!destination.trim()) {
      return toast.error('Enter a destination to explore.');
    }

    if (inDate && outDate && outDate <= inDate) {
      return toast.error(
        'Check-out must be after check-in.'
      );
    }

    toast.success('Search preferences saved', {
      description:
        'Property search will connect to the booking service.',
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[790px] h-[calc(100svh-76px)] max-h-[980px] items-center overflow-hidden bg-[#102d49] md:h-[calc(100svh-33px)]"
    >
      {/* Animated Background Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slide.image}
            alt="Holiday accommodation"
            initial={{ scale: 1.07 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 7,
              ease: 'linear',
            }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071827]/85 via-[#071827]/55 to-[#071827]/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/65 via-transparent to-[#071827]/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-20 md:px-8">
        <motion.div
          key={slide.title}
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-blue-200">
            <span className="h-px w-9 bg-blue-200" />
            {slide.eyebrow}
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {slide.copy}
          </p>

          {/* Search Form */}
          <form
            onSubmit={submit}
            className="mt-9 grid max-w-5xl grid-cols-1 gap-2 rounded-2xl bg-white p-3 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_.8fr_auto] lg:items-center lg:gap-0 dark:bg-[#14283b]"
          >
            {/* Destination */}
            <label className="flex items-center gap-3 rounded-xl px-3 py-2.5 lg:border-r lg:border-slate-200 dark:lg:border-slate-700">
              <MapPin
                size={20}
                className="shrink-0 text-brand"
              />

              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Destination
                </span>

                <input
                  value={destination}
                  onChange={(event) =>
                    setDestination(event.target.value)
                  }
                  placeholder="Where would you like to go?"
                  className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </span>
            </label>

            {/* Check-in */}
            <label className="flex items-center gap-3 rounded-xl px-3 py-2.5 lg:border-r lg:border-slate-200 dark:lg:border-slate-700">
              <CalendarDays
                size={19}
                className="shrink-0 text-brand"
              />

              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Check-in
                </span>

                <input
                  type="date"
                  min={today}
                  value={inDate}
                  onChange={(event) =>
                    setInDate(event.target.value)
                  }
                  className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none dark:text-white"
                />
              </span>
            </label>

            {/* Check-out */}
            <label className="flex items-center gap-3 rounded-xl px-3 py-2.5 lg:border-r lg:border-slate-200 dark:lg:border-slate-700">
              <CalendarDays
                size={19}
                className="shrink-0 text-brand"
              />

              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Check-out
                </span>

                <input
                  type="date"
                  min={inDate || today}
                  value={outDate}
                  onChange={(event) =>
                    setOutDate(event.target.value)
                  }
                  className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none dark:text-white"
                />
              </span>
            </label>

            {/* Guests */}
            <label className="flex items-center gap-3 rounded-xl px-3 py-2.5">
              <Users
                size={19}
                className="shrink-0 text-brand"
              />

              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Guests
                </span>

                <select
                  value={guests}
                  onChange={(event) =>
                    setGuests(event.target.value)
                  }
                  className="w-full bg-transparent text-sm text-slate-800 outline-none dark:text-white"
                >
                  {Array.from(
                    { length: 10 },
                    (_, index) => index + 1
                  ).map((number) => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}{' '}
                      {number === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-mid lg:rounded-full"
            >
              <Search size={17} />
              Search stays
            </button>
          </form>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-white/80">
            <span>✓ Carefully selected stays</span>
            <span>✓ Secure booking process</span>
            <span>✓ M-Pesa payments</span>
            <span>✓ Bank transfers</span>
            <span>✓ 24/7 customer support</span>
          </div>
        </motion.div>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-7 right-5 z-20 flex items-center gap-2 sm:right-8">

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="rounded-full border border-white/50 p-2.5 text-white backdrop-blur hover:bg-white hover:text-brand"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="rounded-full border border-white/50 p-2.5 text-white backdrop-blur hover:bg-white hover:text-brand"
        >
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? 'Play slideshow' : 'Pause slideshow'
          }
          className="hidden rounded-full border border-white/50 p-2.5 text-white backdrop-blur hover:bg-white hover:text-brand sm:block"
        >
          {paused ? (
            <Play size={17} />
          ) : (
            <Pause size={17} />
          )}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-5 z-20 flex gap-2 sm:left-8">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${
              active === index
                ? 'w-9 bg-white'
                : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
