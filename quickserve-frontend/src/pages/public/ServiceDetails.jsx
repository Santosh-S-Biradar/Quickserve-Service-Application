import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceById } from "../../redux/serviceSlice";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Loader from "../../components/common/Loader";

function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selected, loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServiceById(id));
  }, [dispatch, id]);

  if (loading || !selected) {
    return <Loader />;
  }

  return (
    <div className="container-max py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <img src={selected.image} alt={selected.title} className="h-80 w-full rounded-xl2 object-cover" />
          <Card>
            <h1 className="text-3xl font-semibold">{selected.title}</h1>
            <p className="mt-4 text-slate-600">Professional and trusted service with verified providers and transparent pricing.</p>
            <div className="mt-4 flex gap-6 text-sm text-slate-600">
              <span>Provider: {selected.provider}</span>
              <span>Rating: {selected.rating}</span>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Reviews</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Excellent work quality and very punctual.</p>
              <p>Highly recommend for quick and reliable service.</p>
              <p>Booked twice, smooth process both times.</p>
            </div>
          </Card>
        </div>

        <Card>
          <h3 className="text-xl font-semibold">Book this service</h3>
          <div className="mt-4 space-y-3">
            <input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" />
            <input type="time" className="w-full rounded-xl border border-slate-200 px-4 py-2.5" />
            <Link to={`/customer/booking/${selected.id}`}>
              <Button className="w-full">Book Now</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ServiceDetails;
