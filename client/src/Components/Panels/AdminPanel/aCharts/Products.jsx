import React from 'react';
import { LineChart, Line, XAxis, /*YAxis, CartesianGrid,*/ Tooltip, /*Legend,*/ ResponsiveContainer } from 'recharts';


export default function productosChart() {
    const info = [
        {
          name: '',
          productos: 260,
        },
        {
          name: 'Feb',
          productos: 175,
        },
        {
          name: '',
          productos: 237,
        },
        {
          name: '',
          productos: 381,
        },
        {
          name: '',
          productos: 377,
        },
        {
          name: 'Jun',
          productos: 454,
        },
        {
          name: '',
          productos: 493,
        },
        {
            name: '',
            productos: 442,
        },
        {
            name: '',
            productos: 522,
          },
          {
            name: '',
            productos: 609,
          },
          {
            name: 'Nov',
            productos: 619,
          },
          {
            name: '',
            productos: 717,
          },
      ];
      
    return (
        <div className="bg-white pb-5 mt-10 border-gray-300 border-4">
            <h4 className="font-bold text-2xl p-5 pb-10">Productos vendidos</h4>
            <ResponsiveContainer width="99%" aspect={3 / 1}>
                <LineChart data={info}>
                    <XAxis dataKey="name"/>
                    <Line type="natural" dataKey="productos" stroke="rgb(87, 146, 146)"/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
