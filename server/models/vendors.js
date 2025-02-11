import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vendorSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name cannot be empty!"]
    },
    // email: {
    //     type: String,
    //     required: [true, "Email cannot be empty!"]
    // },
    mobileNumber: {
        type: Number,
        required: [true, 'Mobile Number cannot be empty!']
    },
    // latitude: {
    //     type: Number,
    //     required: [true, 'latitude is required']
    // },
    // longitude: {
    //     type: Number,
    //     required: [true, 'longitude is required']
    // }
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;