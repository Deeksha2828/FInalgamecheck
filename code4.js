gdjs.scenario_321Code = {};
gdjs.scenario_321Code.localVariables = [];
gdjs.scenario_321Code.idToCallbackMap = new Map();
gdjs.scenario_321Code.GDNewSprite4Objects1= [];
gdjs.scenario_321Code.GDNewSprite4Objects2= [];
gdjs.scenario_321Code.GDNewSpriteObjects1= [];
gdjs.scenario_321Code.GDNewSpriteObjects2= [];
gdjs.scenario_321Code.GDNewTextObjects1= [];
gdjs.scenario_321Code.GDNewTextObjects2= [];
gdjs.scenario_321Code.GDReadytextObjects1= [];
gdjs.scenario_321Code.GDReadytextObjects2= [];
gdjs.scenario_321Code.GDstartButtonObjects1= [];
gdjs.scenario_321Code.GDstartButtonObjects2= [];
gdjs.scenario_321Code.GDNameInput1Objects1= [];
gdjs.scenario_321Code.GDNameInput1Objects2= [];


gdjs.scenario_321Code.mapOfGDgdjs_9546scenario_9595321Code_9546GDstartButtonObjects1Objects = Hashtable.newFrom({"startButton": gdjs.scenario_321Code.GDstartButtonObjects1});
gdjs.scenario_321Code.asyncCallback13807404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scenario_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scenario 2", false);
}
gdjs.scenario_321Code.localVariables.length = 0;
}
gdjs.scenario_321Code.idToCallbackMap.set(13807404, gdjs.scenario_321Code.asyncCallback13807404);
gdjs.scenario_321Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scenario_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.scenario_321Code.asyncCallback13807404(runtimeScene, asyncObjectsList)), 13807404, asyncObjectsList);
}
}

}


};gdjs.scenario_321Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Readytext"), gdjs.scenario_321Code.GDReadytextObjects1);
gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.scenario_321Code.GDstartButtonObjects1);
{for(var i = 0, len = gdjs.scenario_321Code.GDReadytextObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDReadytextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.scenario_321Code.GDstartButtonObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDstartButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IntroTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IntroTimer") > 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Readytext"), gdjs.scenario_321Code.GDReadytextObjects1);
{for(var i = 0, len = gdjs.scenario_321Code.GDReadytextObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDReadytextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IntroTimer") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput1"), gdjs.scenario_321Code.GDNameInput1Objects1);
{for(var i = 0, len = gdjs.scenario_321Code.GDNameInput1Objects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDNameInput1Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IntroTimer") > 3.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.scenario_321Code.GDstartButtonObjects1);
{for(var i = 0, len = gdjs.scenario_321Code.GDstartButtonObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDstartButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.scenario_321Code.GDstartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scenario_321Code.mapOfGDgdjs_9546scenario_9595321Code_9546GDstartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput1"), gdjs.scenario_321Code.GDNameInput1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Readytext"), gdjs.scenario_321Code.GDReadytextObjects1);
/* Reuse gdjs.scenario_321Code.GDstartButtonObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(9).setString((( gdjs.scenario_321Code.GDNameInput1Objects1.length === 0 ) ? "" :gdjs.scenario_321Code.GDNameInput1Objects1[0].getText()));
}
{for(var i = 0, len = gdjs.scenario_321Code.GDstartButtonObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDstartButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.scenario_321Code.GDReadytextObjects1.length ;i < len;++i) {
    gdjs.scenario_321Code.GDReadytextObjects1[i].hide();
}
}

{ //Subevents
gdjs.scenario_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.scenario_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scenario_321Code.GDNewSprite4Objects1.length = 0;
gdjs.scenario_321Code.GDNewSprite4Objects2.length = 0;
gdjs.scenario_321Code.GDNewSpriteObjects1.length = 0;
gdjs.scenario_321Code.GDNewSpriteObjects2.length = 0;
gdjs.scenario_321Code.GDNewTextObjects1.length = 0;
gdjs.scenario_321Code.GDNewTextObjects2.length = 0;
gdjs.scenario_321Code.GDReadytextObjects1.length = 0;
gdjs.scenario_321Code.GDReadytextObjects2.length = 0;
gdjs.scenario_321Code.GDstartButtonObjects1.length = 0;
gdjs.scenario_321Code.GDstartButtonObjects2.length = 0;
gdjs.scenario_321Code.GDNameInput1Objects1.length = 0;
gdjs.scenario_321Code.GDNameInput1Objects2.length = 0;

gdjs.scenario_321Code.eventsList1(runtimeScene);
gdjs.scenario_321Code.GDNewSprite4Objects1.length = 0;
gdjs.scenario_321Code.GDNewSprite4Objects2.length = 0;
gdjs.scenario_321Code.GDNewSpriteObjects1.length = 0;
gdjs.scenario_321Code.GDNewSpriteObjects2.length = 0;
gdjs.scenario_321Code.GDNewTextObjects1.length = 0;
gdjs.scenario_321Code.GDNewTextObjects2.length = 0;
gdjs.scenario_321Code.GDReadytextObjects1.length = 0;
gdjs.scenario_321Code.GDReadytextObjects2.length = 0;
gdjs.scenario_321Code.GDstartButtonObjects1.length = 0;
gdjs.scenario_321Code.GDstartButtonObjects2.length = 0;
gdjs.scenario_321Code.GDNameInput1Objects1.length = 0;
gdjs.scenario_321Code.GDNameInput1Objects2.length = 0;


return;

}

gdjs['scenario_321Code'] = gdjs.scenario_321Code;
