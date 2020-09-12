import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema ({
    text:{
        type: String,
        trim: true,
        required: [true, 'Please add text.']
    },
    amount:{
        type:Number,
        required:[true, 'Please add a negative or positive amount.']
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

export default mongoose.model('Transaction', transactionSchema)