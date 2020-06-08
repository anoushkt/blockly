function val_to_code(value_reference_object){
    window.alert(value_reference_object);
    return value_reference_object[2];
    
    
    
}
Blockly.Blocks['location2'] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("LOCATION"), "name_temp");
      this.appendValueInput("steps")
          .setCheck(null)
          .appendField("Steps")
          .appendField(new Blockly.FieldColour("#ffcc33"), "steps_colour");
      this.appendValueInput("relative_direction")
          .setCheck(null)
          .appendField("Relative direction")
          .appendField(new Blockly.FieldColour("#ff0000"), "relative_direction_colour");
      this.appendValueInput("reference_object")
          .setCheck(null)
          .appendField("Reference object");
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
Blockly.JavaScript['location2'] = function(block) {
    var text_name_temp = block.getFieldValue('name_temp');
    var colour_steps_colour = block.getFieldValue('steps_colour');
    var value_steps = parseInt(Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC));

    var colour_relative_direction_colour = block.getFieldValue('relative_direction_colour');

    var value_relative_direction = Blockly.JavaScript.valueToCode(block, 'relative_direction', Blockly.JavaScript.ORDER_ATOMIC);
   
    var value_reference_object=Blockly.JavaScript.valueToCode(block, 'reference_object', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_reference_object){
    var value_reference_object = JSON.parse((Blockly.JavaScript.valueToCode(block, 'reference_object', Blockly.JavaScript.ORDER_ATOMIC).slice(1,-1)))["reference_object"];

    }
                 
    var code=
    {"location":
        {
            "steps": value_steps,
            "colors":{
                "relative_direction": colour_relative_direction_colour,
                "steps": colour_steps_colour
            }, 
            "relative_direction": value_relative_direction,
            "reference_object": {}
        }
    };
    code["location"]["reference_object"]=value_reference_object;
     code=JSON.stringify(code);
     return [code, Blockly.JavaScript.ORDER_NONE];
};


/*Blockly.JavaScript['location'] = function(block) {
 var checkbox_contains_coref = block.getFieldValue('Contains coref') == 'TRUE';
 var number_steps = block.getFieldValue('steps');
 var text_relative_direction = String(block.getFieldValue('relative_direction'));
 var value_reference_object = Blockly.JavaScript.valueToCode(block, 'reference_object', Blockly.JavaScript.ORDER_ATOMIC);
 // TODO: Assemble JavaScript into code variable.
 var code0='var code={}';
 var code1= ';code["steps"]='+number_steps;
 //var code2=';window.alert(code["steps"])'
 var code2=';code["relative_direction"]='+text_relative_direction;
 //var code3=';code["coref_resolve"]='+checkbox_contains_coref;
 //var code4=';code["reference_object"]='+value_reference_object;
 
 code=code0+code1+code2;
 /*var code= 'var code={}'+ 'code["steps"]='+tostring(number_steps) +'code["relative_direction"]='+text_relative_direction';'+ +'code["coref_resolve"]='+checkbox_contains_coref+'; code["reference_object"]='+value_reference_object;*/
//    return [code, Blockly.JavaScript.ORDER_NONE];
//};

