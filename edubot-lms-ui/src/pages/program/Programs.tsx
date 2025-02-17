import { useState } from "react";
import { FaEdit, FaRegCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useRouter } from '@tanstack/react-router';

interface Program {
  id: string;
  name: string;
  courses: number;
  date: string;
  org: string;
  state: "Active" | "Inactive";
}

const programsData: Program[] = [
  { id: "PG12456", name: "Big Data Tools & Architecture", courses: 6, date: "10/05/2024", org: "KLC Tech College", state: "Active" },
  { id: "PS12457", name: "Analyzing Data at Scale using Tableau, Power BI", courses: 9, date: "10/05/2024", org: "KLC Tech College", state: "Inactive" },
  { id: "PR12458", name: "Cloud Computing", courses: 6, date: "10/05/2024", org: "KLC Tech College", state: "Active" },
  { id: "PG12459", name: "Machine Learning Fundamentals", courses: 7, date: "10/05/2024", org: "KLC Tech College", state: "Active" },
  { id: "PROG039", name: "Cybersecurity Essentials", courses: 5, date: "10/05/2024", org: "KLC Tech College", state: "Inactive" },
];

export default function ManagePrograms() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("Filter");
  const [condition, setCondition] = useState("Contains");
  const router = useRouter();
  const filteredPrograms = programsData.filter((program) => {
    if (!search) return true;
    const searchText = search.toLowerCase();
  
    switch (filterType) {
      case "Program Name":
        return condition === "Contains"
          ? program.name.toLowerCase().includes(searchText)
          : condition === "Equals"
          ? program.name.toLowerCase() === searchText
          : program.name.toLowerCase().startsWith(searchText);
  
      case "Program ID":
        return condition === "Contains"
          ? program.id.toLowerCase().includes(searchText)
          : condition === "Equals"
          ? program.id.toLowerCase().includes(searchText)
          : program.id.toLowerCase().startsWith(searchText);
  
      case "Status":
        return condition === "Equals"
          ? program.state.toLowerCase().includes(searchText)
          : false;
  
      default:
        return true;
    }
  });

  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-w-full">
   
    <div className="tw-w-full tw-bg-white tw-shadow-md tw-px-4 tw-py-2 tw-flex tw-items-center">
  
      <h1 className="tw-text-l tw-font-bold">Manage Programs</h1>
     
      <p className="tw-text-gray-500 tw-ml-4">Home &gt; Manage Programs</p>
    </div>
  
      <div className="tw-p-7 tw-bg-gray-150 tw-min-h-screen tw-flex tw-flex-col">
      <div className="tw-flex tw-text-blue-900 tw-font-bold tw-gap-4 tw-mb-5">
  <Select onValueChange={setFilterType}>
    <SelectTrigger className="tw-w-48 tw-bg-white tw-rounded-md tw-shadow-sm">
      <SelectValue placeholder={filterType} />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Program Name">Program Name</SelectItem>
      <SelectItem value="Status">Status</SelectItem>
      <SelectItem value="Program ID">Program ID</SelectItem>
    </SelectContent>
  </Select>

  <Select onValueChange={setCondition}>
    <SelectTrigger className="tw-w-48 tw-bg-white tw-rounded-md tw-shadow-sm">
      <SelectValue placeholder={condition} />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Equals">Equals to</SelectItem>
      <SelectItem value="Starts with">Starts with</SelectItem>
      <SelectItem value="Contains">Contains</SelectItem>
    </SelectContent>
  </Select>

  <Input
    type="text"
    placeholder="write"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="tw-w-40 tw-mr-6"
  />

  <Button variant="default" className="tw-ml-80" onClick={() => router.navigate({ to: '/program/add' })}>+ Add Program</Button>
</div>


<Card className="tw-shadow-md tw-rounded-lg">
  <Table>
    <TableHeader className="tw-bg-orange-300">
      <TableRow>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Program ID</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Program Name</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">No. of Courses</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Date Created</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Organization</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">State</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Add Student</TableHead>
        <TableHead className="tw-text-black tw-font-bold tw-whitespace-nowrap">Action</TableHead>
      </TableRow>
    </TableHeader>


          <TableBody>
            {filteredPrograms.map((program) => (
              <TableRow key={program.id}>
                <TableCell>{program.id}</TableCell>
                <TableCell className="tw-text-blue-900 tw-font-bold tw-cursor-pointer">{program.name}</TableCell>
                <TableCell>{program.courses} Courses</TableCell>
                <TableCell>{program.date}</TableCell>
                <TableCell>{program.org}</TableCell>
                <TableCell className={program.state === "Active" ? "tw-text-green-500" : "tw-text-red-500"}>{program.state}</TableCell>
                <TableCell className="tw-text-blue-900 tw-font-bold tw-cursor-pointer">Add</TableCell>
                <TableCell className="tw-flex tw-gap-2">
                  <FaEdit className="tw-text-gray-600 tw-cursor-pointer" />
                  <FaRegCopy className="tw-text-gray-600 tw-cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
     
    
      <div className="tw-flex tw-justify-between tw-items-center tw-mt-4">

  <p className="tw-text-gray-600">
    Page <span className="tw-font-bold tw-text-blue-900">1</span>
  </p>
  <div className="tw-flex tw-items-center tw-gap-8">
    <button className="tw-text-blue-900">&lt;</button> 
    <span className="tw-font-bold tw-text-blue-900">1</span>
    <span className="tw-text-gray-600">2</span>
    <span>..</span>
    <span className="tw-text-gray-600">10</span>
    <button className="tw-text-blue-900">&gt;</button> 
  </div>
</div>
    </div>
    </div>
    
  );
} 