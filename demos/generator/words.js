Blockly.Blocks['words'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WORD-COLOR");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "word")
        .appendField(new Blockly.FieldColour("#ff0000"), "colour");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['words'] = function(block) {
  var text_word = block.getFieldValue('word');
  var colour_colour = block.getFieldValue('colour');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};