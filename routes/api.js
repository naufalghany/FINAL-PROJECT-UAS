// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});


// Routing patient
router.get("/patient", PatientController.index);
router.post("/patient", patientController.store);
router.put("/patient/:id", patientController.update);
router.delete("/patient/:id", patientController.destroy);
router.get("/patient/:id", patientController.show);
router.search("/patient/:id", patientController.search);
router.positive("/patient/status/positive", patientController.positive);
router.recovered("/patient/status/recovered", patientController.recovered);
router.dead("/patient/status/dead", patientController.dead);

// export router
module.exports = router;
