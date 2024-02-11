const cloudinary = require("cloudinary")

cloudinary.config({ 
    cloud_name: 'do7pjvf9b', 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
  });


module.exports = {cloudinary}