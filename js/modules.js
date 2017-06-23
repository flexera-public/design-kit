//
// modules.js
// Retrieve CSS and HTML for the module from Github and rendor in the modules template

var htmlcontents;
var csscontents;

$.get( csslink, function( data ) {
  csscontents = data;
  $( "#css_contents > code" ).html( csscontents ); // Set CSS code in DOM
});

$.get( htmllink, function( data ) {
  htmlcontents = data;
  $( "#html_contents > code" ).html( htmlEncode(htmlcontents) );  // Set HTML code in DOM
  htmlcontents = htmlcontents.replace(/\<head\>/g, "<head><style>" + csscontents + ".wrapper {padding: 0 !important;}</style>"); // Insert CSS link for preview
  $( "#frame_preview" ).attr( 'srcdoc', htmlcontents );
  setTimeout(waitToLoad, 500);
});

function waitToLoad(){
  resizeIframe('#frame_preview');
  hljs.initHighlighting(); // Initialize code highlight.js
}

// Resize iframe to content
function resizeIframe (id) {
    $(id).outerHeight( $(id).contents().find("html").outerHeight(true) + 20 );
    $(id).outerWidth( $(id).contents().find("html").outerWidth(true) );
}

// Method to render HTML in a readable way
function htmlEncode (value) {
  return $('<div/>').text(value).html();
}

// Toggle element visibility
function toggleVisibility(h_identifier, identifier) {
  if (event.target.toString().indexOf("/#") > -1) // Don't expand for anchors
    return false;
  var element = $(identifier);
  var header = $(h_identifier);
  if (header.hasClass('collapsed')){
    header.removeClass('collapsed');
  }
  else {
    header.addClass('collapsed');
  }
  element.toggle();
}
