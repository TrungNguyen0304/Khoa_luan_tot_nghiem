const reviewSchema = new Schema({
    booking_id: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
    rating: { type: Number, required: true },
    feedback: { type: String },
   
  },
  {
    timestamps: true,
  });
  
  module.exports = mongoose.model('Review', reviewSchema);
  