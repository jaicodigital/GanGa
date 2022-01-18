import React from 'react';
import { LineChart, Line, XAxis, YAxis, /*CartesianGrid,*/ Tooltip, /*Legend,*/ ResponsiveContainer } from 'recharts';


export default function RevenueChart() {

    const info = [
        {
          name: '',
          ingresos: 209371,
        },
        {
          name: 'Feb',
          ingresos: 148976,
        },
        {
          name: '',
          ingresos:  154542,
        },
        {
          name: '',
          ingresos:  189123,
        },
        {
          name: '',
          ingresos: 193200,
        },
        {
          name: 'Jun',
          ingresos: 220880,
        },
        {
          name: '',
          ingresos: 234159,
        },
        {
            name: '',
            ingresos: 251300,
        },
        {
            name: '',
            ingresos: 277642,
          },
          {
            name: '',
            ingresos:  265995,
          },
          {
            name: 'Nov',
            ingresos:  281218,
          },
          {
            name: '',
            ingresos: 297673,
          },
      ];
      
    return (
        <div className="bg-white pb-5 mt-10 border-gray-300 border-4">
            <h4 className="font-bold text-2xl p-5 pb-10">Evolución de ingresos</h4>
            <ResponsiveContainer width="99%" aspect={3 / 1}>
                <LineChart data={info}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Line type="monotone" dataKey="ingresos" stroke="rgb(87, 146, 146)"/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}