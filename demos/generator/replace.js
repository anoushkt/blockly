Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("REPEAT");
    this.appendDummyInput()
        .appendField("REPEAT KEY")
        .appendField(new Blockly.FieldTextInput("\"FOR\""), "repeat_key");
    this.appendDummyInput()
        .appendField("REPEAT COUNT")
        .appendField(new Blockly.FieldNumber(0), "repeat_count");
    this.appendDummyInput()
        .appendField("REPEAT DIRECTION")
        .appendField(new Blockly.FieldDropdown([["LEFT","\"left\""], ["RIGHT","\"right"], ["UP","\"up\""], ["DOWN","\"down\""], ["FRONT","\"front\""], ["BACK","\"back\""], ["AROUND","\"around\""]]), "repeat_dir");
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat'] = function(block) {
  var text_repeat_key = block.getFieldValue('repeat_key');
  var number_repeat_count = block.getFieldValue('repeat_count');
  var dropdown_repeat_dir = block.getFieldValue('repeat_dir');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['replace'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TYPE OF MODIFICATION: REPLACE");
      this.appendValueInput("old_block")
          .setCheck(null)
          .appendField("OLD BLOCK");
      this.appendValueInput("new_block")
          .setCheck(null)
          .appendField("NEW BLOCK");
      this.appendValueInput("replace_geometry")
          .setCheck(null)
          .appendField("REPLACE GEOMETRY");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['replace'] = function(block) {
    var value_old_block = Blockly.JavaScript.valueToCode(block, 'old_block', Blockly.JavaScript.ORDER_ATOMIC);
    var value_new_block= Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_replace_geometry = Blockly.JavaScript.valueToCode(block, 'replace_geometry', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n{"type of modification":"replace"' +',\n"old_block":'+value_old_block+',\n"name":'+value_new_block+',\n"replace_geometry":'+value_replace_geometry+'}';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
