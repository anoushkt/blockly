<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
            <title>Blockly style templates</title>
            <script src="../../blockly_compressed.js"></script>
            <script src="../../blocks_compressed.js"></script>
            <script src="../../javascript_compressed.js"></script>
            <script src="../../msg/js/en.js"></script>
            <script src="location_blocks.js"></script>
            <script src="action_blocks.js"></script>
            <script src="reference_blocks.js"></script>
            <script src="stop_condition.js"></script>
            <script src="replace.js"></script>
            <script src="schematic.js"></script>
            <script src="modify_dict.js"></script>

            
            <style>
                body {
                    font-family:fantasy;
                    background-color:rgb(226, 255, 147);
                    border-color: blueviolet;
                   
                }
            h1 {
                font-weight: bolder;
                font-size: 300%;
                font-family:fantasy;
                
                
            }
            

            p1{
                
                position: absolute;
                left:1300px;
                top:200px;
                font-size: 150%;
                font-weight: bold;
                color:royalblue;

                
            }
            p2{
                
                position: absolute;
                left: 1280px;
                top:400px;
                font-size: 150%;
                font-weight: bold;
                color:royalblue;

            
                
            }
            p3{
                position: absolute;
                left: 1290px;
                top:110px;
                font-size: 150%;
                font-weight: bold;
                color:royalblue;




            }
            
            #mytextarea{
                position: absolute;
                left: 1280px;
                top:   230px;
            
                border: 5px solid firebrick;
                
            }
            #dict{
                position: absolute;
                left: 1280px;
                top:   430px;
                border: 5px solid firebrick;




            }
            #b1{
                
                position: absolute;
                left:400px;
                top: 400px;
                     
                
            }
            #info{
                position: absolute;
                left: 1280px;
                top:   140px;
                border: 5px solid firebrick;




            }
            #restorer{
                position: absolute;
                left: 1590px;
                top:110px;

            }
            #btn{
                position: absolute;
                left: 1600px;
                top:200px;




            }
           
        </style>
     
            
    </head>
    <body>
     
        <h1 > TEMPLATE GENERATOR </h1>
        
<?php
echo "Hello World hi!";
?>
        <p1 > SURFACE FORMS </p1>
        
        
        <button onclick="showCode()">Show template</button>
        
        <textarea id = "mytextarea"
            rows = "10"
            cols = "50"></textarea>
       
        

        <p2>ACTION DICTIONARY-TEXT PAIRS</p2>   
        <textarea id="dict" rows = "30" cols = "50"></textarea>       
        
        <input type="button" id="btn" onclick="OnButtonClick()" value="Submit" />
     
        <input type="button" id="saver" onclick="saveIt()" value="Save" />
        
        <input type="button" id="restorer" onclick="restoreIt()" value="Restore" />
        <p3> RESTORATION CODE</p3>

        <textarea id="info" cols="50"  ></textarea>    


        <div id="blocklyDiv" style="height: 800px; width: 1200px;"></div>
        
        <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none position:"relative" left:"400px"" >
            <category name="LOCATION" colour="%{BKY_LOGIC_HUE}">
                <block type="location"></block>
                
                
            </category>
            <category name="REFERENCE OBJECT" colour="%{BKY_LOGIC_HUE}">
                <block type="ref_object"></block>
            </category>
            <category name="ACTION" colour="%{BKY_LOGIC_HUE}">
                <block type="action"></block>
            </category>
            <category name="STOP CONDITION" colour="%{BKY_LOGIC_HUE}">
                <block type="stop_condition"></block>
            </category>
            <category name="REPEAT" colour="%{BKY_LOGIC_HUE}">
                <block type="repeat"></block>
            </category>
            <category name="SCHEMATIC" colour="%{BKY_LOGIC_HUE}">
                <block type="schematic"></block>
            </category>
            <category name="TEXT" colour="%{BKY_LOGIC_HUE}">
                <block type="text"></block>
                <block type="text_length"></block>
                <block type="text_print"></block>
            </category>
            <category name="MODIFICATIONS" colour="%{BKY_LOGIC_HUE}">
                <block type="thicken"></block>
                <block type="scale"></block>
                <block type="rigidmotion"></block>
                <block type="replace_geometry"></block>
                <block type="replace"></block>
                <block type="fill"></block>
            </category>
            <category name="BLOCK" colour="%{BKY_LOGIC_HUE}">
                <block type="block"></block>
            </category>
            

        </xml>
        <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox2" style="display: none position:"relative" left:"1000px"" >
            <category name="LOCATION" colour="%{BKY_LOGIC_HUE}">
                <block type="location"></block>
                
                
            </category>
            <category name="REFERENCE OBJECT" colour="%{BKY_LOGIC_HUE}">
                <block type="ref_object"></block>
            </category>
            <category name="ACTION" colour="%{BKY_LOGIC_HUE}">
                <block type="action"></block>
            </category>
            <category name="STOP CONDITION" colour="%{BKY_LOGIC_HUE}">
                <block type="stop_condition"></block>
            </category>
            <category name="REPEAT" colour="%{BKY_LOGIC_HUE}">
                <block type="repeat"></block>
            </category>
            <category name="SCHEMATIC" colour="%{BKY_LOGIC_HUE}">
                <block type="schematic"></block>
            </category>
            <category name="TEXT" colour="%{BKY_LOGIC_HUE}">
                <block type="text"></block>
                <block type="text_length"></block>
                <block type="text_print"></block>
            </category>
            <category name="MODIFICATIONS" colour="%{BKY_LOGIC_HUE}">
                <block type="thicken"></block>
                <block type="scale"></block>
                <block type="rigidmotion"></block>
                <block type="replace_geometry"></block>
                <block type="replace"></block>
                <block type="fill"></block>
            </category>
            <category name="BLOCK" colour="%{BKY_LOGIC_HUE}">
                <block type="block"></block>
            </category>
            

        </xml>
        
        
        <script>
            var demoWorkspace = Blockly.inject('blocklyDiv',
                                               {media: '../../media/',
                toolbox: document.getElementById('toolbox2')});
        Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                                   demoWorkspace);
                                   
                           function showCode() {
                               // Generate JavaScript code and display it.
                               Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
                               var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
                               alert(code);
                           }
        
        function runCode() {
            // Generate JavaScript code and run it.
            //lockly.JavaScript.INFINITE_LOOP_TRAP =
            //'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
            
            Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
            var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
            
            
            //Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
            
            
            /*try {
             eval(code);
             } catch (e) {
             alert(e);
             }*/
            
        }
        function OnButtonClick() {
            var cur=document.getElementById("dict").innerHTML;
            var textcontrol = document.getElementById("dict");
            textcontrol.innerHTML = cur+'\n\n'+document.getElementById("mytextarea").value+'->'+
            Blockly.JavaScript.workspaceToCode(demoWorkspace);
        }
        function saveIt(){
            var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
            var xml_text = Blockly.Xml.domToText(xml);   
            window.alert(xml_text);
        }
        function restoreIt(){
            var xml = Blockly.Xml.textToDom(document.getElementById("info").value);

            
            
            Blockly.Xml.domToWorkspace(xml, demoWorkspace);

        }
        






        

        </script>
    </body>
</html>
