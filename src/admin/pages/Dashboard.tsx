import { useEffect, useState } from 'react';
import { Building2, Users, Eye, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { getStoredProperties, getStoredLeads } from '@/lib/data';
import type { Property, Lead } from '@/types';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: React.ElementType;
  color: string;
}

function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {changeType === 'positive' ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    setProperties(getStoredProperties());
    setLeads(getStoredLeads());
  }, []);

  const stats = {
    totalProperties: properties.length,
    availableProperties: properties.filter(p => p.status === 'available').length,
    totalLeads: leads.length,
    totalValue: properties.reduce((sum, p) => sum + (p.status === 'available' ? p.price : 0), 0),
  };

  const recentLeads = leads.slice(-5).reverse();
  const recentProperties = properties.slice(-5).reverse();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here is what is happening with your properties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Properties" value={stats.totalProperties} change="+2 this month" changeType="positive" icon={Building2} color="bg-blue-600" />
        <StatCard title="Available" value={stats.availableProperties} change={`${Math.round((stats.availableProperties / stats.totalProperties) * 100)}% of total`} changeType="positive" icon={Eye} color="bg-green-600" />
        <StatCard title="Total Leads" value={stats.totalLeads} change="+3 this week" changeType="positive" icon={Users} color="bg-purple-600" />
        <StatCard title="Portfolio Value" value={`$${(stats.totalValue / 1000000).toFixed(1)}M`} icon={Building2} color="bg-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Properties</h2>
          </div>
          <div className="divide-y">
            {recentProperties.length > 0 ? recentProperties.map((property) => (
              <div key={property.id} className="p-4 flex items-center space-x-4">
                <img src={property.images[0]} alt={property.title} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{property.title}</p>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <p className="text-sm font-medium text-blue-600">${property.price.toLocaleString()}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${property.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {property.status}
                </span>
              </div>
            )) : <div className="p-8 text-center text-gray-500">No properties yet</div>}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
          </div>
          <div className="divide-y">
            {recentLeads.length > 0 ? recentLeads.map((lead) => (
              <div key={lead.id} className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <span className="text-xs text-gray-400">{new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{lead.phone}</p>
                {lead.propertyTitle && <p className="text-sm text-blue-600">Interested in: {lead.propertyTitle}</p>}
              </div>
            )) : <div className="p-8 text-center text-gray-500">No leads yet</div>}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <a href="/admin/properties/add" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Building2 className="h-4 w-4 mr-2" /> Add New Property
          </a>
          <a href="/admin/properties" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Eye className="h-4 w-4 mr-2" /> View All Properties
          </a>
          <a href="/admin/leads" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Users className="h-4 w-4 mr-2" /> View All Leads
          </a>
        </div>
      </div>
    </div>
  );
}
