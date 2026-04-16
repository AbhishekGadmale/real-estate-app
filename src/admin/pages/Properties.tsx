import { Link } from "react-router-dom";
import { getProperties, deleteProperty } from "@/lib/storage/properties";
import { Button } from "@/components/ui/button";

export default function Properties() {
  const properties = getProperties();

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
                  <td className="p-3">${p.price}</td>
                  <td className="p-3">{p.status}</td>

                  <td className="p-3 text-right space-x-2">
                    <Link
                      to={`/admin/properties/edit/${p.id}`}
                      className="text-blue-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => {
                        deleteProperty(p.id);
                        window.location.reload();
                      }}
                      className="text-red-600"
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