import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  import { Bar, BarChart, XAxis, YAxis } from "recharts";
  import { TrendingUp } from "lucide-react";
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart";
  
  export default function Dashboardd() {
    const chartData = [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ];
  
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
  
    return (
      <>
        <div className="space-y-10">
          <h2 className="text-left font-bold">Communications</h2>
          <div className="flex gap-4 flex-wrap">
            <Card className="w-[675px] h-[236px]">
              <CardHeader>
                <CardTitle className="text-left">Reach</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center h-[150px]">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    width={600} // Adjust based on available space
                    height={150} // Adjust based on available space
                    margin={{
                      left: 0,
                    }}
                  >
                    <YAxis
                      dataKey="browser"
                      type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) =>
                        chartConfig[value as keyof typeof chartConfig]?.label
                      }
                    />
                    <XAxis dataKey="visitors" type="number" hide />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="visitors" layout="vertical" radius={5} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
  
            <Card className="w-[675px] h-[236px]">
              <CardHeader>
                <CardTitle className="text-left">Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-left font-bold py-4">Doctors</h2>
          <div className="flex flex-wrap gap-9">
            <Card className="w-[603px] h-[237px] ">
              <CardHeader>
                <CardTitle className="text-left">Reach</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
  
            <Card className="w-[258px] h-[162px]">
              <CardHeader>
                <CardTitle className="text-left">Reach</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
  
            <Card className="w-[258px] h-[162px]">
              <CardHeader>
                <CardTitle className="text-left">Reach</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }