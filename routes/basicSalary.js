//http requests for crud functions  (Basic APIs)

const express = require('express');
const BasicSalary = require('../models/basicSalary');

//invoke function to send request(to access routes) -> express router
const router = express.Router();


//Create (save) -------------------------------------------------------------------------
router.post('/basicSalary/save', (req, res) => {

    let newBasicSalary = new BasicSalary(req.body);

    newBasicSalary.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Basic Salary Record saved successfully.."
        });
    });

});


//Read (get) -----------------------------------------------------------------------------
router.get('/basicSalary', (req, res) => {
    BasicSalary.find().exec((err, BasicSalary) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingRecords: BasicSalary
        });
    });
});


//Read (get a specific record)-----------------------------------------------------------
router.get('/basicSalary/:id', (req, res) => {
    let basicSalaryId = req.params.id;

    BasicSalary.findById(basicSalaryId, (err, BasicSalary) => {
        if(err){
            return res.status(400).json({
                success: false, 
                err
            });
        }

        return res.status(200).json({
            success: true,
            BasicSalary
        });
    });
});


//Update  -------------------------------------------------------------------------------
router.put('/basicSalary/update/:id', (req, res) => {
    BasicSalary.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, BasicSalary) => {
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
router.delete('/basicSalary/delete/:id', (req, res) => {
    BasicSalary.findByIdAndRemove(req.params.id).exec((err, deletedRecord) => {
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