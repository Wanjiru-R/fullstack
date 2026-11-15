
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  House,
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react';

const links = [
  { label: 'Home', to: '/#home', section: 'home' },
  { label: 'Explore Stays', to: '/#properties', section: 'properties' },
  { label: 'Experiences', to: '/#experiences', section: 'experiences' },
  { label: 'About Us', to: '/#about', section: 'about' },
  { label: 'Guest Reviews', to: '/#reviews', section: 'reviews' },
  { label: 'FAQs', to: '/#faq', section: 'faq' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

const sectionIds = links.map((link) => link.section);

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Scroll to section after navigating to homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionId = location.hash.replace('#', '');

    if (!sectionId) {
      setActiveSection('home');
      return;
    }

    const timer = setTimeout(() => {
      const section = document.getElementById(sectionId);

      section?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // Observe visible homepage sections
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Handle navigation to homepage sections
  const handleSectionNavigation = (event, link) => {
    setOpen(false);

    if (!link.section) {
      return;
    }

    if (location.pathname === '/') {
      event.preventDefault();

      const section = document.getElementById(link.section);

      if (section) {
        navigate(link.to, {
          replace: location.hash === `#${link.section}`,
        });

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  // Determine active link
  const isLinkActive = (link) => {
    if (link.section) {
      return (
        location.pathname === '/' &&
        activeSection === link.section
      );
    }

    return false;
  };

  // Navigation styling
  const navClass = (link) =>
    `relative py-2 text-sm font-semibold transition-all duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-brand after:transition-all after:duration-300
    dark:after:bg-blue-300
    ${
      isLinkActive(link)
        ? 'text-brand after:w-full dark:text-blue-300'
        : 'text-slate-600 after:w-0 hover:text-brand hover:after:w-full dark:text-slate-300 dark:hover:text-white'
    }`;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden bg-[#102d49] text-white md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Kenya · Handpicked stays
          </span>

          <div className="flex gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2"
            >
              <Phone size={13} />
              +254 700 000 000
            </a>

            <a
              href="mailto:hello@zarahomes.co.ke"
              className="flex items-center gap-2"
            >
              <Mail size={13} />
              hello@zarahomes.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'top-0 bg-white/95 shadow-sm backdrop-blur-xl dark:bg-[#101e2c]/95'
            : 'top-0 bg-white/95 dark:bg-[#101e2c]/95 md:top-[33px] md:bg-white/10 md:shadow-none md:backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
              <House size={21} />
            </span>

            <span
              className={`font-heading text-xl font-extrabold ${
                scrolled
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-900 md:text-white dark:text-white'
              }`}
            >
              Zara Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(event) =>
                  handleSectionNavigation(event, link)
                }
                className={navClass(link)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
            >
              {theme === 'dark' ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

            <Link
              to="/login"
              className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-white"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-mid"
            >
              Create account
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-slate-700 dark:text-white"
            >
              {theme === 'dark' ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-800 dark:border-slate-700 dark:text-white"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-slate-950/45 backdrop-blur-sm transition-opacity lg:hidden ${
          open
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-x-0 top-0 z-30 h-[76vh] overflow-y-auto rounded-b-3xl bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 dark:bg-[#101e2c] lg:hidden ${
          open
            ? 'translate-y-0'
            : '-translate-y-[110%]'
        }`}
      >
        <div className="mb-5 border-b border-slate-200 pb-4 dark:border-slate-700">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-mid dark:text-blue-300">
            Explore Stayhaven
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Find your next place to unwind.
          </p>
        </div>

        {/* Mobile Links */}
        <nav className="grid grid-cols-2 gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(event) =>
                handleSectionNavigation(event, link)
              }
              className={`flex min-h-14 items-center justify-between rounded-xl border px-4 text-sm font-semibold transition ${
                isLinkActive(link)
                  ? 'border-brand bg-brand-soft text-brand dark:border-blue-300 dark:bg-slate-800 dark:text-blue-300'
                  : 'border-slate-200 text-slate-800 hover:border-brand hover:bg-brand-soft dark:border-slate-700 dark:text-white dark:hover:bg-slate-800'
              }`}
            >
              {link.label}

              <ChevronRight
                size={16}
                className="text-brand-mid"
              />
            </Link>
          ))}
        </nav>

        {/* Account Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-brand py-3 text-center text-sm font-bold text-brand dark:text-white"
          >
            Sign in
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-brand py-3 text-center text-sm font-bold text-white"
          >
            Create account
          </Link>
        </div>

        {/* Contact Details */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Phone size={13} />
            +254 700 000 000
          </span>

          <span className="flex items-center gap-1">
            <Mail size={13} />
            hello@stayhaven.co.ke
          </span>
        </div>
      </div>

      {/* Navbar Spacing */}
      <div className="h-[76px] md:hidden" />
      <div className="hidden h-[76px] md:block" />
    </>
  );
}
