Blockly.Blocks['action'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("ACTION"), "name_temp");
    this.appendDummyInput()
        .appendField("ACTION TYPE")
        .appendField(new Blockly.FieldTextInput("default"), "action_type");
    this.appendValueInput("location")
        .setCheck("location")
        .appendField("LOCATION");
    this.appendDummyInput()
        .appendField("REPLACE")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "replace");
    this.appendValueInput("REPEAT")
        .setCheck(null)
        .appendField("REPEAT");
    this.appendValueInput("schematic")
        .setCheck(null)
        .appendField("SCHEMATIC");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setCommentText('');
  }
};
Blockly.JavaScript['action'] = function(block) {
  var text_name_temp = block.getFieldValue('name_temp');
  var text_action_type = block.getFieldValue('action_type');
  var value_location= Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_location){
    value_location = JSON.parse((Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC).slice(1,-1)))["location"];
    }

  var checkbox_replace = block.getFieldValue('replace') == 'TRUE';
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_schematic = Blockly.JavaScript.valueToCode(block, 'schematic', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  var code=JSON.stringify({
    "action":{"action_type":text_action_type,
    "location":value_location,
    "replace":checkbox_replace,
    "repeat":value_repeat
  }

  });
  /*var code=JSON.stringify(
    {
    "Type":"action",
    "replace":checkbox_replace,
    "action_type":text_action_type,
    "repeat":value_repeat
    
    },null,2);
    
  code=code+"location:"+value_location*/
  return code;
};
