import PropertyForm from "../components/PropertyForm";
import { useNavigate } from "react-router-dom";
import { addProperty } from "@/lib/storage/properties";

export default function AddProperty() {
  const navigate = useNavigate();

  const handleAdd = (data: any) => {
    addProperty({
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    });

    navigate("/admin/properties");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Property</h1>
      <PropertyForm onSubmit={handleAdd} />
    </div>
  );
}