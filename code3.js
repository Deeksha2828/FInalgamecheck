gdjs.Final_32sceneCode = {};
gdjs.Final_32sceneCode.localVariables = [];
gdjs.Final_32sceneCode.idToCallbackMap = new Map();
gdjs.Final_32sceneCode.GDResultstextObjects1= [];
gdjs.Final_32sceneCode.GDResultstextObjects2= [];
gdjs.Final_32sceneCode.GDThankyoutextObjects1= [];
gdjs.Final_32sceneCode.GDThankyoutextObjects2= [];
gdjs.Final_32sceneCode.GDSubmitObjects1= [];
gdjs.Final_32sceneCode.GDSubmitObjects2= [];
gdjs.Final_32sceneCode.GDresponsetextObjects1= [];
gdjs.Final_32sceneCode.GDresponsetextObjects2= [];
gdjs.Final_32sceneCode.GDerrortextObjects1= [];
gdjs.Final_32sceneCode.GDerrortextObjects2= [];
gdjs.Final_32sceneCode.GDQ1TextObjects1= [];
gdjs.Final_32sceneCode.GDQ1TextObjects2= [];
gdjs.Final_32sceneCode.GDQ2TextObjects1= [];
gdjs.Final_32sceneCode.GDQ2TextObjects2= [];
gdjs.Final_32sceneCode.GDUsertextObjects1= [];
gdjs.Final_32sceneCode.GDUsertextObjects2= [];


gdjs.Final_32sceneCode.mapOfGDgdjs_9546Final_959532sceneCode_9546GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.Final_32sceneCode.GDSubmitObjects1});
gdjs.Final_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Usertext"), gdjs.Final_32sceneCode.GDUsertextObjects1);
{for(var i = 0, len = gdjs.Final_32sceneCode.GDUsertextObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDUsertextObjects1[i].getBehavior("Text").setText("Participant: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.Final_32sceneCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Final_32sceneCode.mapOfGDgdjs_9546Final_959532sceneCode_9546GDSubmitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Final_32sceneCode.GDSubmitObjects1 */
{gdjs.evtTools.network.sendAsyncRequest("https://script.google.com/macros/s/AKfycbyC9AKxboSXK-GdfIUlV2_Fd9aTe8OoKRPVMnjFJ0nPUdOMgzv3R4suGD7QP1FredjB/exec", "{\"Username\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) + "\",\"Q1Answer\":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))) + ",\"Q2Rating\":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11))) + "}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.Final_32sceneCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDSubmitObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scenario 1", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("responsetext"), gdjs.Final_32sceneCode.GDresponsetextObjects1);
{for(var i = 0, len = gdjs.Final_32sceneCode.GDresponsetextObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDresponsetextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("errortext"), gdjs.Final_32sceneCode.GDerrortextObjects1);
{for(var i = 0, len = gdjs.Final_32sceneCode.GDerrortextObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDerrortextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Q1Text"), gdjs.Final_32sceneCode.GDQ1TextObjects1);
{for(var i = 0, len = gdjs.Final_32sceneCode.GDQ1TextObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDQ1TextObjects1[i].getBehavior("Text").setText("Question 1 Answer: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Q2Text"), gdjs.Final_32sceneCode.GDQ2TextObjects1);
{for(var i = 0, len = gdjs.Final_32sceneCode.GDQ2TextObjects1.length ;i < len;++i) {
    gdjs.Final_32sceneCode.GDQ2TextObjects1[i].getBehavior("Text").setText("Question 2 Rating: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11))));
}
}
}

}


};

gdjs.Final_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Final_32sceneCode.GDResultstextObjects1.length = 0;
gdjs.Final_32sceneCode.GDResultstextObjects2.length = 0;
gdjs.Final_32sceneCode.GDThankyoutextObjects1.length = 0;
gdjs.Final_32sceneCode.GDThankyoutextObjects2.length = 0;
gdjs.Final_32sceneCode.GDSubmitObjects1.length = 0;
gdjs.Final_32sceneCode.GDSubmitObjects2.length = 0;
gdjs.Final_32sceneCode.GDresponsetextObjects1.length = 0;
gdjs.Final_32sceneCode.GDresponsetextObjects2.length = 0;
gdjs.Final_32sceneCode.GDerrortextObjects1.length = 0;
gdjs.Final_32sceneCode.GDerrortextObjects2.length = 0;
gdjs.Final_32sceneCode.GDQ1TextObjects1.length = 0;
gdjs.Final_32sceneCode.GDQ1TextObjects2.length = 0;
gdjs.Final_32sceneCode.GDQ2TextObjects1.length = 0;
gdjs.Final_32sceneCode.GDQ2TextObjects2.length = 0;
gdjs.Final_32sceneCode.GDUsertextObjects1.length = 0;
gdjs.Final_32sceneCode.GDUsertextObjects2.length = 0;

gdjs.Final_32sceneCode.eventsList0(runtimeScene);
gdjs.Final_32sceneCode.GDResultstextObjects1.length = 0;
gdjs.Final_32sceneCode.GDResultstextObjects2.length = 0;
gdjs.Final_32sceneCode.GDThankyoutextObjects1.length = 0;
gdjs.Final_32sceneCode.GDThankyoutextObjects2.length = 0;
gdjs.Final_32sceneCode.GDSubmitObjects1.length = 0;
gdjs.Final_32sceneCode.GDSubmitObjects2.length = 0;
gdjs.Final_32sceneCode.GDresponsetextObjects1.length = 0;
gdjs.Final_32sceneCode.GDresponsetextObjects2.length = 0;
gdjs.Final_32sceneCode.GDerrortextObjects1.length = 0;
gdjs.Final_32sceneCode.GDerrortextObjects2.length = 0;
gdjs.Final_32sceneCode.GDQ1TextObjects1.length = 0;
gdjs.Final_32sceneCode.GDQ1TextObjects2.length = 0;
gdjs.Final_32sceneCode.GDQ2TextObjects1.length = 0;
gdjs.Final_32sceneCode.GDQ2TextObjects2.length = 0;
gdjs.Final_32sceneCode.GDUsertextObjects1.length = 0;
gdjs.Final_32sceneCode.GDUsertextObjects2.length = 0;


return;

}

gdjs['Final_32sceneCode'] = gdjs.Final_32sceneCode;
