require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const Property = require("../models/Property");

const properties = [
  {
    title: 'Modern Downtown Apartment',
    price: 450000,
    location: 'Downtown, New York',
    images: ['/images/property-1.jpg', '/images/property-3.jpg', '/images/property-5.jpg'],
    description: 'Experience urban living at its finest in this stunning modern apartment. Featuring floor-to-ceiling windows, an open-concept layout, and premium finishes throughout.',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    amenities: ['Parking', 'Gym', 'Pool', 'Concierge'],
    status: 'available',
    featured: true,
    tag: 'featured',
    propertyType: 'apartment'
  },
  {
    title: 'Luxury Mediterranean Villa',
    price: 1200000,
    location: 'Beverly Hills, California',
    images: ['/images/property-2.jpg', '/images/property-6.jpg', '/images/property-8.jpg'],
    description: 'This exquisite Mediterranean-style villa offers the ultimate in luxury living. Set on a beautifully landscaped lot, the property features a stunning pool.',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    amenities: ['Pool', 'Garden', 'Parking', 'Gym'],
    status: 'available',
    featured: true,
    tag: 'hot',
    propertyType: 'villa'
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data
    await Admin.deleteMany({});
    await Property.deleteMany({});

    // Create Admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);
    
    await Admin.create({
      name: "Admin User",
      email: "admin@estatepro.com",
      password: hashedPassword
    });
    console.log("Admin user created");

    // Create Properties
    await Property.insertMany(properties);
    console.log("Sample properties created");

    console.log("Seeding completed successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
