// src/pages/List.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllReconciliations,
  updateStatus as apiUpdateStatus,
  deleteReconciliation as apiDelete,
} from "../api/reconciliationApi";
import StatusBadge from "../components/StatusBadge";
import StatusModal from "../components/StatusModal";
import DeleteModal from "../components/DeleteModal";
import toast from "react-hot-toast";

export default function List() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // modal state
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeStatus, setActiveStatus] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      const res = await getAllReconciliations();
      // axios returns data in res.data
      setItems(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch entries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openStatusModal = (id, status) => {
    setActiveId(id);
    setActiveStatus(status);
    setStatusModalOpen(true);
  };

  const openDeleteModal = (id) => {
    setActiveId(id);
    setDeleteModalOpen(true);
  };

  const handleAfterUpdate = () => load();
  const handleAfterDelete = () => load();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Reconciliation List</h2>
        <Link to="/create" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
          Create New
        </Link>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-sm font-medium">ID</th>
              <th className="px-4 py-3 text-sm font-medium">Internal</th>
              <th className="px-4 py-3 text-sm font-medium">Bank</th>
              <th className="px-4 py-3 text-sm font-medium">Status</th>
              <th className="px-4 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">Loading...</td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">No records found</td>
              </tr>
            ) : (
              items.map((it) => (
                <tr key={it.id} className="border-t">
                  <td className="px-4 py-3 text-sm">{String(it.id).slice(0, 8)}</td>
                  <td className="px-4 py-3 text-sm">{it.internalAmount}</td>
                  <td className="px-4 py-3 text-sm">{it.bankAmount}</td>
                  <td className="px-4 py-3 text-sm">
                    <StatusBadge status={it.status} />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Link to={`/view/${it.id}`} className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm">View</Link>

                      <button
                        onClick={() => openStatusModal(it.id, it.status)}
                        className="px-2 py-1 bg-yellow-100 rounded hover:bg-yellow-200 text-sm"
                      >
                        Update Status
                      </button>

                      <button
                        onClick={() => openDeleteModal(it.id)}
                        className="px-2 py-1 bg-red-100 rounded hover:bg-red-200 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <StatusModal
        open={statusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        onUpdate={handleAfterUpdate}
        currentStatus={activeStatus}
        id={activeId}
        updateStatusApi={apiUpdateStatus}
      />

      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleAfterDelete}
        id={activeId}
        deleteApi={apiDelete}
      />
    </div>
  );
}
