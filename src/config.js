"use strict";

exports.defaults = function() {
  return {
    nunjucks: {
      extensions: [ "njs" ],
      options: {}
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  nunjucks:               # config settings for the Nunjucks compiler module\n" +
         "    lib: undefined          # use this property to provide a specific version of Nunjucks\n" +
         "    extensions: [\"njs\"]  # default extensions for Nunjucks files\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "nunjucks config", config.nunjucks ) ) {

    if ( !config.nunjucks.lib ) {
      config.nunjucks.lib = require( "nunjucks" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "nunjucks.extensions", config.nunjucks.extensions ) ) {
      if (config.nunjucks.extensions.length === 0) {
        errors.push( "nunjucks.extensions cannot be an empty array");
      }
    }

    validators.ifExistsIsObject( errors, "nunjucks config", config.nunjucks.options );
  }

  return errors;
};