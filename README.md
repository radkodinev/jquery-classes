# jQuery Classes

A jQuery plugin to easily add, remove and toggle classes at once.

## Getting Started

Download the plugin:
- [production version][min] (~450 bytes minified & gzipped)
- [development version][max]

[min]: https://raw.githubusercontent.com/radkodinev/jquery-classes/master/dist/jquery.jquery-classes.min.js
[max]: https://raw.githubusercontent.com/radkodinev/jquery-classes/master/dist/jquery.jquery-classes.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-classes.min.js"></script>
<script>
jQuery(function($) {
  $('.elements').classes('...');
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
