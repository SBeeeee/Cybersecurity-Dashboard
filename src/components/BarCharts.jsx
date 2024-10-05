import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Toolbar', sales: 400 },
  { name: 'Adware', sales: 300 },
  { name: 'Corrupt', sales: 200 },
  { name: 'Skyware', sales: 278 },
  { name: 'Keygen', sales: 189 },
  { name: 'Others', sales: 239 },
];

const BarCharts = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className="text-white  ml-10 text-2xl">Top 5 Threats</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
