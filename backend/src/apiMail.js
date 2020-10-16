var API_KEY = '46afc6caa8684583293295b9ef5e47d2-2fbe671d-eb4c0f83';
var DOMAIN = 'sandbox722aeaa405834e11b5ea69fe8dff8495.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'natyap28@hotmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  return body
});

export default data;
