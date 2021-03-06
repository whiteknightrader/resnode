const { body } = require('express-validator/check')

exports.validate = (method, req) => {
  switch (method) {
    case 'deposit': {
      req.checkBody('locktime', 'locktime must be a 10 digit unix epoch timestamp').exists().isNumeric().matches(/^\d{10,10}$/)
      req.checkBody('pubkey', 'pubkey is the 66 character public key associated with your ResDEX account').exists().matches(/^\w{66,66}$/)
      break
    }
    case 'verifyScript': {
      req.checkBody('address', 'the p2sh address you are verifying').exists()
      req.checkBody('script', 'the buffer of the script you are verifying').exists()
      break
    }
    default: {
      break
    }
  }
  return req.validationErrors()
}
