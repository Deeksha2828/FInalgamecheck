gdjs.Question2Code = {};
gdjs.Question2Code.localVariables = [];
gdjs.Question2Code.idToCallbackMap = new Map();
gdjs.Question2Code.GDNewSpriteObjects1= [];
gdjs.Question2Code.GDNewSpriteObjects2= [];
gdjs.Question2Code.GDQuestionObjects1= [];
gdjs.Question2Code.GDQuestionObjects2= [];
gdjs.Question2Code.GDGreyButtonWithShadowObjects1= [];
gdjs.Question2Code.GDGreyButtonWithShadowObjects2= [];
gdjs.Question2Code.GDRate1Objects1= [];
gdjs.Question2Code.GDRate1Objects2= [];
gdjs.Question2Code.GDR2Objects1= [];
gdjs.Question2Code.GDR2Objects2= [];
gdjs.Question2Code.GDR3Objects1= [];
gdjs.Question2Code.GDR3Objects2= [];
gdjs.Question2Code.GDRate4Objects1= [];
gdjs.Question2Code.GDRate4Objects2= [];
gdjs.Question2Code.GDRate5Objects1= [];
gdjs.Question2Code.GDRate5Objects2= [];
gdjs.Question2Code.GDRate6Objects1= [];
gdjs.Question2Code.GDRate6Objects2= [];
gdjs.Question2Code.GDRate7Objects1= [];
gdjs.Question2Code.GDRate7Objects2= [];
gdjs.Question2Code.GDRate8Objects1= [];
gdjs.Question2Code.GDRate8Objects2= [];
gdjs.Question2Code.GDRate9Objects1= [];
gdjs.Question2Code.GDRate9Objects2= [];
gdjs.Question2Code.GDRate10Objects1= [];
gdjs.Question2Code.GDRate10Objects2= [];
gdjs.Question2Code.GDselectedratingtextObjects1= [];
gdjs.Question2Code.GDselectedratingtextObjects2= [];


gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate1Objects1Objects = Hashtable.newFrom({"Rate1": gdjs.Question2Code.GDRate1Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDR2Objects1Objects = Hashtable.newFrom({"R2": gdjs.Question2Code.GDR2Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDR3Objects1Objects = Hashtable.newFrom({"R3": gdjs.Question2Code.GDR3Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate4Objects1Objects = Hashtable.newFrom({"Rate4": gdjs.Question2Code.GDRate4Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate5Objects1Objects = Hashtable.newFrom({"Rate5": gdjs.Question2Code.GDRate5Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate6Objects1Objects = Hashtable.newFrom({"Rate6": gdjs.Question2Code.GDRate6Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate7Objects1Objects = Hashtable.newFrom({"Rate7": gdjs.Question2Code.GDRate7Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate8Objects1Objects = Hashtable.newFrom({"Rate8": gdjs.Question2Code.GDRate8Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate9Objects1Objects = Hashtable.newFrom({"Rate9": gdjs.Question2Code.GDRate9Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate10Objects1Objects = Hashtable.newFrom({"Rate10": gdjs.Question2Code.GDRate10Objects1});
gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDGreyButtonWithShadowObjects1Objects = Hashtable.newFrom({"GreyButtonWithShadow": gdjs.Question2Code.GDGreyButtonWithShadowObjects1});
gdjs.Question2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Rate1"), gdjs.Question2Code.GDRate1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:1");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate1Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate1Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("R2"), gdjs.Question2Code.GDR2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDR2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDR2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(2);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:2");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDR2Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDR2Objects1[i].setColor("245;166;35");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Select a rating");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("R3"), gdjs.Question2Code.GDR3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDR3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDR3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(3);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:3");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDR3Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDR3Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate4"), gdjs.Question2Code.GDRate4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(4);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:4");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate4Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate4Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate5"), gdjs.Question2Code.GDRate5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(5);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:5");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate5Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate5Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate6"), gdjs.Question2Code.GDRate6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(6);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:6");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate6Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate6Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate7"), gdjs.Question2Code.GDRate7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate7Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(7);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:7");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate7Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate7Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate8"), gdjs.Question2Code.GDRate8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate8Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(8);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:8");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate8Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate8Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate9"), gdjs.Question2Code.GDRate9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate9Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(9);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:9");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate9Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate9Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rate10"), gdjs.Question2Code.GDRate10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDRate10Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);
/* Reuse gdjs.Question2Code.GDRate10Objects1 */
gdjs.copyArray(runtimeScene.getObjects("selectedratingtext"), gdjs.Question2Code.GDselectedratingtextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(10);
}
{for(var i = 0, len = gdjs.Question2Code.GDselectedratingtextObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDselectedratingtextObjects1[i].getBehavior("Text").setText("Selected rating:10");
}
}
{for(var i = 0, len = gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Question2Code.GDGreyButtonWithShadowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question2Code.GDRate10Objects1.length ;i < len;++i) {
    gdjs.Question2Code.GDRate10Objects1[i].setColor("245;166;35");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.Question2Code.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question2Code.mapOfGDgdjs_9546Question2Code_9546GDGreyButtonWithShadowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Question2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Question2Code.GDNewSpriteObjects1.length = 0;
gdjs.Question2Code.GDNewSpriteObjects2.length = 0;
gdjs.Question2Code.GDQuestionObjects1.length = 0;
gdjs.Question2Code.GDQuestionObjects2.length = 0;
gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.Question2Code.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.Question2Code.GDRate1Objects1.length = 0;
gdjs.Question2Code.GDRate1Objects2.length = 0;
gdjs.Question2Code.GDR2Objects1.length = 0;
gdjs.Question2Code.GDR2Objects2.length = 0;
gdjs.Question2Code.GDR3Objects1.length = 0;
gdjs.Question2Code.GDR3Objects2.length = 0;
gdjs.Question2Code.GDRate4Objects1.length = 0;
gdjs.Question2Code.GDRate4Objects2.length = 0;
gdjs.Question2Code.GDRate5Objects1.length = 0;
gdjs.Question2Code.GDRate5Objects2.length = 0;
gdjs.Question2Code.GDRate6Objects1.length = 0;
gdjs.Question2Code.GDRate6Objects2.length = 0;
gdjs.Question2Code.GDRate7Objects1.length = 0;
gdjs.Question2Code.GDRate7Objects2.length = 0;
gdjs.Question2Code.GDRate8Objects1.length = 0;
gdjs.Question2Code.GDRate8Objects2.length = 0;
gdjs.Question2Code.GDRate9Objects1.length = 0;
gdjs.Question2Code.GDRate9Objects2.length = 0;
gdjs.Question2Code.GDRate10Objects1.length = 0;
gdjs.Question2Code.GDRate10Objects2.length = 0;
gdjs.Question2Code.GDselectedratingtextObjects1.length = 0;
gdjs.Question2Code.GDselectedratingtextObjects2.length = 0;

gdjs.Question2Code.eventsList0(runtimeScene);
gdjs.Question2Code.GDNewSpriteObjects1.length = 0;
gdjs.Question2Code.GDNewSpriteObjects2.length = 0;
gdjs.Question2Code.GDQuestionObjects1.length = 0;
gdjs.Question2Code.GDQuestionObjects2.length = 0;
gdjs.Question2Code.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.Question2Code.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.Question2Code.GDRate1Objects1.length = 0;
gdjs.Question2Code.GDRate1Objects2.length = 0;
gdjs.Question2Code.GDR2Objects1.length = 0;
gdjs.Question2Code.GDR2Objects2.length = 0;
gdjs.Question2Code.GDR3Objects1.length = 0;
gdjs.Question2Code.GDR3Objects2.length = 0;
gdjs.Question2Code.GDRate4Objects1.length = 0;
gdjs.Question2Code.GDRate4Objects2.length = 0;
gdjs.Question2Code.GDRate5Objects1.length = 0;
gdjs.Question2Code.GDRate5Objects2.length = 0;
gdjs.Question2Code.GDRate6Objects1.length = 0;
gdjs.Question2Code.GDRate6Objects2.length = 0;
gdjs.Question2Code.GDRate7Objects1.length = 0;
gdjs.Question2Code.GDRate7Objects2.length = 0;
gdjs.Question2Code.GDRate8Objects1.length = 0;
gdjs.Question2Code.GDRate8Objects2.length = 0;
gdjs.Question2Code.GDRate9Objects1.length = 0;
gdjs.Question2Code.GDRate9Objects2.length = 0;
gdjs.Question2Code.GDRate10Objects1.length = 0;
gdjs.Question2Code.GDRate10Objects2.length = 0;
gdjs.Question2Code.GDselectedratingtextObjects1.length = 0;
gdjs.Question2Code.GDselectedratingtextObjects2.length = 0;


return;

}

gdjs['Question2Code'] = gdjs.Question2Code;
