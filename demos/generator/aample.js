Blockly.Blocks['directions'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("RANDOM TEXT");
      this.appendValueInput("list")
          .setCheck("Array")
          .appendField("list");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['directions'] = function(block) 
  {
    var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC).slice(1,-1);

    console.log(value_list);
    value_list=value_list.split(', ');
    console.log(value_list);
    var number_length = value_list.length;
    // TODO: Assemble JavaScript into code variable.
    var x=Math.floor(Math.random() * number_length) ;

    var code=String(value_list[x]).slice(1,-1);
    
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };


  Blockly.Blocks['random_integer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Random integer from ")
          .appendField(new Blockly.FieldNumber(0), "num1")
          .appendField(" to")
          .appendField(new Blockly.FieldNumber(0), "num2");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  Blockly.JavaScript['random_integer'] = function(block) {
    var min = block.getFieldValue('num1');
    var max = block.getFieldValue('num2');
    var num= Math.floor(Math.random() * (max - min) + min);
    // TODO: Assemble JavaScript into code variable.
    var code = num;

  var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
              Blockly.JavaScript.ORDER_UNARY_NEGATION;
  return [code, order];
    // TODO: Change ORDER_NONE to the correct strength.
    //return [code, Blockly.JavaScript.ORDER_NONE];
  };






  Blockly.Blocks['random_direction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("RANDOM DIRECTION");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['random_direction'] = function(block) 
  {
    var value_list = ["left","right", "up","down","front","back","away","inside","near","outside","between"];
   
    var number_length = value_list.length;
    // TODO: Assemble JavaScript into code variable.
    var x=Math.floor(Math.random() * number_length) ;

    var code=value_list[x];
    console.log(code);
   
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
