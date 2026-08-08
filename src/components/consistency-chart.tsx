"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const consistencyData = [
  { week: "Week 1", sessions: 3 },
  { week: "Week 2", sessions: 4 },
  { week: "Week 3", sessions: 5 },
  { week: "Week 4", sessions: 4 },
  { week: "Week 5", sessions: 6 },
  { week: "Week 6", sessions: 5 },
];

export function ConsistencyChart() {
  return (
    <div className="mt-12 rounded-lg border border-border bg-muted/20 p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            Weekly consistency
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Sample placeholder data — replace with real tracking later.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Sessions
        </p>
      </div>

      <div className="mt-6 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={consistencyData}
            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              stroke="hsl(var(--border))"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="week"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius-sm)",
                color: "hsl(var(--foreground))",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="sessions"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
