const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
  async index(request,response){
    const {latitude,longitude,techs} = request.query;
    
    const techsArray = parseStringAsArray(techs);
    
    const dev = await Dev.find({
      techs: {
        $in: techsArray
      },
      location:{
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [longitude,latitude]
          },
          $maxDistance: 10000,//10 mil metros
        }
      }
    })

    return response.json(dev)
  }
}