'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { DefaultizedPieValueType, pieArcLabelClasses, PieChart } from "@mui/x-charts";

type Props = {}

const data = [
    { label: 'Group A', value: 400, color: '#0088FE' },
    { label: 'Group B', value: 300, color: '#00C49F' },
    { label: 'Group C', value: 300, color: '#FFBB28' },
    { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};


export default function HomeBudgetComp({ }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    plan your adventure.Stay on budget. your travel assure that for you.
                </CardTitle>
            </CardHeader>
            <CardContent>
                <PieChart
                    series={[
                        {
                            outerRadius: 80,
                            data,
                            arcLabel: getArcLabel,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontSize: 14,
                        },
                    }}
                    {...sizing}
                />
            </CardContent>
        </Card>
    )
}