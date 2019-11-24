"use strict";

// Add new error message here and use them from here
const ErrorMessage = {
  invalidShop: "Expected a valid shop.",
  invalidAccessToken: "Expected a valid shop credential.",
  nonExistData: "Data does not exist."
};

function throwError(message) {
  throw new Error(message);
}

async function catchError(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
}

async function logError(err, ctx) {
  /* centralized error handling:
   *   console.log error
   *   write error to log file
   *   save error and request information to database if ctx.request match condition
   *   ...
   */
  console.log(err);
}

module.exports = { catchError, logError, ErrorMessage, throwError};
