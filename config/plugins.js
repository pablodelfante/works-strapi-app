module.exports = ({ env }) => ({
    // coneccion con cloudinary
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
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