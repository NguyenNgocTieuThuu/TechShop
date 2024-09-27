import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react'; // Import icons từ lucide-react

const purchaseHistory = [
  { id: 1, date: '2024-09-15', product: 'iPhone 15 Pro', price: '30.990.000 ₫', status: 'Đã giao' },
  { id: 2, date: '2024-08-30', product: 'MacBook Air M3', price: '27.990.000 ₫', status: 'Đang xử lý' },
  { id: 3, date: '2024-07-22', product: 'AirPods Pro', price: '5.990.000 ₫', status: 'Đã hủy' },
];

const PurchaseHistory = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Lịch Sử Mua Hàng FPT Shop</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-4 px-6 border-b">Ngày mua</th>
            <th className="py-4 px-6 border-b">Sản phẩm</th>
            <th className="py-4 px-6 border-b">Giá</th>
            <th className="py-4 px-6 border-b">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-4 px-6 border-b">{item.date}</td>
              <td className="py-4 px-6 border-b">{item.product}</td>
              <td className="py-4 px-6 border-b">{item.price}</td>
              <td className="py-4 px-6 border-b">
                <span
                  className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold
                  ${item.status === 'Đã giao' ? 'bg-green-200 text-green-800' :
                    item.status === 'Đang xử lý' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'}`}
                >
                  {item.status === 'Đã giao' && <CheckCircle className="w-4 h-4" />}
                  {item.status === 'Đang xử lý' && <Clock className="w-4 h-4" />}
                  {item.status === 'Đã hủy' && <XCircle className="w-4 h-4" />}
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;