import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 15000, 14000, 18000, 20000, 22000],
        borderColor: "rgba(34,197,94,1)",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
      },
    ],
  };

  const customerData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customers",
        data: [200, 250, 300, 280, 350, 400],
        backgroundColor: "rgba(59,130,246,0.6)",
      },
    ],
  };

  const reservationData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Reservations",
        data: [120, 45, 20],
        backgroundColor: [
          "rgba(34,197,94,0.7)",
          "rgba(250,204,21,0.7)",
          "rgba(239,68,68,0.7)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // This lets you control height manually
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-6" style={{ height: 300 }}>
        <h2 className="text-lg font-bold mb-4">Revenue Analytics</h2>
        <Line data={revenueData} options={chartOptions} />
      </div>

      {/* Customer Growth Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-6" style={{ height: 300 }}>
        <h2 className="text-lg font-bold mb-4">Customer Growth</h2>
        <Bar data={customerData} options={chartOptions} />
      </div>

      {/* Reservation Analytics Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-6" style={{ height: 300 }}>
        <h2 className="text-lg font-bold ">Reservation Analytics</h2>
        <Pie data={reservationData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Analytics;
