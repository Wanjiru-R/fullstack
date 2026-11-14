
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Eye,
  EyeOff,
  House,
  ArrowLeft,
  ShieldCheck,
  CalendarDays,
  Clock3,
  CheckCircle2,
  MapPin,
  LogOut,
  UserRound,
  Heart,
  History,
  Compass,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  X,
  Settings as SettingsIcon,
} from "lucide-react";

import { toast } from "sonner";
import { properties } from "../data";


function AuthShell({ title, copy, children }) {
  return (
    <div className="grid min-h-screen bg-[#f7f9fc] dark:bg-[#0d1926] lg:grid-cols-2">

      <div className="relative hidden min-h-screen overflow-hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
          alt="Holiday home"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/85 to-[#071827]/15" />

        <Link
          to="/"
          className="absolute left-10 top-10 flex items-center gap-2 text-xl font-extrabold text-white"
        >
          <House />
            Zara Homes
        </Link>

        <div className="absolute bottom-14 left-10 right-10 text-white">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-200">
            YOUR NEXT GETAWAY
          </p>

          <h2 className="mt-4 max-w-lg font-heading text-4xl font-extrabold">
            A little space to pause, explore and feel at home.
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-500"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mb-8 lg:hidden">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
              <House />
            </span>
          </div>

          <h1 className="font-heading text-3xl font-extrabold text-ink dark:text-white">
            {title}
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {copy}
          </p>

          {children}

          <p className="mt-8 text-center text-xs text-slate-400">
            <ShieldCheck className="mr-1 inline" size={14} />
            Account security will be handled by the booking backend.
          </p>

        </div>
      </div>

    </div>
  );
}


export function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthShell
      title="Welcome back"
      copy="Sign in to manage your bookings and plan your next stay."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const d = new FormData(e.currentTarget);
          const email = d.get("email");

          localStorage.setItem(
            "stayhaven-user",
            JSON.stringify({
              name: email.split("@")[0],
              email,
            })
          );

          toast.success("Signed in (frontend demo).");
          navigate("/dashboard");
        }}
        className="mt-8 space-y-5"
      >

        <label className="block text-sm font-semibold dark:text-white">
          Email address

          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        <label className="block text-sm font-semibold dark:text-white">
          Password

          <span className="relative mt-2 block">
            <input
              required
              minLength="6"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-brand dark:text-blue-300"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white"
        >
          Sign in
        </button>

      </form>

      <p className="mt-7 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-brand dark:text-blue-300"
        >
          Create one
        </Link>
      </p>
    </AuthShell>
  );
}


export function Register() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthShell
      title="Create your account"
      copy="Join Stayhaven to book stays and keep reservations in one place."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const d = new FormData(e.currentTarget);

          localStorage.setItem(
            "stayhaven-user",
            JSON.stringify({
              name: d.get("name"),
              email: d.get("email"),
              phone: d.get("phone"),
            })
          );

          toast.success("Account created (frontend demo).");
          navigate("/dashboard");
        }}
        className="mt-7 grid gap-4"
      >

        <label className="text-sm font-semibold dark:text-white">
          Full name

          <input
            required
            name="name"
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        <label className="text-sm font-semibold dark:text-white">
          Email address

          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        <label className="text-sm font-semibold dark:text-white">
          Phone number

          <input
            required
            name="phone"
            type="tel"
            placeholder="+254 7XX XXX XXX"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        <label className="text-sm font-semibold dark:text-white">
          Password

          <span className="relative mt-2 block">
            <input
              required
              name="password"
              minLength="8"
              type={show ? "text" : "password"}
              placeholder="At least 8 characters"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>

        <label className="flex items-start gap-2 text-xs text-slate-500">
          <input
            required
            type="checkbox"
            className="mt-0.5"
          />
          I agree to the terms of service and privacy policy.
        </label>

        <button
          type="submit"
          className="rounded-full bg-brand py-3.5 text-sm font-bold text-white"
        >
          Create account
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already registered?{" "}
        <Link
          to="/login"
          className="font-bold text-brand dark:text-blue-300"
        >
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}


export function ForgotPassword() {
  return (
    <AuthShell
      title="Reset your password"
      copy="Enter the email address associated with your account."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Reset request shown in demo. Email delivery will be connected to Django.");
        }}
        className="mt-8 space-y-5"
      >

        <label className="block text-sm font-semibold dark:text-white">
          Email address

          <input
            required
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-normal dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white"
        >
          Send reset instructions
        </button>

      </form>

      <p className="mt-7 text-center text-sm">
        <Link
          to="/login"
          className="font-bold text-brand dark:text-blue-300"
        >
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}


