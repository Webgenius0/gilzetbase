import React from 'react';

export default function AffiliateCommissions() {
    const transactions = [
        { id: "#TRX-9823", date: "Oct 24, 2025", desc: "Commission - User Registration (Premium)", amount: "+$25.00", status: "Approved" },
        { id: "#TRX-9821", date: "Oct 22, 2025", desc: "Commission - Contest Entry", amount: "+$5.00", status: "Pending" },
        { id: "#TRX-9810", date: "Oct 15, 2025", desc: "Payout to PayPal (john@example.com)", amount: "-$150.00", status: "Paid" },
        { id: "#TRX-9755", date: "Oct 12, 2025", desc: "Commission - User Registration", amount: "+$25.00", status: "Approved" },
        { id: "#TRX-9712", date: "Oct 01, 2025", desc: "Commission - User Registration", amount: "+$25.00", status: "Approved" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Commissions & Payouts</h2>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    Request Payout
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {transactions.map((trx) => (
                            <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{trx.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{trx.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{trx.desc}</td>
                                <td className={`px-6 py-4 text-sm font-bold ${trx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>
                                    {trx.amount}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                        ${trx.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                            trx.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                                                'bg-blue-100 text-blue-800'}`}>
                                        {trx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {transactions.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No transactions found. Start sharing your link!
                    </div>
                )}
            </div>
        </div>
    );
}
