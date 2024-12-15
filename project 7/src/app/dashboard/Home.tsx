import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Bar, BarChart, XAxis, YAxis ,  PieChart, Pie, Label} from "recharts";
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    
  } from "@/components/ui/chart";

  import { useMemo } from "react";
  import CommunicationCard from "@/components/ui/CommunicationCard";
  
  export default function Dashboardd() {
    const chartData = [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ];
  
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 }
    ];
    
    // Define colors for the Pie chart slices
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const chartConfig = {
      visitors: {
        label: "Visitors",
      },
      chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
      },
      safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
      },
      firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
      },
      edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
      },
      other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
      },
    } satisfies ChartConfig;

    const totalVisitors = useMemo(() => {
      return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])
  
    return (
      <>
        <div className="space-y-10 m-10 ">
          <h2 className="text-left font-bold">Communications</h2>
          <div className="flex gap-4 flex-wrap">
          <div className="flex flex-wrap"><CommunicationCard /></div>

          </div>
          <h2 className="text-left font-bold py-4">Doctors</h2>
          <div className="flex flex-wrap gap-9">
          <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  
            <Card className="w-[258px] h-[162px]">
              <CardHeader>
                <CardTitle className="text-left font-light ">Total</CardTitle>
                <CardDescription className="size-10 text-[50px]">8,760</CardDescription>
              </CardHeader>
              <CardContent className="text-purple-500">
              <p>100%</p>
                            </CardContent>
            </Card>
  
            <Card className="w-[258px] h-[162px]">
              <CardHeader>
                <CardTitle className="text-left font-light">Total</CardTitle>
                <CardDescription className="size-10 text-[50px]">11,760</CardDescription>
              </CardHeader>
              <CardContent className="text-purple-500">
                <p>100%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }