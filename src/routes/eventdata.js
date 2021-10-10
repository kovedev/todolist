const { Router } = require('express');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = Router();;

router.get('/', asyncMiddleware(async (req, res) => {
  try {
    const eventData = await req.context.models.EventData.findAll();
    return res.json({success: true, eventData, response: "Event history data found!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

router.post('/', asyncMiddleware(async (req, res) => {
  try {
    const eventData = await req.context.models.EventData.create({
      sensor1: req.body.sensor1,
      sensor2: req.body.sensor2,
      sensor3: req.body.sensor3,
      sensor4: req.body.sensor4,
      date: req.body.date,
    });
    return res.json({success: true, eventData, response: "Event history data saved!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

module.exports = router;