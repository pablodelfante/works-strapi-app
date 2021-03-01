module.exports = ({ env }) => ({
    // coneccion con cloudinary
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'lapabla'),
        api_key: env('CLOUDINARY_KEY', 625372782318994),
        api_secret: env('CLOUDINARY_SECRET', BHFI5cWUKSmr1tA9DJIw9opAu5Y),
      },
      //midleware parser tamaño maximo de imagenes
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 2000 * 2000 // Defaults to 200mb
        }
      },
      breakpoints: {
        xlarge: 0,
        large: 0,
        medium: 0,
        small: 0,
        xsmall: 0
      }
      //---------
    },
    // ...
  });