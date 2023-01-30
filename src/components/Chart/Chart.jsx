import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 900 },
    { name: "February", Total: 1850 },
    { name: "March", Total: 600 },
    { name: "April", Total: 2100 },
    { name: "May", Total: 1000 },
    { name: "June", Total: 1700 },
];

const Chart = ({aspect, title}) => {
    return (
        <div className='chart'>
            <div className='title'>{title}</div>
            <ResponsiveContainer width="100%" height={440} aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff7373" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff7373" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="none" fillOpacity={1} fill="url(#total)" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
