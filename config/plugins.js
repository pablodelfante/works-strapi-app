module.exports = ({ env }) => ({
    // coneccion con cloudinary
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'lapabla'),
        api_key: env('CLOUDINARY_KEY', 625372782318994),
        api_secret: env('CLOUDINARY_SECRET', 'BHFI5cWUKSmr1tA9DJIw9opAu5Y'),
      }
      //---------
    },
    // ...
  });