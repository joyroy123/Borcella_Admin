"use client";

import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns= [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Price (BDT)",
  },
  {
    accessorKey: "expense",
    header: "Expense (BDT)",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];