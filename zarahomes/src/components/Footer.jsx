import { Link } from "react-router-dom";
import { House, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const exploreLinks = [
  { label: "Explore stays", to: "/properties" },
  { label: "Experiences", to: "/experiences" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const accountLinks = [
  { label: "Sign in", to: "/login" },
  { label: "Create account", to: "/register" },
  { label: "My dashboard", to: "/dashboard" },
  { label: "Reset password", to: "/forgot-password" },
];

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-200">{title}</h3>
      <div className="space-y-3 text-sm text-white/65">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="block transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0b2238] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-extrabold">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10"><House size={21} /></span>
            Zara Homes
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Thoughtfully discovered houses and lodges for weekends, holidays and the moments in between.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:-translate-y-1 hover:bg-white/20"><FaInstagram size={17} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 transition hover:-translate-y-1 hover:bg-white/20"><FaFacebookF size={17} /></a>
          </div>
        </div>

        <FooterLinks title="Explore" links={exploreLinks} />
        <FooterLinks title="Your account" links={accountLinks} />

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-200">Get in touch</h3>
          <div className="space-y-4 text-sm text-white/65">
            <p className="flex items-center gap-3"><MapPin size={17} />Kenya</p>
            <a href="tel:+254700000000" className="flex items-center gap-3 transition-colors hover:text-white"><Phone size={17} />+254 700 000 000</a>
            <a href="mailto:hello@zarahomes.co.ke" className="flex items-center gap-3 transition-colors hover:text-white"><Mail size={17} />hello@zarahomes.co.ke</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:justify-between md:px-8">
          <span>© {new Date().getFullYear()} Zara Homes. All rights reserved.</span>
          <span>Made for better getaways in Kenya.</span>
        </div>
      </div>
    </footer>
  );
}
