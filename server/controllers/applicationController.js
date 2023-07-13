const { dirname } = require('path');
const applicationService = require('../services/applicationService');

const appDir = dirname(require.main.filename);

const create = async (req, res) => {
  try {
    const { opportunityId } = req.body;
    let resumeFile = req.files.resume;
    let uploadPath = appDir + '/uploads/resumes/' + req.user.id + '&' + opportunityId + '.pdf';
    resumeFile.mv(uploadPath, async function (err) {
      if (err) {
        throw new Error(err);
      } else {
        const application = await applicationService.createOne({
          userId: req.user.id,
          resume: uploadPath,
          opportunityId,
          applied: true,
        });
        return res.status(200).json(application);
      }
    });
  } catch (error) {
    console.log('Error to create application:', error);
    return res.status(500).json({ error: error });
  }
}

const getAllByUser = async (req, res) => {
  try {
    const applications = await applicationService.getAllByUser(req.user.id);
    return res.status(200).json(applications);
  } catch (error) {
    console.log('Error to find applications:', error);
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  create,
  getAllByUser,
}