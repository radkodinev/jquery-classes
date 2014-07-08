(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#jquery-classes', {
    // This will run before each test in this module.
    setup: function() {
      this.$elems = $('#qunit-fixture').children();
      this.$elem = $('#classes-3');
    }
  });

  test('is chainable', function() {
    expect(1);

    strictEqual(this.$elems.classes('+some-class'), this.$elems, 'should be chainable');
  });

  test('returns all classes for the first element in the jQuery collection', function() {
    expect(1);

    strictEqual(this.$elems.classes(), 'class1 class2 class3', 'should return all class names');
  });

  test('does not modify classes when argument is not a valid string', function() {
    var invalidArguments = [undefined, null, NaN, 0, 123, false, true, '', '    '];

    expect(invalidArguments.length);

    var $elem = this.$elem;
    invalidArguments.forEach(function (invalidArgument) {
      var classesBefore = $elem[0].className;
      $elem.classes(invalidArgument);
      var classesAfter = $elem[0].className;

      strictEqual(classesBefore, classesAfter, 'className attributes should remain unchanged');
    });
  });

  test('adds a class', function() {
    expect(2);

    var classCountBefore = this.$elem[0].className.split(' ').length;
    this.$elem.classes('+some-class');
    var classCountAfter = this.$elem[0].className.split(' ').length;

    strictEqual(classCountBefore + 1, classCountAfter, 'one class was added');
    ok(this.$elem.hasClass('some-class'), 'the correct class was added');
  });

  test('removes a class', function() {
    expect(2);

    this.$elem.addClass('some-class');

    var classCountBefore = this.$elem[0].className.split(' ').length;
    this.$elem.classes('-some-class');
    var classCountAfter = this.$elem[0].className.split(' ').length;

    strictEqual(classCountBefore - 1, classCountAfter, 'one class was removed');
    ok(!this.$elem.hasClass('some-class'), 'the correct class was removed');
  });

  test('toggles a class (on)', function() {
    expect(2);

    var classCountBefore = this.$elem[0].className.split(' ').length;
    this.$elem.classes('~some-class');
    var classCountAfter = this.$elem[0].className.split(' ').length;

    strictEqual(classCountBefore + 1, classCountAfter, 'one class was toggled on');
    ok(this.$elem.hasClass('some-class'), 'the correct class was toggled on');
  });

  test('toggles a class (off)', function() {
    expect(2);

    this.$elem.addClass('some-class');
    var classCountBefore = this.$elem[0].className.split(' ').length;
    this.$elem.classes('~some-class');
    var classCountAfter = this.$elem[0].className.split(' ').length;

    strictEqual(classCountBefore - 1, classCountAfter, 'one class was toggled off');
    ok(!this.$elem.hasClass('some-class'), 'the correct class was toggled off');
  });

  test('adds, removes and toggles multiple classes', function() {
    expect(7);

    var classCountBefore = this.$elem[0].className.split(' ').length;

    this.$elem.classes('+some-class1 -class1 -class2 +some-class2 ~class3 ~some-class3');

    var classCountAfter = this.$elem[0].className.split(' ').length;

    strictEqual(classCountBefore, classCountAfter, 'the correct number of classes were manipulated');
    ok(this.$elem.hasClass('some-class1'), '');
    ok(this.$elem.hasClass('some-class2'), '');
    ok(this.$elem.hasClass('some-class3'), '');
    ok(!this.$elem.hasClass('class1'), '');
    ok(!this.$elem.hasClass('class2'), '');
    ok(!this.$elem.hasClass('class3'), '');
  });
}(jQuery));

