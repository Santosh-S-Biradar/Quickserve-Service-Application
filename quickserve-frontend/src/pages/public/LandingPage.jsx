import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories, mockServices } from "../../utils/constants";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import { FaArrowRight, FaCalendarCheck, FaClipboardCheck, FaSearch, FaShieldAlt, FaStar } from "react-icons/fa";
import heroIndiaService from "../../assets/hero-india-service.svg";

const reviews = [
  { name: "Rakesh, Pune", message: "Easy to book and the service person arrived on time.", rating: 5 },
  { name: "Aarti, Mumbai", message: "Clear process, trusted provider, and no confusion.", rating: 5 },
  { name: "Imran, Delhi", message: "Good for busy families. Booking took just a few minutes.", rating: 4.8 }
];

const steps = [
  {
    title: "Search Service",
    description: "Search by service name and location, then compare verified providers by rating and reviews.",
    points: ["Choose category", "Select city/area", "Check ratings"],
    icon: FaSearch
  },
  {
    title: "Book Time Slot",
    description: "Pick your preferred date and time, add address, and confirm booking details in one place.",
    points: ["Choose date/time", "Add address", "Confirm request"],
    icon: FaCalendarCheck
  },
  {
    title: "Get Job Done",
    description: "Provider visits and completes the work. After service, share your rating and feedback.",
    points: ["Service delivered", "Rate provider", "Book again easily"],
    icon: FaClipboardCheck
  }
];

function LandingPage() {
  return (
    <div className="gradient-hero">
      <section className="container-max py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">India-ready local service platform</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">Find Trusted Local Services Instantly</h1>
            <p className="max-w-xl text-base text-slate-600">Simple and reliable booking for homes, students, working people, and families across India.</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              <FaShieldAlt className="text-primary" /> Verified providers. Easy steps. Clear communication.
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm" placeholder="Search service" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm" placeholder="Select location" />
            </div>
            <div className="flex gap-3">
              <Link to="/services"><Button>Book a Service</Button></Link>
              <Link to="/register"><Button variant="secondary">Become a Provider</Button></Link>
            </div>
          </div>
          <img src={heroIndiaService} alt="Indian users booking verified local services on QuickServe app" className="h-[380px] w-full rounded-xl object-cover shadow-sm lg:h-[420px]" />
        </motion.div>
      </section>

      <section className="container-max py-14">
        <h2 className="section-title mb-6">Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="flex items-center gap-3 py-4">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-primary"><Icon /></div>
                <p className="text-sm font-semibold">{item.title}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container-max py-14">
        <h2 className="section-title mb-6">Popular Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockServices.map((service) => {
            const categoryMeta = categories.find((item) => item.id === service.category);
            const Icon = categoryMeta?.icon || FaSearch;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-2xl text-primary">
                      <Icon />
                    </div>
                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Popular</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-500">{service.provider} - {service.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-500">Price set by provider</p>
                    <Link to={`/services/${service.id}`} className="text-sm font-semibold text-primary">
                      Book Now
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container-max py-14">
        <h2 className="section-title mb-6">How It Works</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 text-sm text-slate-600">
            Quick flow for every user: search, book, and get service without confusion.
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex flex-1 items-center">
                  <Card className="relative w-full p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-primary">
                        <Icon />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.points.map((point) => (
                        <span key={point} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
                          {point}
                        </span>
                      ))}
                    </div>
                  </Card>
                  {index < steps.length - 1 ? (
                    <div className="mx-2 hidden text-xl text-slate-400 md:block">
                      <FaArrowRight />
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-max py-14">
        <h2 className="section-title mb-6">Reviews & Ratings</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((item) => (
            <Card key={item.name}>
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                <FaStar /> <span className="text-sm font-medium text-slate-700">{item.rating}</span>
              </div>
              <p className="text-slate-600">"{item.message}"</p>
              <p className="mt-4 text-sm font-semibold text-primary">{item.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
