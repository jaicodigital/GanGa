import React from 'react';
import { LineChart, Line, XAxis, /*YAxis, CartesianGrid,*/ Tooltip, /*Legend,*/ ResponsiveContainer } from 'recharts';


export default function NewUsersChart() {

    const info = [
        {
          name: '',
          users: 260,
        },
        {
          name: 'Feb',
          users: 205,
        },
        {
          name: '',
          users: 237,
        },
        {
          name: '',
          users: 281,
        },
        {
          name: '',
          users: 377,
        },
        {
          name: 'Jun',
          users: 354,
        },
        {
          name: '',
          users: 393,
        },
        {
            name: '',
            users: 442,
        },
        {
            name: '',
            users: 422,
          },
          {
            name: '',
            users: 509,
          },
          {
            name: 'Nov',
            users: 519,
          },
          {
            name: '',
            users: 555,
          },
      ];
      
    return (
        <div className="bg-white pb-5 mt-10 border-gray-300 border-4">
            <h4 className="font-bold text-2xl p-5 pb-10">Usuarios Nuevos</h4>
            <ResponsiveContainer width="99%" aspect={3 / 1}>
                <LineChart data={info}>
                    <XAxis dataKey="name"/>
                    <Line type="natural" dataKey="users" stroke="rgb(87, 146, 146)"/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
