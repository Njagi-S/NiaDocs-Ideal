import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, resultsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
}

const columns = [
  {
    header:"Subject Name",
    accessor:"subject",
  },
  {
    header:"Class",
    accessor:"class",
  },
  {
    header:"Teacher",
    accessor:"teacher",
    className:"hidden md:table-cell"
  },
  {
    header:"Student Name",
    accessor:"student",
    className:"hidden md:table-cell"
  },
  {
    header:"Date",
    accessor:"date",
    className:"hidden md:table-cell"
  },
  {
    header:"Type",
    accessor:"type",
    className:"hidden md:table-cell"
  },
  {
    header:"Score",
    accessor:"score",
    className:"hidden md:table-cell"
  },
  {
    header:"Actions",
    accessor:"actions"
  },
]

const ResultListPage = () => {

  const renderRow =(items:Result) => (
    <tr key={items.id} className="border-b border-gray-200 even:bg-slate-200 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{items.subject}</h3>
        </div>
      </td>
      <td>{items.class}</td>
      <td className="hidden md:table-cell">{items.teacher}</td>
      <td className="hidden md:table-cell">{items.student}</td>
      <td className="hidden md:table-cell">{items.date}</td>
      <td className="hidden md:table-cell">{items.type}</td>
      <td className="hidden md:table-cell">{items.score}</td>
      <td>
       <div className="flex items-center gap-2">
        <Link href={`/list/results/${items.id}`} className="">
            <button className=" w-7 h-7 flex items-center justify-center rounded-full  bg-lamaSky">
              <Image src="/view.png" alt="view" width={16} height={16}/>
            </button>
          </Link>
         {role === "admin" && (<Link href={`/list/results/${items.id}`} className="">
            <button className=" w-7 h-7 flex items-center justify-center rounded-full  bg-lamaYellow">
              <Image src="/edit.png" alt="edit" width={16} height={16}/>
            </button>
          </Link>)}
          {role === "admin" && (<button className=" w-7 h-7 flex items-center justify-center rounded-full  bg-lamaPurple">
            <Image src="/delete.png" alt="delete" width={16} height={16}/>
          </button> )}         
       </div>
      </td>
    </tr>
  );

  return (
    <div className ="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter" width={14} height={14}/>
            </button >
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sort" width={14} height={14}/>
            </button>
            {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="add" width={14} height={14}/>
            </button>)}
          </div>
        </div>
      </div>
      {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={resultsData}/>
      {/* PAGINATION */}
        <Pagination/>
    </div>
  )
}

export default ResultListPage;