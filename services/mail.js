'use strict'
var config = {
  connectionString: '',
  sendgridKey: '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',
  containerConnectionString: ''
}
var sendgrid = require('sendgrid')(config.sendgridKey)

exports.sendService = async (to, subject, body)=>{
  sendgrid.send({
    to: 'tecshopoficial@gmail.com',
    from: to,
    subject: subject,
    html: body
  })
}