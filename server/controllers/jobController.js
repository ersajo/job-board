const opportunityService = require('../services/opportunityService');

const createJob = async (req, res) => {
  try {
    const { title, description, location, minSalary, maxSalary, skills } = req.body;
    const job = await opportunityService.createOne({
      companyId: req.user.id,
      title,
      description,
      location,
      minSalary,
      maxSalary,
      skills,
    });
    console.log("Job created successfully on database");
    return res.status(201).json(job);
  } catch (error) {
    console.log('Error to create job:', error);
    return res.status(500).json({ error: error });
  }
}

const getJobs = async (req, res) => {
  try {
    const jobs = await opportunityService.getAllByCompany(req.user.id);
    return res.status(200).json(jobs);
  } catch (error) {
    console.log('Error to find jobs:', error);
    return res.status(500).json({ error: error });
  }
}

const getDetailedJob = async (req, res) => {
  try {
    const job = await opportunityService.getOneById(req.params.id);
    if (job.companyId !== req.user.id) return res.status(500).json({ error: 'Not authorized' });
    return res.status(200).json(job);
  } catch (error) {
    console.log('Error to find job:', error);
    return res.status(500).json({ error: error });
  }
}

const updateJob = async (req, res) => {
  try {
    const { title, description, location, minSalary, maxSalary, skills } = req.body;
    const job = await opportunityService.getOneById(req.params.id);
    if (job.companyId !== req.user.id) return res.status(500).json({ error: 'Not authorized' });
    const updatedJob = await opportunityService.updateOne({
      id: req.params.id,
      title,
      description,
      location,
      minSalary,
      maxSalary,
      skills,
    });
    console.log("Job updated successfully on database");
    return res.status(200).json(updatedJob);
  } catch (error) {
    console.log('Error to update job:', error);
    return res.status(500).json({ error: error });
  }
}

const deleteJob = async (req, res) => {
  try {
    const job = await opportunityService.getOneById(req.params.id);
    if (job.companyId !== req.user.id) return res.status(500).json({ error: 'Not authorized' });
    const deletedJob = await opportunityService.deleteOne(req.params.id);
    console.log("Job deleted successfully on database");
    return res.status(200).json(deletedJob);
  } catch (error) {
    console.log('Error to delete job:', error);
    return res.status(500).json({ error: error });
  }
}

const getAll = async (req, res) => {
  try {
    const query = req.query;
    const jobs = await opportunityService.getAll(query);
    return res.status(200).json(jobs);
  } catch (error) {
    console.log('Error to find jobs:', error);
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  createJob,
  getJobs,
  getDetailedJob,
  updateJob,
  deleteJob,
  getAll,
}