

Blockly.Blocks['ref_object'] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("REFERENCE OBJECT"), "name_temp");
      this.appendValueInput("repeat")
          .setCheck(null)
          .appendField("Repeat");
      this.appendDummyInput()
          .appendField("Special reference?")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "special_reference");
      this.appendValueInput("special_reference_type")
          .setCheck(null)
          .appendField("Special reference type");
      this.appendValueInput("has_name")
          .setCheck("String") 
          .appendField("Name")
          .appendField(new Blockly.FieldColour("#ffffff"), "has_name_colour");
      this.appendValueInput("has_size")
           .setCheck("Number") 
          .appendField("Size")
          .appendField(new Blockly.FieldColour("#ffff00"), "has_size_colour");
      this.appendValueInput("Colour")
           .setCheck("String") 
          .appendField("Colour")
          .appendField(new Blockly.FieldColour("#c0c0c0"), "has_colour_colour");
      this.appendDummyInput()
          .appendField("Contains coreference?")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "contains_coref");
    this.appendValueInput("location")
          .setCheck(null)
          .appendField("Location");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(160);
    this.setCommentText('');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['ref_object'] = function(block) {
    var text_name_temp = block.getFieldValue('name_temp');
    var value_repeat = Blockly.JavaScript.valueToCode(block, 'repeat', Blockly.JavaScript.ORDER_ATOMIC);
    var checkbox_special_reference = block.getFieldValue('special_reference') == 'TRUE';
    var value_special_reference_type = Blockly.JavaScript.valueToCode(block, 'special_reference_type', Blockly.JavaScript.ORDER_ATOMIC);
    var value_has_name = Blockly.JavaScript.valueToCode(block, 'has_name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_has_size =parseInt(Blockly.JavaScript.valueToCode(block, 'has_size', Blockly.JavaScript.ORDER_ATOMIC));
    var value_has_colour = Blockly.JavaScript.valueToCode(block, 'Colour', Blockly.JavaScript.ORDER_ATOMIC);
    var checkbox_contains_coref = block.getFieldValue('contains_coref') == 'TRUE';
    var value_location= Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_location){
    value_location = JSON.parse((Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC).slice(1,-1)))["location"];
    }


    var colour_has_size_colour = block.getFieldValue('has_size_colour'); 
    var colour_has_colour_colour = block.getFieldValue('has_colour_colour');
    var colour_has_name_colour = block.getFieldValue('has_name_colour');



    // TODO: Assemble JavaScript into code variable.
    var code =
        {
            "reference_object":{
            "special_reference": value_special_reference_type,
            "filters":{
                "has_name": value_has_name,
                "has_size": value_has_size,
                "has_colour": value_has_colour,
                "contains_coreference":checkbox_contains_coref,
                "location":{}
                
            },
        "colors":{
            "has_name": colour_has_name_colour,
            "has_color": colour_has_colour_colour,
            "has_size": colour_has_size_colour

        }
        }
    };
    code["reference_object"]["filters"]["location"]=value_location;
    code=JSON.stringify(code);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };





/*Blockly.Blocks['ref_object'] = {
init: function() {
    this.appendDummyInput()
    .appendField("REFERENCE OBJECT");
    this.appendValueInput("repeat")
    .setCheck(null)
    .appendField("REPEAT");
    this.appendDummyInput()
    .appendField("SPECIAL REFERENCE?")
    .appendField(new Blockly.FieldCheckbox("true"), "special_reference");
   
    this.appendDummyInput()

    .appendField("SPECIAL REFERENCE TYPE")
    .appendField(new Blockly.FieldTextInput("default"), "spec_ref_type");
    
    this.appendDummyInput()
    .appendField("NAME")
    .appendField(new Blockly.FieldTextInput("default"), "has_name")
    .appendField(new Blockly.FieldColour("#ff6600"), "name_colour");
    
    this.appendDummyInput()
    .appendField("SIZE")
    .appendField(new Blockly.FieldNumber(0), "has_size");
    
    this.appendDummyInput()
    .appendField("COLOUR")
    .appendField(new Blockly.FieldTextInput("default"), "has_colour");
    
    this.appendDummyInput()
    .appendField("CONTAINS COREF?")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "contains_coref");
    this.appendValueInput("location")
    .setCheck("location")
    .appendField("LOCATION");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour(180);
}
};
Blockly.JavaScript['ref_object'] = function(block) {
    var value_repeat = Blockly.JavaScript.valueToCode(block, 'repeat', Blockly.JavaScript.ORDER_ATOMIC);
    var checkbox_special_reference = block.getFieldValue('special_reference') == 'TRUE';
    var text_spec_ref_type = block.getFieldValue('spec_ref_type');
    var text_has_name = block.getFieldValue('has_name');
    var number_has_size = parseInt(block.getFieldValue('has_size'));
    var text_has_colour = block.getFieldValue('has_colour');
    var checkbox_contains_coref = block.getFieldValue('contains_coref') == 'TRUE';
    var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    
    // var code1= '{"has_name":'+text_has_name+'"has_size":'+number_has_size+'"has_colour":'+colour_has_color+
    //+'"contains_coreference":'+checkbox_contains_coref'};';
    
    var code=JSON.stringify({
        "Type":"ref",
        "special_reference": text_spec_ref_type,
        filters:{
            "has_name": text_has_name,
            "has_size": number_has_size,
            "has_colour": text_has_colour,
            "contains_coreference":checkbox_special_reference,
            "location":value_location
        }
    }

    );
    // TODO: Change ORDER_NONE to the correct strength.
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};
*/