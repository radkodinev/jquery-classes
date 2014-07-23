# jquery-classes [![Build Status](https://api.travis-ci.org/radkodinev/jquery-classes.svg?branch=master)](https://travis-ci.org/radkodinev/jquery-classes)

> A jQuery plugin to easily add, remove and toggle classes at once.

This plugin uses the UMD pattern and can be used in different environmens (AMD, CommonJS, browser globals).

## Install
### Bower
```
bower install jquery-classes
```

### Download
- [Production version](https://raw.githubusercontent.com/radkodinev/jquery-classes/master/dist/jquery-classes.min.js) (~450 bytes minified & gzipped)
- [Development version](https://raw.githubusercontent.com/radkodinev/jquery-classes/master/dist/jquery-classes.js)

## Getting started
In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-classes.min.js"></script>
<script>
jQuery(function($) {
  $(...).classes('...');
});
</script>
```

## Usage

### Get class names
```javascript
$(...).classes(); // => gets all the classes for the first element in the collection
```

### Add a class name
```javascript
$(...).classes('+someclass'); // => adds a class to all elements in the collection
```

### Remove a class name
```javascript
$(...).classes('-someclass'); // => removes a class from all elements in the collection
```

### Toggle a class name
```javascript
$(...).classes('~someclass'); // => toggles a class for all elements in the collection
```

### Multiple actions on classes
```javascript
$(...).classes('+state-open +state-active ~visible -list-item +list-item-active');
```

## License and Author
MIT © 2014 [Radko Dinev](https://github.com/radkodinev)

See `LICENSE` file.
