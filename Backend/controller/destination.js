const Destination = require("../models/destination");
const bcrypt = require("bcrypt");

// API to add a new destination
const createDestination = async (req, res) => {
  try {
    const { DestinationName, Images, Tours } = req.body;
    const newDestination = new Destination({
      DestinationName,
      Images,
      Tours,
    });
    await newDestination.save();
    res.status(201).json({
      message: "Destination added successfully!",
      destination: newDestination,
    });
  } catch (error) {
    console.error("Error adding destination:", error);
    res.status(500).json({ message: "Error adding destination", error });
  }
};

// Api delete destination
const deleteDestination = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteDestination = await Destination.findByIdAndDelete(id);
    if (!deleteDestination) {
      return res.status(404).json({ message: "Destination does not exist." });
    }
    res
      .status(200)
      .json({ message: "The destination has been successfully deleted" });
  } catch (error) {
    console.error("Error when deleting destination:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Api edit destination
const editDestination = async (req, res) => {
  const { id } = req.params;
  const { DestinationName, Images, Tours } = req.body;
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      { DestinationName, Images, Tours, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination does not exist." });
    }
    res.status(200).json({
      message: "Destination updated successfully!",
      destination: updatedDestination,
    });
  } catch (error) {
    console.error("Error when editing destination:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// API get all destination
const getAllDestination = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    res.status(200).json(destinations);
  } catch (error) {
    console.error("Error getting list of destinations", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createDestination,
  deleteDestination,
  editDestination,
  getAllDestination,
};
