Blockly.Blocks['thicken'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TYPE OF MODIFICATION: THICKEN")
      this.appendDummyInput()
          .appendField("NUMBER OF BLOCKS")
          .appendField(new Blockly.FieldNumber(0), "num_blocks");
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['thicken'] = function(block) {
    var text_modify_type = block.getFieldValue('modify_type');
    var number_num_blocks = block.getFieldValue('num_blocks');
    // TODO: Assemble JavaScript into code variable.
    var code =    '\n{"type of modification":"thicken"' +',\n"num_blocks":'+number_num_blocks+'}';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.Blocks['scale'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TYPE OF MODIFICATION: SCALE");
      this.appendDummyInput()
          .appendField("TEXT SCALE FACTOR")
          .appendField(new Blockly.FieldTextInput("default"), "scale_factor");
      this.appendDummyInput()
          .appendField("CATEGORICAL SCALE FACTOR")
          .appendField(new Blockly.FieldDropdown([["WIDER","WIDER"], ["NARROWER","NARROWER"], ["SHORTER","SHORTER"], ["TALLER","TALLER"], ["SKINNIER","SKINNIER"], ["FATTER","FATTER"], ["SMALLER","SMALLER"], ["BIGGER","BIGGER"]]), "CATEGORICAL SCALE FACTOR");
          this.setOutput(true, null);
          this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['scale'] = function(block) {
    var text_scale_factor = block.getFieldValue('scale_factor');
    var dropdown_categorical_scale_factor = block.getFieldValue('CATEGORICAL SCALE FACTOR');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['rigidmotion'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TYPE OF MODIFICATION: RIGIDMOTION");
      this.appendDummyInput()
          .appendField("CATEGORICAL ANGLE")
          .appendField(new Blockly.FieldTextInput("default"), "categorical_angle");
      this.appendDummyInput()
          .appendField("MIRROR")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "mirror");
      this.appendValueInput("location")
          .setCheck("location")
          .appendField("LOCATION");
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['rigidmotion'] = function(block) {
    var text_categorical_angle = block.getFieldValue('categorical_angle');
    var checkbox_mirror = block.getFieldValue('mirror') == 'TRUE';
    var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['replace_geometry'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("REPLACE GEOMETRY");
    this.appendDummyInput()
        .appendField("AMOUNT")
        .appendField(new Blockly.FieldTextInput("default"), "amount");
    this.appendDummyInput()
        .appendField("RELATIVE DIRECTION")
        .appendField(new Blockly.FieldDropdown([["LEFT","\"left\""], ["RIGHT","\"right\""], ["TOP","\"top\""], ["BOTTOM","\"bottom\""]]), "relative_direction");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['replace_geometry'] = function(block) {
    var text_amount = block.getFieldValue('amount');
    var dropdown_relative_direction = block.getFieldValue('relative_direction');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.Blocks['block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("BLOCK");
      this.appendValueInput("has_x")
          .setCheck(null)
          .appendField("PROPERTIES");
          this.setColour(180);
      this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['block'] = function(block) {
    var value_has_x = Blockly.JavaScript.valueToCode(block, 'has_x', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  Blockly.Blocks['fill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TYPE OF MODIFICATION: FILL/HOLLOW");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("NEW BLOCK");
          this.setColour(180);
      this.setOutput(true, null);
   
   
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['fill'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };