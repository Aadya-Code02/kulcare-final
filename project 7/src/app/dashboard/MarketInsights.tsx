import { Button } from "../../components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { ChevronDown, CopyPlus, Bolt, Layers2, Files } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function MarketInsights() {
  const dropdownItems = [
    {
      title: "Jan",
    },
    {
      title: "Feb",
    },
    {
      title: "March",
    },
    {
      title: "April",
    },
  ];
  const dropdownItems2 = [
    {
      title: "East",
      icon: (
        <CopyPlus
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "West",
      icon: (
        <Bolt
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "North",
      icon: (
        <Layers2
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "South",
      icon: (
        <Files
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
  ];
  const dropdownItems3 = [
    {
      title: "8X Cream",
      icon: (
        <Bolt
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "8X Shampoo",
      icon: (
        <Layers2
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Tablets",
      icon: (
        <Files
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Acivir Cream",
      icon: (
        <Files
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      ),
    },
  ];
  const dropdownItems4 = [
    {
      title: "Lakshay Sharma",
    },
    {
      title: "Aadya Sharma",
    },
    {
      title: "Sharma Ji",
    },
  ];

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
      label: "BILAFAV",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "ACIVIR",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "ABAMUNE",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "CEFOPROX",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "BIOZARA",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const invoices = [
    {
      invoice: "kid",
      paymentStatus: "Brand Introduction",
      totalAmount: "100%",
      paymentMethod: "Credit Card",
      BrandName: "CiplaCitin",
      Views: "80",
      Status: "sent",
      Engagement: "50",
    },
    {
      invoice: "Billing",
      paymentStatus: "Brand Education",
      totalAmount: "100%",
      paymentMethod: "PayPal",
      BrandName: "CiplaCitin",
      Views: "20",
      Status: "scheduled",
      Engagement: "60",
    },
    {
      invoice: "Hey",
      paymentStatus: "Webinar Introduction",
      totalAmount: "100%",
      paymentMethod: "Bank Transfer",
      BrandName: "CiplaCitin",
      Views: "90",
      Status: "cancelled",
      Engagement: "30",
    },
    {
      invoice: "Aadya",
      paymentStatus: "meeting Request",
      totalAmount: "100%",
      paymentMethod: "Credit Card",
      BrandName: "CiplaCitin",
      Views: "70",
      Status: "sent",
      Engagement: "80",
    },
    {
      invoice: "Guri",
      paymentStatus: "Brand Introduction",
      totalAmount: "100%",
      paymentMethod: "PayPal",
      BrandName: "CiplaCitin",
      Views: "60",
      Status: "scheduled",
      Engagement: "90",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(dropdownItems[0]);
  const [selectedItem2, setSelectedItem2] = useState(dropdownItems2[0]);
  const [selectedItem3, setSelectedItem3] = useState(dropdownItems3[0]);
  const [selectedItem4, setSelectedItem4] = useState(dropdownItems4[0]);

  return (
    <div className="space-y-10 m-10">
      <h2 className="text-left font-bold">MARKET INSIGHTS</h2>
      <div className="flex space-x-[130px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[142px] h-[43px] flex items-center justify-between"
            >
              {selectedItem.icon}
              <span className="ms-2">{selectedItem.title}</span>
              <ChevronDown
                className="-me-1 ms-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownItems.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => setSelectedItem(item)}
                className="flex items-center space-x-2"
              >
                {item.icon}
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[142px] h-[43px] flex items-center justify-between"
            >
              {selectedItem2.icon}
              <span className="ms-2">{selectedItem2.title}</span>
              <ChevronDown
                className="-me-1 opacity-60 "
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownItems2.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => setSelectedItem2(item)}
              >
                {item.icon}
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[142px] h-[43px] flex items-center justify-between"
            >
              {selectedItem3.icon}
              <span className="ms-2">{selectedItem3.title}</span>
              <ChevronDown
                className="-me-1 ms-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownItems3.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => setSelectedItem3(item)}
                className="flex items-center space-x-2"
              >
                {item.icon}
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[142px] h-[43px] flex items-center justify-between"
            >
              {selectedItem4.icon}
              <span className="ms-2">{selectedItem4.title}</span>
              <ChevronDown
                className="-me-1 opacity-60 "
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownItems4.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => setSelectedItem4(item)}
              >
                {item.icon}
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-[1200px]">
  {/* ChartContainerCard */}
  <div className="w-[450px] h-[400px]">
    <Card className="flex flex-col">
      <CardHeader className="items-start pb-0">
        <CardTitle className="text-start">RX values</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="ml-0 aspect-square max-h-[300px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>

  <div className="flex gap-4 ">
  {/* Two smaller cards */}
  <div className="flex flex-col gap-4 ml-5">
    <Card className="w-[258px] h-[162px]">
      <CardHeader>
        <CardTitle className="text-left font-light">RX TOTAL</CardTitle>
        <CardDescription className="size-10 text-[50px]">8,760</CardDescription>
      </CardHeader>
      <CardContent className="text-purple-500">
        <p>100%</p>
      </CardContent>
    </Card>
    <Card className="w-[258px] h-[162px]">
      <CardHeader>
        <CardTitle className="text-left font-light">RXERS</CardTitle>
        <CardDescription className="size-10 text-[50px]">11,760</CardDescription>
      </CardHeader>
      <CardContent className="text-purple-500">
        <p>100%</p>
      </CardContent>
    </Card>
  </div>

  {/* Third card */}
  <div className="justify-end">
  <Card className="w-[434px] h-[357px]">
    <CardHeader>
      <CardTitle className="text-left font-light">RXERS</CardTitle>
      <CardDescription className="size-10 text-[50px]">11,760</CardDescription>
    </CardHeader>
    <CardContent className="text-purple-500">
      <p>100%</p>
    </CardContent>
  </Card>
</div>

</div>

  </div>

  <div className="mt-14">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>BrandName</TableHead>
                  <TableHead>Reach</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Engagement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow className="h-[62px]" key={invoice.invoice}>
                    <TableCell className="h-[62px] text-[14px] font-normal text-[#078DFF] bg-transparent border-0">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell>{invoice.BrandName}</TableCell>

                    <TableCell>{invoice.totalAmount}</TableCell>
                    <TableCell>{invoice.Views}</TableCell>
                    <TableCell>{invoice.Status}</TableCell>
                    <TableCell>{invoice.Engagement}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
</div>



  );
}
