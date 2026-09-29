gdjs.Submit_32ScenarioCode = {};
gdjs.Submit_32ScenarioCode.localVariables = [];
gdjs.Submit_32ScenarioCode.idToCallbackMap = new Map();
gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects1= [];
gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects2= [];
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects1= [];
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects2= [];
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects1= [];
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects2= [];


gdjs.Submit_32ScenarioCode.mapOfGDgdjs_9546Submit_959532ScenarioCode_9546GDSubmit_95959595buttonObjects1Objects = Hashtable.newFrom({"Submit_button": gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects1});
gdjs.Submit_32ScenarioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Submit_button"), gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Submit_32ScenarioCode.mapOfGDgdjs_9546Submit_959532ScenarioCode_9546GDSubmit_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://script.google.com/macros/s/AKfycbzLxHGujqfOXJkOU-IrIeQ1nYYN2mHV2cgCi-HASKDW6V149Nj5D69hGxf9qqnicefe/exec", "Username1=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "&Scenario1_Imagechoice=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)) + "&Scenario1_Clinicaldecision=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) + "&Scenario1_Impact=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) + "&Scenario2_Confidencedecision=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + "&Scenario2_Confidencevalue=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(18)) + "&Scenario3_DoseReductionEstimate=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(19)) + "&Scenario3_Radexpo=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(20)) + "&Scenario3_Radexpovalue=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "&Scenario5_Nextstep=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "&Scenario5_Imagechoice=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + "&Scenario5_Workflowchange=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) + "&Scenario5_Detailrecognition=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + "&Scenario5_Safetyrating=" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)), "POST", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
}

}


};

gdjs.Submit_32ScenarioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects1.length = 0;
gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects2.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects1.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects2.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects1.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects2.length = 0;

gdjs.Submit_32ScenarioCode.eventsList0(runtimeScene);
gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects1.length = 0;
gdjs.Submit_32ScenarioCode.GDSubmit_9595buttonObjects2.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects1.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSpriteObjects2.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects1.length = 0;
gdjs.Submit_32ScenarioCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Submit_32ScenarioCode'] = gdjs.Submit_32ScenarioCode;
