//Asset Loader

var assets = new Map();
var progress = 0;

function loadImageAsset(name, uri, callback) {
    const image = new Image();
    image.src = uri;
    image.onload = function() {
        callback();
    }
    assets.set(name, image);
    return image;
}

function runProgress() {
    progress += 1;

    function canIRunNow() {

        if (progress < 70) { //438
            loading.src = "images/loading/0.png";
            //loading.src = "images/loading/" + parseInt(progress / 100) + ".png";
        }
        /*
        var passarinho = setInterval(function() {
        }, 100);
        */

        if (progress == 70) {
            loading.remove();
            draw();
        }

    }
    canIRunNow();
}

loadImageAsset('bg', "images/bg/backgroundhd.png", runProgress);
loadImageAsset("overben10logo", "images/bg/DNALab/logo/overben10logo.png", runProgress);
loadImageAsset("ben10logo", "images/bg/DNALab/logo/ben10logo.png", runProgress);
loadImageAsset("ben10bg", "images/ben10/ben10bg1.png", runProgress);
loadImageAsset("ben10", "images/ben10/ben10.png", runProgress);
loadImageAsset("ben10omnitrixparticles", "images/ben10/omnitrixparticles.png", runProgress);
loadImageAsset("ben10omnitrixtop", "images/ben10/omnitrixtop.png", runProgress);
loadImageAsset("omnitrixbottom", "images/omnitrix/omnitrixbottom.png", runProgress);
loadImageAsset("omnitrixbottom1", "images/omnitrix/omnitrixbottom1.png", runProgress);
loadImageAsset("omnitrixsinalizer", "images/omnitrix/omnitrixsinalizer.png", runProgress);
loadImageAsset("omnitrixcenter1", "images/omnitrix/omnitrixcenter1.png", runProgress);
loadImageAsset("omnitrixtop", "images/omnitrix/animation/1.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/1.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/2.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/3.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/4.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/5.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/6.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/7.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/8.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/9.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/10.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/11.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/12.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/13.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/14.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/15.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/16.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/17.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/18.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/19.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/20.png", runProgress);
loadImageAsset("musicimage", "images/bg/bganimatedelements/musicimages/21.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/0.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/1.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/2.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/3.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/4.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/5.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/6.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/7.png", runProgress);
loadImageAsset("omnitrixtopimg", "images/omnitrix/animation/8.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/0.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/1.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/2.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/3.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/4.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/5.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/6.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/7.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/8.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/9.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/10.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/11.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/12.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/13.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/14.png", runProgress);
loadImageAsset("omnitrixlateraisimg", "images/omnitrix/animation1/15.png", runProgress);
loadImageAsset("submitbutton1", "images/bg/DNALab/inputs/button_1.png", runProgress);
loadImageAsset("submitbutton2", "images/bg/DNALab/inputs/button_2.png", runProgress);
loadImageAsset("aliendnacollected", "images/bg/DNALab/inputs/inputmessages/aliendnacollected.png", runProgress);
loadImageAsset("cannotusethiscode", "images/bg/DNALab/inputs/inputmessages/cannotusethiscode.png", runProgress);
loadImageAsset("cannotusethesamecode", "images/bg/DNALab/inputs/inputmessages/cannotusethesamecode.png", runProgress);
loadImageAsset("combiningaliendna", "images/bg/DNALab/inputs/inputmessages/combiningaliendna.png", runProgress);
loadImageAsset("enteraliencode", "images/bg/DNALab/inputs/inputmessages/enteraliencode.png", runProgress);
loadImageAsset("invaliddnacode", "images/bg/DNALab/inputs/inputmessages/invalidaliendnacode.png", runProgress);
loadImageAsset("sinalizerinactive", "images/omnitrix/omnitrixsinalizerinactive.png", runProgress);
loadImageAsset("sinalizeractive", "images/omnitrix/omnitrixsinalizeractive.png", runProgress);
loadImageAsset("pretransition-a", "images/fusions/mainactive.png", runProgress);
loadImageAsset("pretransition-i", "images/fusions/maininactive.png", runProgress);