var rework = require('rework');
var fs = require('fs');
var read = fs.readFileSync;
var should = require('chai').should();

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('grunt-rework-inline', function () {
  it('should inline images', function () {
    fixture('inline').should.equal(fixture('inline.out'));
    fs.createReadStream('test/fixtures/inline.css.tmp').pipe(fs.createWriteStream('test/fixtures/inline.css'));
  });
});
