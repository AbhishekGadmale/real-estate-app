import { sampleLeads } from "@/lib/data";
const KEY = "estate_leads";
/**
 * Get all leads (seeded once)
 */
export const getLeads = () => {
    const stored = localStorage.getItem(KEY);
    if (stored)
        return JSON.parse(stored);
    localStorage.setItem(KEY, JSON.stringify(sampleLeads));
    return sampleLeads;
};
/**
 * Save all leads
 */
export const saveLeads = (leads) => {
    localStorage.setItem(KEY, JSON.stringify(leads));
};
/**
 * Add lead (for contact forms later)
 */
export const addLead = (lead) => {
    const all = getLeads();
    const newLead = {
        ...lead,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
    };
    saveLeads([...all, newLead]);
    return newLead;
};
