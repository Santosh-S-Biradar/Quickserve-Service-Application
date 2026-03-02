import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaHeadset, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";

function Footer() {
  const customerLinks = ["Book a Service", "Popular Services", "Reviews & Ratings", "Support"];
  const providerLinks = ["Become a Provider", "Provider Help", "Service Guidelines", "Safety"];
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Pune", "Chennai"];
  const socials = [FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn];

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-max py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
              Quick<span className="text-primary">Serve</span> India
            </h3>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Trusted local service booking for households, students, families, and working professionals.
            </p>
            <div className="grid gap-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><FaShieldAlt className="text-primary" /> Verified providers</p>
              <p className="flex items-center gap-2"><FaHeadset className="text-primary" /> Friendly support</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Customers</h4>
            <div className="space-y-2 text-sm text-slate-700">
              {customerLinks.map((item) => <a key={item} href="#" className="block hover:text-primary">{item}</a>)}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Providers</h4>
            <div className="space-y-2 text-sm text-slate-700">
              {providerLinks.map((item) => <a key={item} href="#" className="block hover:text-primary">{item}</a>)}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Available Cities</h4>
            <div className="mb-4 flex flex-wrap gap-2">
              {cities.map((city) => (
                <span key={city} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  {city}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-primary" /> +91 90000 90000</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Service coverage across major cities</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">{new Date().getFullYear()} QuickServe. Easy local services for everyone.</p>
          <div className="flex items-center gap-2">
            {socials.map((Icon, index) => (
              <button key={index} className="rounded-full border border-slate-300 p-2 text-slate-600 hover:border-primary hover:text-primary">
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
