function preload(){

}

function setup(){
    canvas = createCanvas(440 , 440)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,440);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses );
}

function modelLoaded(){
    console.log(' PoseNet Model Has Loaded!! ');
}

function gotPoses(results){
    if(results.length > 0);{
        console.log(results);
        var x = console.log("nose x = "+ results[0].pose.nose.x);
        var y = console.log("nose y = "+ results[0].pose.nose.y);
    }
    }


function draw (){
    image(video, 0 , 0, 440 , 440);
}

function take_snapshot(){
    save('myFilterImage.png');
}

