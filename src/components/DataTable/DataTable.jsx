import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/utils";

const DataTable = ({ className, columns, data }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });
  const tableHeaderStyle =
    "w-[100px] text-center text-indigo-600 dark:text-indigo-600 font-spaceGrotesk";
  const tableBodyStyle = "w-[270px] text-center font-spaceGrotesk";

  return (
    <div className={cn("flex flex-col w-3/4", className)}>
      <div className={cn("rounded-md border-2 border-indigo-600/35 w-full")}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className={cn(tableHeaderStyle)} key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className={cn(tableBodyStyle)} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center dark:text-neutral-100 text-neutral-950 text-base"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4 mr-2">
          <Button
            className="rounded-lg border-2 border-indigo-500/50 bg-black/50 px-4 py-2 font-medium dark:text-neutral-100 transition-colors hover:bg-slate-950/60 font-spaceGrotesk disabled:dark:text-indigo-600 disabled:bg-neutral-200"
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="rounded-lg border-2 border-indigo-500/50 bg-black/50 px-4 py-2 font-medium dark:text-neutral-100 transition-colors hover:bg-slate-950/60 font-spaceGrotesk disabled:dark:text-indigo-600 disabled:bg-neutral-200"
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
