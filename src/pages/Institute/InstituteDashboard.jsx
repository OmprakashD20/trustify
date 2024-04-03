import DataTable from "@/components/DataTable/DataTable";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "certificateIssued",
    header: "Certificate Issued",
  },
  {
    accessorKey: "revokeCertificate",
    header: "Revoke Certificate",
  },
];

const InstituteDashboard = () => {
  return (
    <div className="pt-16 md:pt-24 pb-10 h-[100dvh] flex items-start justify-center">
      <DataTable columns={columns} data={[]} className={"w-full mx-8"} />
    </div>
  );
};

export default InstituteDashboard;
