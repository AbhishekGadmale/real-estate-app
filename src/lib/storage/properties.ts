import { Property } from "@/types";
import { properties as seedProperties } from "@/lib/data";

const KEY = "estate_properties";

/**
 * Get all properties (seeded once)
 */
export const getProperties = (): Property[] => {
  const data = localStorage.getItem(KEY);

  if (data) return JSON.parse(data);

  localStorage.setItem(KEY, JSON.stringify(seedProperties));
  return seedProperties;
};

/**
 * Save all properties
 */
export const saveProperties = (data: Property[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

/**
 * Add property
 */
export const addProperty = (property: Property) => {
  const all = getProperties();
  const updated = [...all, property];
  saveProperties(updated);
};

/**
 * Update property
 */
export const updateProperty = (updatedProperty: Property) => {
  const all = getProperties().map((p) =>
    p.id === updatedProperty.id ? updatedProperty : p
  );

  saveProperties(all);
};

/**
 * Delete property
 */
export const deleteProperty = (id: string) => {
  const all = getProperties().filter((p) => p.id !== id);
  saveProperties(all);
};