//http requests for crud functions (Basic APIs)

const express = require('express');
const Income_Expenditure = require('../models/income_expenditure');

//invoke function to send request(to access routes) -> express router
const router = express.Router();


//Create (save) -------------------------------------------------------------------------
router.post('/income_expenditure/save', (req, res) => {

    let newIncome_Expenditure = new Income_Expenditure(req.body);

    newIncome_Expenditure.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Transaction Record saved successfully.."
        });
    });

});


//Read (get) -----------------------------------------------------------------------------
router.get('/income_expenditure', (req, res) => {
    Income_Expenditure.find().exec((err, Income_Expenditure) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingRecords: Income_Expenditure
        });
    });
});


//Read (get a specific record)-----------------------------------------------------------
router.get('/income_expenditure/:id', (req, res) => {
    let income_expenditureId = req.params.id;

    Income_Expenditure.findById(income_expenditureId, (err, Income_Expenditure) => {
        if(err){
            return res.status(400).json({
                success: false, 
                err
            });
        }

        return res.status(200).json({
            success: true,
            Income_Expenditure
        });
    });
});


//Update  -------------------------------------------------------------------------------
router.put('/income_expenditure/update/:id', (req, res) => {
    Income_Expenditure.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, Income_Expenditure) => {
            if(err){
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully..."
            });
        }
    );
});


//Delete -------------------------------------------------------------------------------
router.delete('/income_expenditure/delete/:id', (req, res) => {
    Income_Expenditure.findByIdAndRemove(req.params.id).exec((err, deletedRecord) => {
        if(err){
            return res.status(400).json({
                message: "Delete unsuccessful", err
            });
        }

        return res.status(200).json({
            success: "Record deleted successfully", deletedRecord
        });
    });
})

module.exports = router;

module.exports = router;