// src/components/StatusModal.jsx
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function StatusModal({ open, onClose, onUpdate, currentStatus, id, updateStatusApi }) {
  const [selected, setSelected] = useState(currentStatus || "PENDING");
  const statuses = ["PENDING", "MATCHED", "MISMATCH", "REVIEWED", "CLOSED"];

  // Sync selected value ONLY when modal opens or currentStatus changes
  useEffect(() => {
    if (open) {
      setSelected(currentStatus);
    }
  }, [open, currentStatus]);

  if (!open) return null;

  const handleUpdate = async () => {
    try {
      await updateStatusApi(id, { status: selected });
      toast.success("Status updated");
      onUpdate(); // parent refresh
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Update Status</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
