gdjs.First_32sceneCode = {};
gdjs.First_32sceneCode.localVariables = [];
gdjs.First_32sceneCode.idToCallbackMap = new Map();
gdjs.First_32sceneCode.GDWelcomeObjects1= [];
gdjs.First_32sceneCode.GDWelcomeObjects2= [];
gdjs.First_32sceneCode.GDStart_9595buttonObjects1= [];
gdjs.First_32sceneCode.GDStart_9595buttonObjects2= [];
gdjs.First_32sceneCode.GDNameInputObjects1= [];
gdjs.First_32sceneCode.GDNameInputObjects2= [];


gdjs.First_32sceneCode.mapOfGDgdjs_9546First_959532sceneCode_9546GDStart_95959595buttonObjects1Objects = Hashtable.newFrom({"Start_button": gdjs.First_32sceneCode.GDStart_9595buttonObjects1});
gdjs.First_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_button"), gdjs.First_32sceneCode.GDStart_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.First_32sceneCode.mapOfGDgdjs_9546First_959532sceneCode_9546GDStart_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.First_32sceneCode.GDNameInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(12).setString((( gdjs.First_32sceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.First_32sceneCode.GDNameInputObjects1[0].getText()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question1", false);
}
}

}


};

gdjs.First_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.First_32sceneCode.GDWelcomeObjects1.length = 0;
gdjs.First_32sceneCode.GDWelcomeObjects2.length = 0;
gdjs.First_32sceneCode.GDStart_9595buttonObjects1.length = 0;
gdjs.First_32sceneCode.GDStart_9595buttonObjects2.length = 0;
gdjs.First_32sceneCode.GDNameInputObjects1.length = 0;
gdjs.First_32sceneCode.GDNameInputObjects2.length = 0;

gdjs.First_32sceneCode.eventsList0(runtimeScene);
gdjs.First_32sceneCode.GDWelcomeObjects1.length = 0;
gdjs.First_32sceneCode.GDWelcomeObjects2.length = 0;
gdjs.First_32sceneCode.GDStart_9595buttonObjects1.length = 0;
gdjs.First_32sceneCode.GDStart_9595buttonObjects2.length = 0;
gdjs.First_32sceneCode.GDNameInputObjects1.length = 0;
gdjs.First_32sceneCode.GDNameInputObjects2.length = 0;


return;

}

gdjs['First_32sceneCode'] = gdjs.First_32sceneCode;
