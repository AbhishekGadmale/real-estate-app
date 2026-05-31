import { useParams, useNavigate } from "react-router-dom";
import PropertyForm from "../components/PropertyForm";
import { useProperty, useUpdateProperty } from "@/hooks/useProperties";
import { toast } from "sonner";

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: property, isLoading, error } = useProperty(id!);
  const updateMutation = useUpdateProperty();

  const handleUpdate = async (data: any) => {
    try {
      await updateMutation.mutateAsync({ ...data, id: id! });
      toast.success("Property updated successfully");
      navigate("/admin/properties");
    } catch (err) {
      toast.error("Failed to update property");
    }
  };

  if (isLoading) return <div className="p-6">Loading property...</div>;
  if (error || !property) return <div className="p-6 text-red-500">Property not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Property</h1>
      <PropertyForm property={property} isEdit onSubmit={handleUpdate} />
    </div>
  );
}