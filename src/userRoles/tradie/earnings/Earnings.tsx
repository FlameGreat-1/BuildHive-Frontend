// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Paid', value: 80 },
//   { name: 'Pending', value: 20 },
// ];

// const COLORS = ['#6366f1', '#e5e7eb']; // indigo + gray-200

// export default function EarningsContent() {
//   return (
//     <div className="p-4 w-full flex flex-col gap-6">
//       {/* Earnings Summary */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
//         <div>
//           <p className="text-sm text-gray-500">This Week</p>
//           <p className="font-semibold text-lg">400</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">This Month</p>
//           <p className="font-semibold text-lg">1200</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Total Earnings</p>
//           <p className="font-semibold text-lg">$4500</p>
//         </div>
//       </div>

//       {/* Chart + Label */}
//       <div className="flex flex-col items-center">
//         <p className="text-sm text-gray-600 mb-2">Pending vs Paid</p>
//         <div className="h-48 w-48">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 innerRadius={50}
//                 outerRadius={80}
//                 paddingAngle={2}
//               >
//                 {
//                   data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))
//                 }
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
//           Withdraw Funds
//         </button>
//       </div>

//       {/* Transaction Table */}
//       <div className="mt-6">
//         <p className="font-semibold text-gray-700 mb-2">Transaction History</p>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm text-left">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="px-4 py-2">Job</th>
//                 <th className="px-4 py-2">Client</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array(5).fill(0).map((_, i) => (
//                 <tr key={i} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2">Fix leaking pipe</td>
//                   <td className="px-4 py-2">John Doe</td>
//                   <td className="px-4 py-2 text-green-600">$100</td>
//                   <td className="px-4 py-2">
//                     <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
//                       Paid
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }