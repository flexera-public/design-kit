//
// Snippet js
// --------------
//

// Add clipboard button trigger
var snippets = document.querySelectorAll('.highlighter-rouge');
[].forEach.call(snippets, function(snippet) {
  snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn snippet-clipboard" data-clipboard-snippet><img src="/media/assets/icon-clipboard.svg"></button>');
});

// clipboard trigger
var clipboardSnippets = new Clipboard('[data-clipboard-snippet]', {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

// Tooltip trigger
clipboardSnippets.on('success', function(e) {
  e.clearSelection();
  showTooltip(e.trigger, 'Copied!');
});

// Error message
clipboardSnippets.on('error', function(e) {
  showTooltip(e.trigger, fallbackMessage(e.action));
});

// Tooltip events
var btns = document.querySelectorAll('.btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseleave', clearTooltip);
  btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute('class', 'btn');
  e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
  elem.setAttribute('class', 'btn tooltipped tooltipped-s');
  elem.setAttribute('aria-label', msg);
}