// Temporary frontend demonstration data.
// Replace with Django API data when backend integration begins.

const bookings = [
  {
    ref: "SH-2026-0148",
    property: "The Garden Villa",
    location: "Karen, Nairobi",
    image: properties[0].image,
    dates: "Nov 18 – Nov 21, 2026",
    status: "Confirmed",
    amount: 25500,
  },
  {
    ref: "SH-2026-0102",
    property: "Olivewood Cottage",
    location: "Nanyuki, Laikipia",
    image: properties[3].image,
    dates: "Oct 02 – Oct 04, 2026",
    status: "Completed",
    amount: 13000,
  },
];


function SideLayout({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("stayhaven-user") ||
    '{"name":"Guest","email":""}'
  );

  const items = [
    ["Overview", "/dashboard", LayoutDashboard],
    ["My bookings", "/dashboard/bookings", CalendarDays],
    ["Booking history", "/dashboard/history", History],
    ["Explore houses", "/properties", Compass],
    ["Saved properties", "/dashboard/saved", Heart],
    ["My profile", "/dashboard/profile", UserRound],
    ["Settings", "/dashboard/settings", SettingsIcon],
  ];

  const side = (
    <>
      <Link
        to="/"
        className="flex items-center gap-2 px-2 py-3 font-heading text-xl font-extrabold text-ink dark:text-white"
      >
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
          <House size={19} />
        </span>

        Zara Homes
      </Link>

      <div className="my-7 rounded-2xl bg-brand-soft p-4 dark:bg-slate-800">
        <p className="text-xs text-slate-500">
          SIGNED IN AS
        </p>

        <p className="mt-1 truncate text-sm font-bold text-ink dark:text-white">
          {user.name}
        </p>

        <p className="truncate text-xs text-slate-500">
          {user.email}
        </p>
      </div>

      <nav className="space-y-1">
        {items.map(([t, to, Icon]) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Icon size={18} />
            {t}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => {
          localStorage.removeItem("stayhaven-user");
          toast.success("Signed out");
          navigate("/");
        }}
        className="absolute bottom-6 left-5 flex w-[calc(100%-2.5rem)] items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-rose-600"
      >
        <LogOut size={18} />
        Sign out
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f5f7fa] dark:bg-[#0d1926]">

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#101e2c] lg:block">
        {side}
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white p-5 transition-transform dark:bg-[#101e2c] lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {side}
      </aside>

      <main className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur dark:border-slate-800 dark:bg-[#101e2c]/90">

          <button
            onClick={() => setOpen(!open)}
            aria-label="Open dashboard menu"
            className="text-ink dark:text-white lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

          <p className="font-heading text-sm font-bold text-ink dark:text-white">
            Your account
          </p>

          <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft font-bold text-brand">
            {user.name?.[0] || "G"}
          </span>

        </header>

        <div className="mx-auto max-w-7xl p-5 sm:p-8">
          {children}
        </div>
      </main>

    </div>
  );
}


function Title({ title, copy }) {
  return (
    <div className="mb-8">
      <h1 className="font-heading text-2xl font-extrabold text-ink dark:text-white sm:text-3xl">
        {title}
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        {copy}
      </p>
    </div>
  );
}


function BookingCard({ b }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#14283b] sm:flex-row">

      <img
        src={b.image}
        alt={b.property}
        className="h-36 w-full rounded-xl object-cover sm:w-44"
      />

      <div className="flex-1">

        <div className="flex flex-wrap justify-between gap-2">
          <span className="text-xs text-slate-500">
            {b.ref}
          </span>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            {b.status}
          </span>
        </div>

        <h3 className="mt-2 font-heading text-lg font-bold text-ink dark:text-white">
          {b.property}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin size={13} />
          {b.location}
        </p>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <CalendarDays size={15} />
          {b.dates}
        </p>

        <p className="mt-2 text-sm font-bold text-brand dark:text-blue-300">
          KES {b.amount.toLocaleString()}
        </p>

      </div>
    </div>
  );
}


export function Dashboard() {
  const u = JSON.parse(
    localStorage.getItem("stayhaven-user") ||
    '{"name":"Guest"}'
  );

  return (
    <SideLayout>

      <Title
        title={`Welcome back, ${u.name?.split(" ")[0] || "Guest"}`}
        copy="Here's an overview of your stays and account activity."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Total bookings", "02", CalendarDays],
          ["Upcoming stays", "01", Clock3],
          ["Completed stays", "01", CheckCircle2],
        ].map(([t, n, Icon]) => (
          <div
            key={t}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#14283b]"
          >
            <Icon className="text-brand dark:text-blue-300" />

            <p className="mt-4 font-heading text-3xl font-extrabold dark:text-white">
              {n}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {t}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 flex justify-between">
        <h2 className="font-heading text-lg font-bold dark:text-white">
          Recent bookings
        </h2>

        <Link
          to="/dashboard/bookings"
          className="text-sm font-bold text-brand dark:text-blue-300"
        >
          View all
        </Link>
      </div>

      <div className="mt-4 space-y-4">
        {bookings.map((b) => (
          <BookingCard
            key={b.ref}
            b={b}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-brand p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
          READY FOR ANOTHER GETAWAY?
        </p>

        <h2 className="mt-2 font-heading text-2xl font-bold">
          Find your next favourite place.
        </h2>

        <Link
          to="/properties"
          className="mt-4 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-brand"
        >
          Explore houses →
        </Link>
      </div>

    </SideLayout>
  );
}


export function BookingList({ history = false }) {
  const list = history
    ? bookings.filter((b) => b.status === "Completed")
    : bookings.filter((b) => b.status === "Confirmed");

  return (
    <SideLayout>

      <Title
        title={history ? "Booking history" : "My bookings"}
        copy={
          history
            ? "Look back at the places you have stayed."
            : "Keep track of upcoming and current reservations."
        }
      />

      <div className="space-y-4">
        {list.map((b) => (
          <BookingCard
            key={b.ref}
            b={b}
          />
        ))}
      </div>

    </SideLayout>
  );
}


export function Saved() {
  return (
    <SideLayout>

      <Title
        title="Saved properties"
        copy="Keep your favourite stays together while you plan."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {properties.slice(0, 2).map((p) => (
          <div
            key={p.id}
            className="overflow-hidden rounded-2xl bg-white dark:bg-[#14283b]"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold dark:text-white">
                {p.name}
              </h3>

              <Link
                to={`/properties/${p.id}`}
                className="mt-3 inline-block text-sm font-bold text-brand dark:text-blue-300"
              >
                View property
              </Link>
            </div>
          </div>
        ))}
      </div>

    </SideLayout>
  );
}


export function Profile() {
  const u = JSON.parse(
    localStorage.getItem("stayhaven-user") ||
    '{"name":"Guest","email":"","phone":""}'
  );

  return (
    <SideLayout>

      <Title
        title="My profile"
        copy="Review and update your personal account details."
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const d = new FormData(e.currentTarget);

          localStorage.setItem(
            "stayhaven-user",
            JSON.stringify({
              name: d.get("name"),
              email: d.get("email"),
              phone: d.get("phone"),
            })
          );

          toast.success("Profile updated in demo mode.");
        }}
        className="max-w-2xl space-y-5 rounded-2xl bg-white p-6 dark:bg-[#14283b]"
      >

        {[
          ["Full name", "name", u.name],
          ["Email address", "email", u.email],
          ["Phone number", "phone", u.phone || ""],
        ].map(([t, n, v]) => (
          <label
            key={n}
            className="block text-sm font-semibold dark:text-white"
          >
            {t}

            <input
              name={n}
              defaultValue={v}
              required={n !== "phone"}
              type={n === "email" ? "email" : "text"}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 font-normal dark:border-slate-700"
            />
          </label>
        ))}

        <button
          type="submit"
          className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
        >
          Save changes
        </button>

      </form>

    </SideLayout>
  );
}


export function Settings() {
  const [notice, setNotice] = useState(true);

  return (
    <SideLayout>

      <Title
        title="Settings"
        copy="Manage your security and communication preferences."
      />

      <div className="max-w-2xl space-y-4">

        <div className="rounded-2xl bg-white p-6 dark:bg-[#14283b]">
          <LockKeyhole className="text-brand" />

          <h3 className="mt-3 font-bold dark:text-white">
            Password & security
          </h3>

          <Link
            to="/forgot-password"
            className="mt-4 inline-block text-sm font-bold text-brand dark:text-blue-300"
          >
            Reset your password →
          </Link>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white p-6 dark:bg-[#14283b]">
          <div>
            <h3 className="font-bold dark:text-white">
              Booking notifications
            </h3>

            <p className="text-sm text-slate-500">
              Receive reservation updates.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={notice}
            aria-label="Toggle booking notifications"
            onClick={() => setNotice((v) => !v)}
            className={`h-7 w-12 rounded-full p-1 transition-colors ${
              notice ? "bg-brand" : "bg-slate-300"
            }`}
          >
            <span
              className={`block size-5 rounded-full bg-white transition-transform ${
                notice ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

      </div>

    </SideLayout>
  );
}
