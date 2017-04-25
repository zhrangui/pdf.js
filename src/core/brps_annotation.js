/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('pdfjs/core/brps_annotation', ['exports', 'pdfjs/core/primitives', 'pdfjs/core/annotation'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./primitives.js'), require('./annotation.js'));
  } else {
    factory((root.pdfjsBrpsAnnotation = {}), root.pdfjsCorePrimitives, root.pdfjsCoreAnnotation);
  }
}(this, function (exports, corePrimitives, coreAnnotation) {
  var isDict = corePrimitives.isDict;
  
  var AnnotationFactory = coreAnnotation.AnnotationFactory;
  AnnotationFactory.prototype._create = AnnotationFactory.prototype.create;
  AnnotationFactory.prototype.create = function(xref, ref, pdfManager, idFactory) {
    var annotation = this._create(xref, ref, pdfManager, idFactory);
    var dict = xref.fetchIfRef(ref);
    if (!isDict(dict)) {
      return;
    }
    // JS property in widget
    var js = dict.get('AA');
    js = js && js.get('F');
    js = js && js.get('JS');
    if (js) {
      annotation.data.JS = js;
    }
    return annotation;
  };
}));
