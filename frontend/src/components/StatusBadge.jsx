// src/components/StatusBadge.jsx
export default function StatusBadge({ status }) {
  const map = {
    PENDING: "bg-yellow-100 text-yellow-700",
    MATCHED: "bg-green-100 text-green-700",
    MISMATCH: "bg-red-100 text-red-700",
    REVIEWED: "bg-blue-100 text-blue-700",
    CLOSED: "bg-gray-200 text-gray-700",
  };

  const classes = map[status] || "bg-gray-100 text-gray-700";

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${classes}`}>
      {status}
    </span>
  );
}
