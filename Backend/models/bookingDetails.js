const bookingDetailsSchema = new Schema({
    booking_id: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
    name: { type: String, required: true },
    age: { type: Number },
    special_requests: { type: String },
    
  },
  {
    timestamps: true,
  });
  
  module.exports = mongoose.model('BookingDetails', bookingDetailsSchema);
  