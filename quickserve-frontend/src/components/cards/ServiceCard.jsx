import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Card from "../common/Card";
import Button from "../common/Button";
import { formatCurrency } from "../../utils/helpers";

function ServiceCard({ service }) {
  return (
    <Card className="overflow-hidden p-0">
      <img src={service.image} alt={service.title} className="h-44 w-full object-cover" />
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
        <p className="text-sm text-slate-500">by {service.provider}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 text-amber-500"><FaStar /> {service.rating}</span>
          <span className="flex items-center gap-1 text-slate-500"><FaMapMarkerAlt /> {service.location}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-primary">{formatCurrency(service.price)}</p>
          <Link to={`/services/${service.id}`}>
            <Button className="px-4 py-2 text-sm">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ServiceCard;
