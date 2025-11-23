// src/pages/View.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReconciliationById } from "../api/reconciliationApi";
import StatusBadge from "../components/StatusBadge";
import toast from "react-hot-toast";

export default function View() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await getReconciliationById(id);
        setItem(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch item");
      }
    })();
  }, [id]);

  if (!item) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Reconciliation Details</h2>

      <div className="grid grid-cols-1 gap-3">
        <div><strong>ID:</strong> {item.id}</div>
        <div><strong>Internal Amount:</strong> {item.internalAmount}</div>
        <div><strong>Bank Amount:</strong> {item.bankAmount}</div>
        <div><strong>Status:</strong> <StatusBadge status={item.status} /></div>
      </div>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">Back to list</Link>
      </div>
    </div>
  );
}
