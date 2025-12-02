import React, { useState, useEffect } from "react";
import { getOrders, updateOrder } from "../utils/supabase";
import { Eye, Check, X } from "lucide-react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrder(orderId, { status: newStatus });
      setOrders(
        orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === "pending") return order.status === "pending";
    if (filter === "completed") return order.status === "completed";
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold">
          Orders Management
        </h2>
        <div className="flex gap-2">
          {["all", "pending", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === status
                  ? "bg-coffee-gold text-coffee-dark"
                  : "bg-coffee-dark dark:bg-coffee-cream text-coffee-cream dark:text-coffee-dark hover:bg-coffee-gold hover:text-coffee-dark"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-coffee-dark rounded-lg overflow-hidden coffee-shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-coffee-gold bg-opacity-20">
              <tr>
                <th className="text-left py-4 px-6 font-bold">Order ID</th>
                <th className="text-left py-4 px-6 font-bold">Customer</th>
                <th className="text-left py-4 px-6 font-bold">Phone</th>
                <th className="text-left py-4 px-6 font-bold">Total</th>
                <th className="text-left py-4 px-6 font-bold">Status</th>
                <th className="text-left py-4 px-6 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-coffee-gold border-opacity-10 hover:bg-coffee-gold hover:bg-opacity-10"
                >
                  <td className="py-4 px-6 font-mono text-sm">#{order.id}</td>
                  <td className="py-4 px-6">{order.name}</td>
                  <td className="py-4 px-6">{order.phone}</td>
                  <td className="py-4 px-6 font-bold text-coffee-gold">
                    Rp {order.total_price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${
                        order.status === "completed"
                          ? "bg-green-200 text-green-800 border-green-300"
                          : "bg-yellow-200 text-yellow-800 border-yellow-300"
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 text-blue-500 hover:bg-blue-100 rounded transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg"
            >
              <X size={24} />
            </button>

            <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold mb-6">
              Order Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Order ID
                </label>
                <p className="font-mono">#{selectedOrder.id}</p>
              </div>

              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Customer Name
                </label>
                <p>{selectedOrder.name}</p>
              </div>

              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Phone
                </label>
                <p>{selectedOrder.phone}</p>
              </div>

              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Address
                </label>
                <p className="text-sm text-opacity-80">
                  {selectedOrder.address}
                </p>
              </div>

              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Items
                </label>
                <div className="text-sm space-y-2">
                  {selectedOrder.items &&
                    typeof selectedOrder.items === "string" && (
                      <pre className="text-xs overflow-auto max-h-40 bg-coffee-cream dark:bg-coffee-black p-2 rounded">
                        {JSON.stringify(
                          JSON.parse(selectedOrder.items),
                          null,
                          2
                        )}
                      </pre>
                    )}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-coffee-dark dark:text-coffee-cream">
                  Total
                </label>
                <p className="font-display text-2xl font-bold text-coffee-gold">
                  Rp {selectedOrder.total_price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
