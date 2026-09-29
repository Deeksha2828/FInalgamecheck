gdjs.Question1Code = {};
gdjs.Question1Code.localVariables = [];
gdjs.Question1Code.idToCallbackMap = new Map();
gdjs.Question1Code.GDimage_95951Objects1= [];
gdjs.Question1Code.GDimage_95951Objects2= [];
gdjs.Question1Code.GDimage_95952Objects1= [];
gdjs.Question1Code.GDimage_95952Objects2= [];
gdjs.Question1Code.GDimage_95953Objects1= [];
gdjs.Question1Code.GDimage_95953Objects2= [];
gdjs.Question1Code.GDQuestionObjects1= [];
gdjs.Question1Code.GDQuestionObjects2= [];
gdjs.Question1Code.GDFeedback_9595textObjects1= [];
gdjs.Question1Code.GDFeedback_9595textObjects2= [];
gdjs.Question1Code.GDContinueObjects1= [];
gdjs.Question1Code.GDContinueObjects2= [];
gdjs.Question1Code.GDexplanationtextObjects1= [];
gdjs.Question1Code.GDexplanationtextObjects2= [];


gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595953Objects1Objects = Hashtable.newFrom({"image_3": gdjs.Question1Code.GDimage_95953Objects1});
gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595952Objects1Objects = Hashtable.newFrom({"image_2": gdjs.Question1Code.GDimage_95952Objects1});
gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595951Objects1Objects = Hashtable.newFrom({"image_1": gdjs.Question1Code.GDimage_95951Objects1});
gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.Question1Code.GDContinueObjects1});
gdjs.Question1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("image_3"), gdjs.Question1Code.GDimage_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595953Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Question1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("image_1"), gdjs.Question1Code.GDimage_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("image_2"), gdjs.Question1Code.GDimage_95952Objects1);
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].getBehavior("Text").setText("Correct✅!");
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95951Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95951Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95952Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95952Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RevealTimer");
}
{for(var i = 0, len = gdjs.Question1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDContinueObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Correct");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("False");
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("image_2"), gdjs.Question1Code.GDimage_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("image_1"), gdjs.Question1Code.GDimage_95951Objects1);
/* Reuse gdjs.Question1Code.GDimage_95952Objects1 */
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].getBehavior("Text").setText("Wrong❌");
}
}
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Wrong");
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95951Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95951Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95952Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95952Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RevealTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("False");
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("image_1"), gdjs.Question1Code.GDimage_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDimage_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
/* Reuse gdjs.Question1Code.GDimage_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("image_2"), gdjs.Question1Code.GDimage_95952Objects1);
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].getBehavior("Text").setText("Wrong❌");
}
}
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Wrong");
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95952Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95952Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95951Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95951Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RevealTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("False");
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RevealTimer") > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Question1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("image_1"), gdjs.Question1Code.GDimage_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("image_2"), gdjs.Question1Code.GDimage_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("image_3"), gdjs.Question1Code.GDimage_95953Objects1);
{for(var i = 0, len = gdjs.Question1Code.GDimage_95953Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95953Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95951Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95951Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDimage_95952Objects1.length ;i < len;++i) {
    gdjs.Question1Code.GDimage_95952Objects1[i].getBehavior("Opacity").setOpacity(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{for(var i = 0, len = gdjs.Question1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDContinueObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Question1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("explanationtext"), gdjs.Question1Code.GDexplanationtextObjects1);
{for(var i = 0, len = gdjs.Question1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Question1Code.GDexplanationtextObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDexplanationtextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Question1Code.GDContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Question1Code.mapOfGDgdjs_9546Question1Code_9546GDContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].getBehavior("Text").setText("Continue");
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question2", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "Wrong");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RevealTimer") > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.Question1Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Feedback_text"), gdjs.Question1Code.GDFeedback_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("explanationtext"), gdjs.Question1Code.GDexplanationtextObjects1);
{for(var i = 0, len = gdjs.Question1Code.GDFeedback_9595textObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDFeedback_9595textObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Question1Code.GDexplanationtextObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDexplanationtextObjects1[i].getBehavior("Text").setText("The correct answer is option C");
}
}
{for(var i = 0, len = gdjs.Question1Code.GDexplanationtextObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDexplanationtextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Question1Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.Question1Code.GDContinueObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Show answer");
}
}

}


};

gdjs.Question1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Question1Code.GDimage_95951Objects1.length = 0;
gdjs.Question1Code.GDimage_95951Objects2.length = 0;
gdjs.Question1Code.GDimage_95952Objects1.length = 0;
gdjs.Question1Code.GDimage_95952Objects2.length = 0;
gdjs.Question1Code.GDimage_95953Objects1.length = 0;
gdjs.Question1Code.GDimage_95953Objects2.length = 0;
gdjs.Question1Code.GDQuestionObjects1.length = 0;
gdjs.Question1Code.GDQuestionObjects2.length = 0;
gdjs.Question1Code.GDFeedback_9595textObjects1.length = 0;
gdjs.Question1Code.GDFeedback_9595textObjects2.length = 0;
gdjs.Question1Code.GDContinueObjects1.length = 0;
gdjs.Question1Code.GDContinueObjects2.length = 0;
gdjs.Question1Code.GDexplanationtextObjects1.length = 0;
gdjs.Question1Code.GDexplanationtextObjects2.length = 0;

gdjs.Question1Code.eventsList0(runtimeScene);
gdjs.Question1Code.GDimage_95951Objects1.length = 0;
gdjs.Question1Code.GDimage_95951Objects2.length = 0;
gdjs.Question1Code.GDimage_95952Objects1.length = 0;
gdjs.Question1Code.GDimage_95952Objects2.length = 0;
gdjs.Question1Code.GDimage_95953Objects1.length = 0;
gdjs.Question1Code.GDimage_95953Objects2.length = 0;
gdjs.Question1Code.GDQuestionObjects1.length = 0;
gdjs.Question1Code.GDQuestionObjects2.length = 0;
gdjs.Question1Code.GDFeedback_9595textObjects1.length = 0;
gdjs.Question1Code.GDFeedback_9595textObjects2.length = 0;
gdjs.Question1Code.GDContinueObjects1.length = 0;
gdjs.Question1Code.GDContinueObjects2.length = 0;
gdjs.Question1Code.GDexplanationtextObjects1.length = 0;
gdjs.Question1Code.GDexplanationtextObjects2.length = 0;


return;

}

gdjs['Question1Code'] = gdjs.Question1Code;
