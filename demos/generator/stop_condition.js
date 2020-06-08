Blockly.Blocks['stop_condition'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("STOP CONDITION");
      this.appendDummyInput()
          .appendField("CONDITION TYPE")
          .appendField(new Blockly.FieldDropdown([["adjacent to block type","\"adjacent_to_block_type\""], ["never","\"never\""]]), "condition_type");
      this.appendValueInput("block type")
          .setCheck(null)
          .appendField("BLOCK TYPE");
      this.setOutput(true, null);
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['stop_condition'] = function(block) {
    var dropdown_condition_type = block.getFieldValue('condition_type');
    var value_block_type = Blockly.JavaScript.valueToCode(block, 'block type', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n{"condition_type":'+dropdown_condition_type+',\n"block_type":'+value_block_type+'}';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };