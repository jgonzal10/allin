import express from 'express';
import controller from '../controllers/patients';
const router = express.Router();

router.get('/patients', controller.getPatients);
router.get('/patients/:id', controller.getPatient);
router.put('/patients/:id', controller.updatePatient);
router.delete('/patients/:id', controller.deletePatient);
router.post('/patients', controller.addPatient);

export = router;