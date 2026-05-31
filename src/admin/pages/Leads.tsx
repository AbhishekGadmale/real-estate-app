import { useLeads } from "@/hooks/useLeads";

export default function Leads() {
  const { data: leads = [], isLoading, error } = useLeads();

  if (isLoading) return <div className="p-6">Loading leads...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading leads</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Leads</h1>

      {leads.length === 0 ? (
        <p className="text-gray-500">No leads yet</p>
      ) : (
        <div className="grid gap-4">
          {leads.map((lead) => (
            <div key={lead.id} className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
...
                <p className="font-semibold">{lead.name}</p>
                <span className="text-xs text-gray-500">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                📞 {lead.phone}
              </p>

              <p className="text-sm text-gray-600">
                ✉️ {lead.email || "No email"}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {lead.message}
              </p>

              {lead.propertyTitle && (
                <p className="mt-2 text-xs text-blue-600">
                  Interested in: {lead.propertyTitle}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}