Blockly.Blocks['reference_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("REFERENCE OBJECT");
    this.appendValueInput("repeat")
        .setCheck(null)
        .appendField("REPEAT");
    this.appendDummyInput()
        .appendField("SPECIAL REFERENCE")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "special_reference");
    this.appendValueInput("SPECIAL REFERENCE TYPE")
        .setCheck(null)
        .appendField("SPECIAL REFERENCE TYPE");
    this.appendDummyInput()
        .appendField("NAME")
        .appendField(new Blockly.FieldTextInput("default"), "has_name")
        .appendField(new Blockly.FieldColour("#ff6600"), "name_colour");
    this.appendValueInput("size")
        .setCheck(null)
        .appendField("SIZE")
        .appendField(new Blockly.FieldColour("#ff9900"), "size_colour");
    this.appendValueInput("COLOUR")
        .setCheck(null)
        .appendField("COLOUR")
        .appendField(new Blockly.FieldColour("#33ff33"), "colour_colour");
    this.appendDummyInput()
        .appendField("CONTAINTS COREFERENCE")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "contains_coref");
    this.appendValueInput("location")
        .setCheck(null)
        .appendField("LOCATION");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['reference_object'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'repeat', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_special_reference = block.getFieldValue('special_reference') == 'TRUE';
  var value_special_reference_type = Blockly.JavaScript.valueToCode(block, 'SPECIAL REFERENCE TYPE', Blockly.JavaScript.ORDER_ATOMIC);
  var text_has_name = block.getFieldValue('has_name');
  var colour_name_colour = block.getFieldValue('name_colour');
  var colour_size_colour = block.getFieldValue('size_colour');
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_colour_colour = block.getFieldValue('colour_colour');
  var value_colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_contains_coref = block.getFieldValue('contains_coref') == 'TRUE';
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['location'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("LOCATION");
      this.appendValueInput("steps")
          .setCheck(null)
          .appendField("STEPS")
          .appendField(new Blockly.FieldColour("#ffcc33"), "steps_colour");
      this.appendValueInput("relative_direction")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable("RELATIVE_DIRECTION"), "NAME")
          .appendField(new Blockly.FieldColour("#ff0000"), "relative_direction_colour");
      this.appendValueInput("reference_object")
          .setCheck(null)
          .appendField("REFERENCE OBJECT");
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['location'] = function(block) {
    var colour_steps_colour = block.getFieldValue('steps_colour');
    var value_steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
    var colour_relative_direction_colour = block.getFieldValue('relative_direction_colour');
    var value_relative_direction = Blockly.JavaScript.valueToCode(block, 'relative_direction', Blockly.JavaScript.ORDER_ATOMIC);
    var value_reference_object = Blockly.JavaScript.valueToCode(block, 'reference_object', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };