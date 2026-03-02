import { FaBolt, FaBroom, FaFan, FaHammer, FaPaintBrush, FaTools, FaUserGraduate } from "react-icons/fa";

export const categories = [
  { id: "electrician", title: "Electrician", icon: FaBolt },
  { id: "plumber", title: "Plumber", icon: FaTools },
  { id: "cleaning", title: "Cleaning", icon: FaBroom },
  { id: "ac-repair", title: "AC Repair", icon: FaFan },
  { id: "carpentry", title: "Carpentry", icon: FaHammer },
  { id: "beauty", title: "Beauty", icon: FaPaintBrush },
  { id: "tutoring", title: "Tutoring", icon: FaUserGraduate }
];

export const mockServices = [
  { id: 1, title: "Home Deep Cleaning", provider: "Sparkle Team", price: null, rating: 4.8, location: "Mumbai", category: "cleaning", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900" },
  { id: 2, title: "AC Installation & Repair", provider: "CoolFix Experts", price: null, rating: 4.7, location: "Bengaluru", category: "ac-repair", image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=900" },
  { id: 3, title: "Electrical Wiring", provider: "BrightVolt", price: null, rating: 4.9, location: "Delhi", category: "electrician", image: "https://images.unsplash.com/photo-1621905252472-e8f1a4f0ebf8?w=900" },
  { id: 4, title: "Premium Plumbing", provider: "PipePro", price: null, rating: 4.6, location: "Pune", category: "plumber", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900" }
];

export const bookingStatuses = ["Pending", "Accepted", "Completed", "Cancelled"];
