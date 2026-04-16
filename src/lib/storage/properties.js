import { properties as seedProperties } from "@/lib/data";
const KEY = "estate_properties";
/**
 * Get all properties (seeded once)
 */
export const getProperties = () => {
    const data = localStorage.getItem(KEY);
    if (data)
        return JSON.parse(data);
    localStorage.setItem(KEY, JSON.stringify(seedProperties));
    return seedProperties;
};
/**
 * Save all properties
 */
export const saveProperties = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
};
/**
 * Add property
 */
export const addProperty = (property) => {
    const all = getProperties();
    const updated = [...all, property];
    saveProperties(updated);
};
/**
 * Update property
 */
export const updateProperty = (updatedProperty) => {
    const all = getProperties().map((p) => p.id === updatedProperty.id ? updatedProperty : p);
    saveProperties(all);
};
/**
 * Delete property
 */
export const deleteProperty = (id) => {
    const all = getProperties().filter((p) => p.id !== id);
    saveProperties(all);
};
