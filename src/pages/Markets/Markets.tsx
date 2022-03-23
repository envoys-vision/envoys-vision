import axios from 'axios'
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'


const Markets = () => {
  const [data, setData] = React.useState([
    {
      name: '12pm',
      uv: 53,
    },
    {
      name: '1pm',
      uv: 12,
    },
    {
      name: '2pm',
      uv: 55,
    }])

  return (
    <Container>
      market
        {/* <ResponsiveContainer width='100%' height={250}> 
            <AreaChart 
                data={data} 
                margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2261DA" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2261DA" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis hide/>
                <Area name='Price' dataKey="uv" stroke="#2261DA" fillOpacity={1} fill="url(#colorUv)" />
                <Tooltip/>
            </AreaChart>
            
        </ResponsiveContainer> */}
    </Container>
  )
}

export default Markets