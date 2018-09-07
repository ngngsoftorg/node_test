import 'babel-polyfill'
import fido from '../dist/fido.js';
import repl from '../dist/repl.js';
import assert from 'assert';

assert.equal(fido.rollover(), "*fido rolls over*");


describe('fido', function() {
    it('should return *fido rolls over*', function() {
        assert.equal(fido.rollover(), "*fido rolls over*");
    });
    it('should return *fido sticks out a paw*', function() {
        assert.equal(fido.shake(), "*fido sticks out a paw*");
    });
});

describe('fido.command()', function() {
    it('should return *fido rolls over*', function() {
        assert.equal(fido.command("rollover"), "*fido rolls over*");
    });
    it('should return *fido sticks out a paw*', function() {
        assert.equal(fido.command("shake"), "*fido sticks out a paw*");
    });
});

