import Card from "../common/Card";
import Button from "../common/Button";
import { statusColor } from "../../utils/helpers";

function BookingCard({ booking, onCancel }) {
  return (
    <Card className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-semibold">{booking.service}</h4>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(booking.status)}`}>{booking.status}</span>
      </div>
      <p className="text-sm text-slate-500">Provider: {booking.provider}</p>
      <p className="text-sm text-slate-500">Date: {booking.date}</p>
      <Button variant="outline" className="w-full" onClick={() => onCancel(booking.id)}>Cancel</Button>
    </Card>
  );
}

export default BookingCard;
