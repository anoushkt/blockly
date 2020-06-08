Blockly.Blocks['schematic'] = {
    init: function() {
        this.appendDummyInput()
    .appendField("SCHEMATIC");
      this.appendValueInput("REPEAT")
          .setCheck("repeat")
          .appendField("REPEAT");
      this.appendDummyInput()
          .appendField("BLOCK TYPE")
          .appendField(new Blockly.FieldTextInput("\"NONE\""), "has_block_type");
      this.appendDummyInput()
          .appendField("NAME")
          .appendField(new Blockly.FieldTextInput("\"NONE\""), "has_name");
      this.appendDummyInput()
          .appendField("SIZE")
          .appendField(new Blockly.FieldNumber(0), "has_size");
      this.appendDummyInput()
          .appendField("THICKNESS")
          .appendField(new Blockly.FieldNumber(0), "has_thickness");
      this.appendValueInput("has_orientation")
          .setCheck(null)
          .appendField("ORIENTATION");
      this.appendDummyInput()
          .appendField("COLOUR")
          .appendField(new Blockly.FieldTextInput("\"RED\""), "has_colour");
      this.appendDummyInput()
          .appendField("HEIGHT")
          .appendField(new Blockly.FieldNumber(0), "has_height");
      this.appendDummyInput()
          .appendField("LENGTH")
          .appendField(new Blockly.FieldNumber(0), "has_length");
      this.appendDummyInput()
          .appendField("RADIUS")
          .appendField(new Blockly.FieldNumber(0), "has_radius");
      this.appendDummyInput()
          .appendField("SLOPE")
          .appendField(new Blockly.FieldNumber(0), "has_slope");
      this.appendDummyInput()
          .appendField("WIDTH")
          .appendField(new Blockly.FieldNumber(0), "has_width");
      this.appendDummyInput()
          .appendField("DEPTH")
          .appendField(new Blockly.FieldNumber(0), "has_depth");
      this.appendDummyInput()
          .appendField("DISTANCE")
          .appendField(new Blockly.FieldNumber(0), "has_distance");
      this.appendDummyInput()
          .appendField("BASE")
          .appendField(new Blockly.FieldNumber(0), "has_base");
      this.setColour(230);
      this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['schematic'] = function(block) {
    var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
    var text_has_block_type = block.getFieldValue('has_block_type');
    var text_has_name = block.getFieldValue('has_name');
    var number_has_size = block.getFieldValue('has_size');
    var number_has_thickness = block.getFieldValue('has_thickness');
    var value_has_orientation = Blockly.JavaScript.valueToCode(block, 'has_orientation', Blockly.JavaScript.ORDER_ATOMIC);
    var text_has_colour = block.getFieldValue('has_colour');
    var number_has_height = block.getFieldValue('has_height');
    var number_has_length = block.getFieldValue('has_length');
    var number_has_radius = block.getFieldValue('has_radius');
    var number_has_slope = block.getFieldValue('has_slope');
    var number_has_width = block.getFieldValue('has_width');
    var number_has_depth = block.getFieldValue('has_depth');
    var number_has_distance = block.getFieldValue('has_distance');
    var number_has_base = block.getFieldValue('has_base');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};