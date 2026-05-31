import PropertyForm from "../components/PropertyForm";
import { useNavigate } from "react-router-dom";
import { useAddProperty } from "@/hooks/useProperties";
import { toast } from "sonner";

export default function AddProperty() {
  const navigate = useNavigate();
  const addMutation = useAddProperty();

  const handleAdd = async (data: any) => {
    try {
      await addMutation.mutateAsync(data);
      toast.success("Property added successfully");
      navigate("/admin/properties");
    } catch (error) {
      toast.error("Failed to add property");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Property</h1>
      <PropertyForm onSubmit={handleAdd} />
    </div>
  );
}