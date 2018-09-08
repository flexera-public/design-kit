//
// clipboard.js
// Modern copy to clipboard. No Flash. Just 3kb gzipped.
// https://github.com/zenorocha/clipboard.js/
//

var clipboard = new Clipboard('.clipboard');

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);
//
//     e.clearSelection();
// });

clipboard.on('success', function(e) {
  e.clearSelection();
  showTooltip(e.trigger, 'Copied!');
  console.info('Color:', e.text);
});

// Tooltip events
var btns = document.querySelectorAll('.copy-color button');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseleave', clearTooltip);
  btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute('class', 'o-90 clipboard child btn');
  e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
  elem.setAttribute('class', 'o-90 clipboard child btn tooltipped tooltipped-s');
  elem.setAttribute('aria-label', msg);
}
