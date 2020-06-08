'use strict';
var BlocklyStorage = {};

BlocklyStorage.backupBlocks_ = function(workspace) {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    // Gets the current URL, not including the hash.
    //var url = window.location.href.split('#')[0];
    window.localStorage.setItem('hello', Blockly.Xml.domToText(xml));
  }
};

/*BlocklyStorage.backupOnUnload = function(opt_workspace) {
  var workspace = opt_workspace || Blockly.getMainWorkspace();
  window.addEventListener('click',
      function() {BlocklyStorage.backupBlocks_(workspace);}, false);
};*/
//restore
BlocklyStorage.restoreBlocks = function(opt_workspace) {
  var url = window.location.href.split('#')[0];
  if ('localStorage' in window && window.localStorage['hello']) {
    var workspace = opt_workspace || Blockly.getMainWorkspace();
    var xml = Blockly.Xml.textToDom(window.localStorage['hello']);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
};