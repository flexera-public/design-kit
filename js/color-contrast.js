//
// Designkit Color Contrast Tool
// http://24ways.org/2010/calculating-color-contrast/
//

function isDark(color) {
  var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
  return (match[1] & 255) +
    (match[2] & 255) +
    (match[3] & 255) <
    3 * 256 / 1.5; // Changed for lighter text, orginally set to (3 * 256 / 2)
}

// Change text color
$('div.color-contrast').each(function() {
  $(this).css("color", isDark($(this).css("background-color")) ? '#ffffff' : '#30373C');
});
