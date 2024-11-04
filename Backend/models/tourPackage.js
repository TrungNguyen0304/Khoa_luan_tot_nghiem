const tourPackageSchema = new Schema({
    package_name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    duration: { type: String },
    destination_id: { type: Schema.Types.ObjectId, ref: 'Destination', required: true },
  
  },
  {
    timestamps: true,
  });
  
  module.exports = mongoose.model('TourPackage', tourPackageSchema);
  