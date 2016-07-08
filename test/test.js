'use strict';

var Potrace = require('../lib/index').Potrace,
    potrace = new Potrace(),
    fs = require('fs');

potrace.loadImage('./yao.jpg', function(err) {
  if (err) {
    throw err;
  }

  fs.writeFileSync('./output-x1.svg', potrace.getSVG(1));
  fs.writeFileSync('./output-x2.svg', potrace.getSVG(2));
  fs.writeFileSync('./output-x0.5.svg', potrace.getSVG(0.5));
  fs.writeFileSync('./output-x0.25.svg', potrace.getSVG(0.25));

  fs.writeFileSync('./output-x1-curves.svg', potrace.getSVG(1, 'curve'));
});