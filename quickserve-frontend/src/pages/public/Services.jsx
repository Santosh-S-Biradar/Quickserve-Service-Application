import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../components/cards/ServiceCard";
import Loader from "../../components/common/Loader";
import { categories, mockServices } from "../../utils/constants";
import { getServicesRequest } from "../../services/serviceService";

function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("asc");

  const { data, isLoading } = useQuery({
    queryKey: ["services-list"],
    queryFn: async () => {
      try {
        const response = await getServicesRequest();
        return response.data?.data || response.data;
      } catch {
        return mockServices;
      }
    }
  });

  const filtered = useMemo(() => {
    const items = (data || []).filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || item.category === category;
      const matchRating = Number(item.rating) >= Number(rating || 0);
      return matchSearch && matchCategory && matchRating;
    });
    return items.sort((a, b) => {
      const left = typeof a.price === "number" ? a.price : Number.MAX_SAFE_INTEGER;
      const right = typeof b.price === "number" ? b.price : Number.MAX_SAFE_INTEGER;
      return sort === "asc" ? left - right : right - left;
    });
  }, [category, data, rating, search, sort]);

  return (
    <div className="container-max py-12">
      <h1 className="mb-6 text-3xl font-semibold">All Services</h1>

      <div className="mb-8 grid gap-3 rounded-xl2 bg-white p-4 shadow-soft md:grid-cols-4">
        <input className="rounded-xl border border-slate-200 px-4 py-2.5" placeholder="Search services" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="rounded-xl border border-slate-200 px-4 py-2.5" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All categories</option>
          {categories.map((item) => <option value={item.id} key={item.id}>{item.title}</option>)}
        </select>
        <select className="rounded-xl border border-slate-200 px-4 py-2.5" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={0}>All ratings</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-4 py-2.5" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {isLoading ? <Loader /> : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      )}
    </div>
  );
}

export default Services;
