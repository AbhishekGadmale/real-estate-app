import { Link } from "react-router-dom";
import { useProperties, useDeleteProperty } from "@/hooks/useProperties";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Properties() {
  const { data: properties = [], isLoading, error } = useProperties();
  const deleteMutation = useDeleteProperty();

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await deleteMutation.mutateAsync(id);
        toast.success("Property deleted successfully");
      } catch (err) {
        toast.error("Failed to delete property");
      }
    }
  };

  if (isLoading) return <div className="p-6">Loading properties...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading properties</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Properties</h1>

        <Link to="/admin/properties/add">
          <Button>+ Add Property</Button>
        </Link>
      </div>

      {properties.length === 0 ? (
        <p className="text-gray-500">No properties found</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3 font-medium">{p.title}</td>
                  <td className="p-3">{p.location}</td>
                  <td className="p-3">${p.price.toLocaleString()}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {p.status}
                    </span>
                  </td>

                  <td className="p-3 text-right space-x-2">
                    <Link
                      to={`/admin/properties/edit/${p.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}