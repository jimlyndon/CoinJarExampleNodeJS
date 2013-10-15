var coinjar = require('coinjar')
  , async = require('async')
  , cj = new coinjar({
      auth_token: 'sFMzjhnp633sFzgzUMDfN6kVxkY9EWCe6NxiwzqQyBXnqGpv',
      sandbox: true
    })
  , results = {
      user: {},
      transactions: [],
      bitcoin_addresses: [],
      fair_rates: []
    };

function fair_rate(currency, callback) {
  cj.personal.fair_rate(currency, function(error, response) {
    if(error) { callback(error); }
    response.currency = currency;
    callback(null, response);
  });
}

function user(callback) {
  cj.personal.account(function (error, response) {
    if(error) { callback(error); }
    results.user = response;
    callback();
  });
}

function transactions(callback) {
  cj.personal.transactions(function (error, response) {
    if(error) { callback(error); }
    results.transactions = response;
    callback();
  });
}

function bitcoin_addresses(callback) {
  cj.personal.bitcoin_addresses(function (error, response) {
    if(error) { callback(error); }
    results.bitcoin_addresses = response;
    callback();
  });
}

exports.index = function(req, res, next) {
  // make all coinjar api calls in parallel
  async.parallel([user, transactions, bitcoin_addresses], function(err) { // executes after all functions return
    if (err) {
      return next(err); // let express/connect handle errors by calling the "next" function
    }

    // get fair rates
    async.map(['AUD','USD', 'NZD', 'EUR'], fair_rate, function(error, response) {
        if(error) { return; }
        results.fair_rates = response;
        res.render('index', results);
    });
  });
};