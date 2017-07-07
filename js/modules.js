//
// modules.js
// Retrieve CSS from Github and rendor in the modules template

var csscontents;

$.get( csslink, function( data ) {
  csscontents = data;
  $( "#css_contents > code" ).html( csscontents ); // Set CSS code in DOM
});

// initialize highlight.js when the page is fully loaded
$( window ).load(function() {
  $('pre code.css').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
