import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { ChevronDown, CopyPlus, Bolt, Layers2, Files } from "lucide-react";
import CommunicationCard from "@/components/ui/CommunicationCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Communications() {
  const dropdownItems = [
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

  const dropdownItems2 = [
    {
      title: "Cream",
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
      title: "Shampo",
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
      title: "Acivir",
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
  const [selectedItem2, setSelectedItem2] = useState(dropdownItems2[0]); // Correctly initialize to "8X Cream"

  return (
    <>
      <div className="space-y-10 m-10 ">
        <h2 className="text-left font-bold">List of Communications</h2>
        <div className="flex flex-wrap space-x-[130px]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-[142px] h-[43px] flex items-center justify-between dark:hover:bg-gray-600"
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
                  className="flex items-center space-x-2  dark:hover:bg-gray-600"
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
                className="w-[142px] h-[43px] flex items-center justify-between  dark:hover:bg-gray-600"
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
                  className="flex items-center space-x-2  dark:hover:bg-gray-600"

                >
                  {item.icon}
                  {item.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="">
          <CommunicationCard />

          <div className="mt-14 flex">
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
      </div>
    </>
  );
}
