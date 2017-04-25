'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('pdfjs-web/brps_viewer', ['exports', 'pdfjs-web/pdf_page_view',
      'pdfjs-web/annotation_layer_builder'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./pdf_page_view.js'), require('./annotation_layer_builder.js'));
  } else {
    factory((root.pdfjsWebBrpsViewer = {}), root.pdfjsWebPDFPageView, root.pdfjsWebAnnotationLayerBuilder);
  }
}(this, function (exports, pdfjsWebPDFPageView, pdfjsWebAnnotationLayerBuilder) {
  var BrpsViewer = {
    PDFPageView: pdfjsWebPDFPageView.PDFPageView,
    AnnotationLayerBuilder: pdfjsWebAnnotationLayerBuilder.AnnotationLayerBuilder
  };
  window.BrpsViewer = BrpsViewer;
}));
