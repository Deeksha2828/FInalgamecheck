gdjs.Scenario_324Code = {};
gdjs.Scenario_324Code.localVariables = [];
gdjs.Scenario_324Code.idToCallbackMap = new Map();
gdjs.Scenario_324Code.GDBGObjects1= [];
gdjs.Scenario_324Code.GDBGObjects2= [];
gdjs.Scenario_324Code.GDQuestion3Objects1= [];
gdjs.Scenario_324Code.GDQuestion3Objects2= [];
gdjs.Scenario_324Code.GDspineObjects1= [];
gdjs.Scenario_324Code.GDspineObjects2= [];
gdjs.Scenario_324Code.GDNewSpriteObjects1= [];
gdjs.Scenario_324Code.GDNewSpriteObjects2= [];
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1= [];
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects2= [];
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1= [];
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects2= [];
gdjs.Scenario_324Code.GDDoseReductionInputObjects1= [];
gdjs.Scenario_324Code.GDDoseReductionInputObjects2= [];
gdjs.Scenario_324Code.GDContinuebuttonObjects1= [];
gdjs.Scenario_324Code.GDContinuebuttonObjects2= [];
gdjs.Scenario_324Code.GDQuestion4Objects1= [];
gdjs.Scenario_324Code.GDQuestion4Objects2= [];
gdjs.Scenario_324Code.GDYesbutton1Objects1= [];
gdjs.Scenario_324Code.GDYesbutton1Objects2= [];
gdjs.Scenario_324Code.GDNoButton1Objects1= [];
gdjs.Scenario_324Code.GDNoButton1Objects2= [];
gdjs.Scenario_324Code.GDSliderQ3Objects1= [];
gdjs.Scenario_324Code.GDSliderQ3Objects2= [];
gdjs.Scenario_324Code.GDRatingTextQ3Objects1= [];
gdjs.Scenario_324Code.GDRatingTextQ3Objects2= [];
gdjs.Scenario_324Code.GDSliderlabelleftObjects1= [];
gdjs.Scenario_324Code.GDSliderlabelleftObjects2= [];
gdjs.Scenario_324Code.GDSliderlabelrightObjects1= [];
gdjs.Scenario_324Code.GDSliderlabelrightObjects2= [];
gdjs.Scenario_324Code.GDContinueButton2Objects1= [];
gdjs.Scenario_324Code.GDContinueButton2Objects2= [];


gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDContinuebuttonObjects1Objects = Hashtable.newFrom({"Continuebutton": gdjs.Scenario_324Code.GDContinuebuttonObjects1});
gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDYesbutton1Objects1Objects = Hashtable.newFrom({"Yesbutton1": gdjs.Scenario_324Code.GDYesbutton1Objects1});
gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDNoButton1Objects1Objects = Hashtable.newFrom({"NoButton1": gdjs.Scenario_324Code.GDNoButton1Objects1});
gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDContinueButton2Objects1Objects = Hashtable.newFrom({"ContinueButton2": gdjs.Scenario_324Code.GDContinueButton2Objects1});
gdjs.Scenario_324Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Continuebutton"), gdjs.Scenario_324Code.GDContinuebuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("DoseReductionInput"), gdjs.Scenario_324Code.GDDoseReductionInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDContinuebuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_324Code.GDDoseReductionInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_324Code.GDDoseReductionInputObjects1[k] = gdjs.Scenario_324Code.GDDoseReductionInputObjects1[i];
        ++k;
    }
}
gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scenario_324Code.GDContinuebuttonObjects1 */
/* Reuse gdjs.Scenario_324Code.GDDoseReductionInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Scenario_324Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton1"), gdjs.Scenario_324Code.GDNoButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("OPTIQAIREDUCEDDOSE"), gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptiqAI_image"), gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Scenario_324Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question4"), gdjs.Scenario_324Code.GDQuestion4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Yesbutton1"), gdjs.Scenario_324Code.GDYesbutton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("spine"), gdjs.Scenario_324Code.GDspineObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(19).setString((( gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length === 0 ) ? "" :gdjs.Scenario_324Code.GDDoseReductionInputObjects1[0].getText()));
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDDoseReductionInputObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDContinuebuttonObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDContinuebuttonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDspineObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDspineObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion4Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDYesbutton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDYesbutton1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDNoButton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDNoButton1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion4Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion4Objects1[i].getBehavior("Text").setText("Would a similar dose reduction influence your fluoroscopy usage patterns?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton2"), gdjs.Scenario_324Code.GDContinueButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton1"), gdjs.Scenario_324Code.GDNoButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question4"), gdjs.Scenario_324Code.GDQuestion4Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ3"), gdjs.Scenario_324Code.GDRatingTextQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ3"), gdjs.Scenario_324Code.GDSliderQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelleft"), gdjs.Scenario_324Code.GDSliderlabelleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelright"), gdjs.Scenario_324Code.GDSliderlabelrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yesbutton1"), gdjs.Scenario_324Code.GDYesbutton1Objects1);
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion4Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDYesbutton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDYesbutton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDNoButton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDNoButton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderQ3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDRatingTextQ3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelleftObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelleftObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelrightObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelrightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDContinueButton2Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDContinueButton2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yesbutton1"), gdjs.Scenario_324Code.GDYesbutton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDYesbutton1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton2"), gdjs.Scenario_324Code.GDContinueButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NoButton1"), gdjs.Scenario_324Code.GDNoButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Scenario_324Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question4"), gdjs.Scenario_324Code.GDQuestion4Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ3"), gdjs.Scenario_324Code.GDRatingTextQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ3"), gdjs.Scenario_324Code.GDSliderQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelleft"), gdjs.Scenario_324Code.GDSliderlabelleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelright"), gdjs.Scenario_324Code.GDSliderlabelrightObjects1);
/* Reuse gdjs.Scenario_324Code.GDYesbutton1Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("Yes");
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDYesbutton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDYesbutton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDNoButton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDNoButton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion4Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion3Objects1[i].getBehavior("Text").setText("How valuable would it be if AI could help reduce radiation exposure while maintaining image quality?");
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderQ3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDRatingTextQ3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelleftObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelleftObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelrightObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelrightObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDContinueButton2Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDContinueButton2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton1"), gdjs.Scenario_324Code.GDNoButton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDNoButton1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton2"), gdjs.Scenario_324Code.GDContinueButton2Objects1);
/* Reuse gdjs.Scenario_324Code.GDNoButton1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Question3"), gdjs.Scenario_324Code.GDQuestion3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Question4"), gdjs.Scenario_324Code.GDQuestion4Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ3"), gdjs.Scenario_324Code.GDRatingTextQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ3"), gdjs.Scenario_324Code.GDSliderQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelleft"), gdjs.Scenario_324Code.GDSliderlabelleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sliderlabelright"), gdjs.Scenario_324Code.GDSliderlabelrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yesbutton1"), gdjs.Scenario_324Code.GDYesbutton1Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(20).setString("No");
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDYesbutton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDYesbutton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDNoButton1Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDNoButton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion4Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion3Objects1[i].getBehavior("Text").setText("How valuable would it be if AI could help reduce radiation exposure while maintaining image quality?");
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDQuestion3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDQuestion3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderQ3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDRatingTextQ3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelleftObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelleftObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDSliderlabelrightObjects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDSliderlabelrightObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_324Code.GDContinueButton2Objects1.length ;i < len;++i) {
    gdjs.Scenario_324Code.GDContinueButton2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton2"), gdjs.Scenario_324Code.GDContinueButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_324Code.mapOfGDgdjs_9546Scenario_9595324Code_9546GDContinueButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingTextQ3"), gdjs.Scenario_324Code.GDRatingTextQ3Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length === 0 ) ? "" :gdjs.Scenario_324Code.GDRatingTextQ3Objects1[0].getString()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scenario 5", false);
}
}

}


};

gdjs.Scenario_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scenario_324Code.GDBGObjects1.length = 0;
gdjs.Scenario_324Code.GDBGObjects2.length = 0;
gdjs.Scenario_324Code.GDQuestion3Objects1.length = 0;
gdjs.Scenario_324Code.GDQuestion3Objects2.length = 0;
gdjs.Scenario_324Code.GDspineObjects1.length = 0;
gdjs.Scenario_324Code.GDspineObjects2.length = 0;
gdjs.Scenario_324Code.GDNewSpriteObjects1.length = 0;
gdjs.Scenario_324Code.GDNewSpriteObjects2.length = 0;
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1.length = 0;
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects2.length = 0;
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1.length = 0;
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects2.length = 0;
gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length = 0;
gdjs.Scenario_324Code.GDDoseReductionInputObjects2.length = 0;
gdjs.Scenario_324Code.GDContinuebuttonObjects1.length = 0;
gdjs.Scenario_324Code.GDContinuebuttonObjects2.length = 0;
gdjs.Scenario_324Code.GDQuestion4Objects1.length = 0;
gdjs.Scenario_324Code.GDQuestion4Objects2.length = 0;
gdjs.Scenario_324Code.GDYesbutton1Objects1.length = 0;
gdjs.Scenario_324Code.GDYesbutton1Objects2.length = 0;
gdjs.Scenario_324Code.GDNoButton1Objects1.length = 0;
gdjs.Scenario_324Code.GDNoButton1Objects2.length = 0;
gdjs.Scenario_324Code.GDSliderQ3Objects1.length = 0;
gdjs.Scenario_324Code.GDSliderQ3Objects2.length = 0;
gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length = 0;
gdjs.Scenario_324Code.GDRatingTextQ3Objects2.length = 0;
gdjs.Scenario_324Code.GDSliderlabelleftObjects1.length = 0;
gdjs.Scenario_324Code.GDSliderlabelleftObjects2.length = 0;
gdjs.Scenario_324Code.GDSliderlabelrightObjects1.length = 0;
gdjs.Scenario_324Code.GDSliderlabelrightObjects2.length = 0;
gdjs.Scenario_324Code.GDContinueButton2Objects1.length = 0;
gdjs.Scenario_324Code.GDContinueButton2Objects2.length = 0;

gdjs.Scenario_324Code.eventsList0(runtimeScene);
gdjs.Scenario_324Code.GDBGObjects1.length = 0;
gdjs.Scenario_324Code.GDBGObjects2.length = 0;
gdjs.Scenario_324Code.GDQuestion3Objects1.length = 0;
gdjs.Scenario_324Code.GDQuestion3Objects2.length = 0;
gdjs.Scenario_324Code.GDspineObjects1.length = 0;
gdjs.Scenario_324Code.GDspineObjects2.length = 0;
gdjs.Scenario_324Code.GDNewSpriteObjects1.length = 0;
gdjs.Scenario_324Code.GDNewSpriteObjects2.length = 0;
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects1.length = 0;
gdjs.Scenario_324Code.GDOptiqAI_9595imageObjects2.length = 0;
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects1.length = 0;
gdjs.Scenario_324Code.GDOPTIQAIREDUCEDDOSEObjects2.length = 0;
gdjs.Scenario_324Code.GDDoseReductionInputObjects1.length = 0;
gdjs.Scenario_324Code.GDDoseReductionInputObjects2.length = 0;
gdjs.Scenario_324Code.GDContinuebuttonObjects1.length = 0;
gdjs.Scenario_324Code.GDContinuebuttonObjects2.length = 0;
gdjs.Scenario_324Code.GDQuestion4Objects1.length = 0;
gdjs.Scenario_324Code.GDQuestion4Objects2.length = 0;
gdjs.Scenario_324Code.GDYesbutton1Objects1.length = 0;
gdjs.Scenario_324Code.GDYesbutton1Objects2.length = 0;
gdjs.Scenario_324Code.GDNoButton1Objects1.length = 0;
gdjs.Scenario_324Code.GDNoButton1Objects2.length = 0;
gdjs.Scenario_324Code.GDSliderQ3Objects1.length = 0;
gdjs.Scenario_324Code.GDSliderQ3Objects2.length = 0;
gdjs.Scenario_324Code.GDRatingTextQ3Objects1.length = 0;
gdjs.Scenario_324Code.GDRatingTextQ3Objects2.length = 0;
gdjs.Scenario_324Code.GDSliderlabelleftObjects1.length = 0;
gdjs.Scenario_324Code.GDSliderlabelleftObjects2.length = 0;
gdjs.Scenario_324Code.GDSliderlabelrightObjects1.length = 0;
gdjs.Scenario_324Code.GDSliderlabelrightObjects2.length = 0;
gdjs.Scenario_324Code.GDContinueButton2Objects1.length = 0;
gdjs.Scenario_324Code.GDContinueButton2Objects2.length = 0;


return;

}

gdjs['Scenario_324Code'] = gdjs.Scenario_324Code;
