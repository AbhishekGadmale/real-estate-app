import { useParams, useNavigate } from "react-router-dom";
import PropertyForm from "../components/PropertyForm";
import { getProperties, updateProperty } from "@/lib/storage/properties";

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = getProperties().find((p) => p.id === id);

  const handleUpdate = (data: any) => {
    updateProperty({
      ...data,
      id: id!,
    });

    navigate("/admin/properties");
  };

  if (!property) return <p>Property not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Property</h1>
      <PropertyForm property={property} isEdit onSubmit={handleUpdate} />
    </div>
  );
}