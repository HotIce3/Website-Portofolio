import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getOrders } from "../utils/supabase";

export default function AdminDashboardHome() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    completedOrders: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data || []);

      // Calculate stats
      const totalOrders = data?.length || 0;
      const totalRevenue =
        data?.reduce((sum, order) => sum + (order.total_price || 0), 0) || 0;
      const completedOrders =
        data?.filter((o) => o.status === "completed").length || 0;
      const pendingOrders =
        data?.filter((o) => o.status === "pending").length || 0;

      setStats({
        totalOrders,
        totalRevenue,
        completedOrders,
        pendingOrders,
      });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const chartData = [
    { name: "Pending", value: stats.pendingOrders, fill: "#C9A66B" },
    { name: "Completed", value: stats.completedOrders, fill: "#3B2F2F" },
  ];

  const revenueData = [
    { name: "Jan", revenue: 2400 },
    { name: "Feb", revenue: 3200 },
    { name: "Mar", revenue: 2800 },
    { name: "Apr", revenue: 3900 },
    { name: "May", revenue: 4200 },
    { name: "Jun", revenue: 3800 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 text-sm font-medium">
                Total Orders
              </p>
              <p className="font-display text-3xl font-bold text-coffee-dark dark:text-coffee-gold mt-2">
                {stats.totalOrders}
              </p>
            </div>
            <div className="text-4xl">📦</div>
          </div>
        </div>

        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 text-sm font-medium">
                Total Revenue
              </p>
              <p className="font-display text-3xl font-bold text-coffee-gold mt-2">
                Rp {(stats.totalRevenue / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="text-4xl">💰</div>
          </div>
        </div>

        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 text-sm font-medium">
                Completed
              </p>
              <p className="font-display text-3xl font-bold text-green-600 mt-2">
                {stats.completedOrders}
              </p>
            </div>
            <div className="text-4xl">✓</div>
          </div>
        </div>

        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 text-sm font-medium">
                Pending
              </p>
              <p className="font-display text-3xl font-bold text-yellow-600 mt-2">
                {stats.pendingOrders}
              </p>
            </div>
            <div className="text-4xl">⏳</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Pie Chart */}
        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Status Pesanan
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#C9A66B"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#C9A66B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
        <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-4">
          Recent Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-coffee-gold border-opacity-20">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-coffee-gold border-opacity-10 hover:bg-coffee-gold hover:bg-opacity-10"
                >
                  <td className="py-3 px-4 font-mono text-xs">#{order.id}</td>
                  <td className="py-3 px-4">{order.name}</td>
                  <td className="py-3 px-4 font-bold">
                    Rp {order.total_price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.status === "completed" ? "Selesai" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
