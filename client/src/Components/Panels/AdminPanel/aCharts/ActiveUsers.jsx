import React from 'react';
import { LineChart, Line, XAxis, /*YAxis, CartesianGrid,*/ Tooltip, /*Legend,*/ ResponsiveContainer } from 'recharts';


export default function ActiveUsers() {

    const info = [
        {
          name: '',
          users: 260,
        },
        {
          name: 'Feb',
          users: 305,
        },
        {
          name: '',
          users: 437,
        },
        {
          name: '',
          users: 481,
        },
        {
          name: '',
          users: 577,
        },
        {
          name: 'Jun',
          users: 554,
        },
        {
          name: '',
          users: 593,
        },
        {
            name: '',
            users: 642,
        },
        {
            name: '',
            users: 622,
          },
          {
            name: '',
            users: 709,
          },
          {
            name: 'Nov',
            users: 819,
          },
          {
            name: '',
            users: 1001,
          },
      ];
      
    return (
        <div className="bg-white pb-5 mt-10 border-gray-300 border-4">
            <h4 className="font-bold text-2xl p-5 pb-10">Usuarios Activos</h4>
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
