import { useState } from "react";
import { createReconciliation } from "../api/reconciliationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [internalAmount, setInternalAmount] = useState("");
  const [bankAmount, setBankAmount] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (internalAmount === "" || bankAmount === "") {
      return toast.error("Please fill both fields");
    }
    if (internalAmount < 0 || bankAmount < 0) {
      return toast.error("Amounts cannot be negative");
    }

    try {
      const payload = {
        internalAmount: Number(internalAmount),
        bankAmount: Number(bankAmount),
      };

      await createReconciliation(payload);

      toast.success("Entry created successfully!");
      navigate("/"); // redirect to home/list
    } catch (err) {
      toast.error("Failed to create entry");
      console.error(err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Reconciliation Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Internal Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Internal Amount</label>
          <input
            type="number"
            value={internalAmount}
            onChange={(e) => setInternalAmount(e.target.value)}
            className="w-full border rounded-md p-2"
            placeholder="Enter internal amount"
            min="0"
          />
        </div>

        {/* Bank Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Bank Amount</label>
          <input
            type="number"
            value={bankAmount}
            onChange={(e) => setBankAmount(e.target.value)}
            className="w-full border rounded-md p-2"
            placeholder="Enter bank amount"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Entry
        </button>
      </form>
    </div>
  );
}
