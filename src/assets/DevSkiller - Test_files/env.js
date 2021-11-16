'use strict';

(function (window) {
  var $env = window.$env = window.$env || {};

  $env.name = 'prod';

  $env.frontUrl = 'https://app.devskiller.com';
  $env.apiUrl = '/rest';
  $env.websocketHost = 'https://exam.devskiller.com';
  $env.candidateUrl = 'https://exam.devskiller.com';

  $env.firebaseConfig = {
    apiKey: 'AIzaSyA0uD9GSIxi_iNckgrA2hap_m9y2v4DQ1E',
    authDomain: 'devskiller-prod.firebaseapp.com',
    databaseURL: 'https://devskiller-prod.firebaseio.com',
    storageBucket: 'devskiller-prod.appspot.com'
  };

  $env.recaptchaSiteKey = '6LdYGToUAAAAAGMOrv7yxEhA21ngdeeh1ScKUCYH';
  $env.assetUrl = 'https://static.devskiller.com/exam/';
  $env.runtimeInfoUrl = 'https://static.devskiller.com/runtime/runtime-info.json';

}(window));
