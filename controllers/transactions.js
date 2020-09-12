import Transaction from '../models/Transaction.js'
// @desc Get all the transactions
// @route GET /api/v1/transactions
// @access Public
const getTransactions = async (req, res) =>{
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc Add a new transaction
// @route POST /api/v1/transactions
// @access Public
const addTransaction = async(req, res)=>{
    try{
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch(err){
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val=> val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}


// @desc Delete a transaction
// @route POST /api/v1/transactions/:id
// @access Public
const deleteTransaction = async(req, res)=>{
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        await transaction.remove();
        return res.status(200).json({
            success: true
        })
    } catch (error) {
         return res.status(500).json({
             success: false,
             error: 'Server error'
         })
    }
}

export {addTransaction, getTransactions, deleteTransaction}