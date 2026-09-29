gdjs.Scenario_323Code = {};
gdjs.Scenario_323Code.localVariables = [];
gdjs.Scenario_323Code.idToCallbackMap = new Map();
gdjs.Scenario_323Code.GDBGObjects1= [];
gdjs.Scenario_323Code.GDBGObjects2= [];
gdjs.Scenario_323Code.GDQuestion2Objects1= [];
gdjs.Scenario_323Code.GDQuestion2Objects2= [];
gdjs.Scenario_323Code.GDYes_9595ButtonObjects1= [];
gdjs.Scenario_323Code.GDYes_9595ButtonObjects2= [];
gdjs.Scenario_323Code.GDNo_9595ButtonObjects1= [];
gdjs.Scenario_323Code.GDNo_9595ButtonObjects2= [];
gdjs.Scenario_323Code.GDSliderQ2Objects1= [];
gdjs.Scenario_323Code.GDSliderQ2Objects2= [];
gdjs.Scenario_323Code.GDSliderValueObjects1= [];
gdjs.Scenario_323Code.GDSliderValueObjects2= [];
gdjs.Scenario_323Code.GDRatingTextObjects1= [];
gdjs.Scenario_323Code.GDRatingTextObjects2= [];
gdjs.Scenario_323Code.GDContinueButtonObjects1= [];
gdjs.Scenario_323Code.GDContinueButtonObjects2= [];
gdjs.Scenario_323Code.GDLeftlabelObjects1= [];
gdjs.Scenario_323Code.GDLeftlabelObjects2= [];
gdjs.Scenario_323Code.GDRightlabelObjects1= [];
gdjs.Scenario_323Code.GDRightlabelObjects2= [];


gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDYes_95959595ButtonObjects1Objects = Hashtable.newFrom({"Yes_Button": gdjs.Scenario_323Code.GDYes_9595ButtonObjects1});
gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDNo_95959595ButtonObjects1Objects = Hashtable.newFrom({"No_Button": gdjs.Scenario_323Code.GDNo_9595ButtonObjects1});
gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.Scenario_323Code.GDContinueButtonObjects1});
gdjs.Scenario_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_323Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leftlabel"), gdjs.Scenario_323Code.GDLeftlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rightlabel"), gdjs.Scenario_323Code.GDRightlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ2"), gdjs.Scenario_323Code.GDSliderQ2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderQ2Objects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderQ2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderValueObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderValueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDContinueButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDLeftlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDLeftlabelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRightlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRightlabelObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs.Scenario_323Code.GDYes_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDYes_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_323Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leftlabel"), gdjs.Scenario_323Code.GDLeftlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("No_Button"), gdjs.Scenario_323Code.GDNo_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Scenario_323Code.GDQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rightlabel"), gdjs.Scenario_323Code.GDRightlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ2"), gdjs.Scenario_323Code.GDSliderQ2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);
/* Reuse gdjs.Scenario_323Code.GDYes_9595ButtonObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("Yes");
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDYes_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDYes_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDNo_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDNo_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDQuestion2Objects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDQuestion2Objects1[i].getBehavior("Text").setText("How valuable would increased confidence be during complex EVAR procedures?");
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderQ2Objects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderQ2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderValueObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderValueObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDContinueButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDLeftlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDLeftlabelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRightlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRightlabelObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No_Button"), gdjs.Scenario_323Code.GDNo_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDNo_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_323Code.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leftlabel"), gdjs.Scenario_323Code.GDLeftlabelObjects1);
/* Reuse gdjs.Scenario_323Code.GDNo_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Question2"), gdjs.Scenario_323Code.GDQuestion2Objects1);
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rightlabel"), gdjs.Scenario_323Code.GDRightlabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SliderQ2"), gdjs.Scenario_323Code.GDSliderQ2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes_Button"), gdjs.Scenario_323Code.GDYes_9595ButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("No");
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDYes_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDYes_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDNo_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDNo_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDQuestion2Objects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDQuestion2Objects1[i].getBehavior("Text").setText("How valuable would increased confidence be during complex EVAR procedures?");
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderQ2Objects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderQ2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderValueObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderValueObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDContinueButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDLeftlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDLeftlabelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scenario_323Code.GDRightlabelObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRightlabelObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SliderQ2"), gdjs.Scenario_323Code.GDSliderQ2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDSliderValueObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.Scenario_323Code.GDSliderQ2Objects1.length === 0 ) ? 0 :gdjs.Scenario_323Code.GDSliderQ2Objects1[0].Value(null))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_323Code.GDSliderValueObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").getText() == "1" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_323Code.GDSliderValueObjects1[k] = gdjs.Scenario_323Code.GDSliderValueObjects1[i];
        ++k;
    }
}
gdjs.Scenario_323Code.GDSliderValueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].getBehavior("Text").setText("Not valuable");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_323Code.GDSliderValueObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").getText() == "2" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_323Code.GDSliderValueObjects1[k] = gdjs.Scenario_323Code.GDSliderValueObjects1[i];
        ++k;
    }
}
gdjs.Scenario_323Code.GDSliderValueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].getBehavior("Text").setText("Slightly valuable");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_323Code.GDSliderValueObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").getText() == "3" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_323Code.GDSliderValueObjects1[k] = gdjs.Scenario_323Code.GDSliderValueObjects1[i];
        ++k;
    }
}
gdjs.Scenario_323Code.GDSliderValueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].getBehavior("Text").setText("Valuable");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_323Code.GDSliderValueObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").getText() == "4" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_323Code.GDSliderValueObjects1[k] = gdjs.Scenario_323Code.GDSliderValueObjects1[i];
        ++k;
    }
}
gdjs.Scenario_323Code.GDSliderValueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].getBehavior("Text").setText("Very valuable");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SliderValue"), gdjs.Scenario_323Code.GDSliderValueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scenario_323Code.GDSliderValueObjects1.length;i<l;++i) {
    if ( gdjs.Scenario_323Code.GDSliderValueObjects1[i].getBehavior("Text").getText() == "5" ) {
        isConditionTrue_0 = true;
        gdjs.Scenario_323Code.GDSliderValueObjects1[k] = gdjs.Scenario_323Code.GDSliderValueObjects1[i];
        ++k;
    }
}
gdjs.Scenario_323Code.GDSliderValueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{for(var i = 0, len = gdjs.Scenario_323Code.GDRatingTextObjects1.length ;i < len;++i) {
    gdjs.Scenario_323Code.GDRatingTextObjects1[i].getBehavior("Text").setText("Essential");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Scenario_323Code.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scenario_323Code.mapOfGDgdjs_9546Scenario_9595323Code_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RatingText"), gdjs.Scenario_323Code.GDRatingTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(18).setString((( gdjs.Scenario_323Code.GDRatingTextObjects1.length === 0 ) ? "" :gdjs.Scenario_323Code.GDRatingTextObjects1[0].getString()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scenario 4", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scenario_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scenario_323Code.GDBGObjects1.length = 0;
gdjs.Scenario_323Code.GDBGObjects2.length = 0;
gdjs.Scenario_323Code.GDQuestion2Objects1.length = 0;
gdjs.Scenario_323Code.GDQuestion2Objects2.length = 0;
gdjs.Scenario_323Code.GDYes_9595ButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDYes_9595ButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDNo_9595ButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDNo_9595ButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDSliderQ2Objects1.length = 0;
gdjs.Scenario_323Code.GDSliderQ2Objects2.length = 0;
gdjs.Scenario_323Code.GDSliderValueObjects1.length = 0;
gdjs.Scenario_323Code.GDSliderValueObjects2.length = 0;
gdjs.Scenario_323Code.GDRatingTextObjects1.length = 0;
gdjs.Scenario_323Code.GDRatingTextObjects2.length = 0;
gdjs.Scenario_323Code.GDContinueButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDContinueButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDLeftlabelObjects1.length = 0;
gdjs.Scenario_323Code.GDLeftlabelObjects2.length = 0;
gdjs.Scenario_323Code.GDRightlabelObjects1.length = 0;
gdjs.Scenario_323Code.GDRightlabelObjects2.length = 0;

gdjs.Scenario_323Code.eventsList0(runtimeScene);
gdjs.Scenario_323Code.GDBGObjects1.length = 0;
gdjs.Scenario_323Code.GDBGObjects2.length = 0;
gdjs.Scenario_323Code.GDQuestion2Objects1.length = 0;
gdjs.Scenario_323Code.GDQuestion2Objects2.length = 0;
gdjs.Scenario_323Code.GDYes_9595ButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDYes_9595ButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDNo_9595ButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDNo_9595ButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDSliderQ2Objects1.length = 0;
gdjs.Scenario_323Code.GDSliderQ2Objects2.length = 0;
gdjs.Scenario_323Code.GDSliderValueObjects1.length = 0;
gdjs.Scenario_323Code.GDSliderValueObjects2.length = 0;
gdjs.Scenario_323Code.GDRatingTextObjects1.length = 0;
gdjs.Scenario_323Code.GDRatingTextObjects2.length = 0;
gdjs.Scenario_323Code.GDContinueButtonObjects1.length = 0;
gdjs.Scenario_323Code.GDContinueButtonObjects2.length = 0;
gdjs.Scenario_323Code.GDLeftlabelObjects1.length = 0;
gdjs.Scenario_323Code.GDLeftlabelObjects2.length = 0;
gdjs.Scenario_323Code.GDRightlabelObjects1.length = 0;
gdjs.Scenario_323Code.GDRightlabelObjects2.length = 0;


return;

}

gdjs['Scenario_323Code'] = gdjs.Scenario_323Code;
