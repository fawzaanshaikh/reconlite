// src/components/DeleteModal.jsx
import toast from "react-hot-toast";

export default function DeleteModal({ open, onClose, onDelete, id, deleteApi }) {
  if (!open) return null;

  const handleDelete = async () => {
    try {
      await deleteApi(id);
      toast.success("Deleted");
      onDelete();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Confirm delete</h3>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this reconciliation entry? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
