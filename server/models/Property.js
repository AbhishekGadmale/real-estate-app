const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  amenities: [{ type: String }],
  status: { type: String, enum: ['available', 'sold'], default: 'available' },
  featured: { type: Boolean, default: false },
  tag: { type: String },
  propertyType: { type: String, enum: ['apartment', 'villa', 'house', 'condo', 'plot'], required: true },
  createdAt: { type: Date, default: Date.now }
});

propertySchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model("Property", propertySchema);