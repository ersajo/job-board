const express = require('express');
const CompanyController = require('../controllers/companyController');
const JobController = require('../controllers/jobController');
const { verifyCompanyToken } = require('../middleware/index');

const router = express.Router();

// Company CRUD
router.post('/', CompanyController.createOne);
router.get('/', verifyCompanyToken, CompanyController.getOne);
router.put('/', verifyCompanyToken, CompanyController.updateOne);
router.delete('/', verifyCompanyToken, CompanyController.deleteOne);

// Company auth
router.post('/login', CompanyController.login);

// Company jobs
router.post('/jobs', verifyCompanyToken, JobController.createJob);
router.get('/jobs', verifyCompanyToken, JobController.getJobs);
router.get('/jobs/:id', verifyCompanyToken, JobController.getDetailedJob);
router.get('/jobs/:id/candidates', verifyCompanyToken, JobController.getCandidatesByJob);
router.put('/jobs/:id', verifyCompanyToken, JobController.updateJob);
router.delete('/jobs/:id', verifyCompanyToken, JobController.deleteJob);

module.exports = router;