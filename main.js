//teachablemachine.withgoogle.com/models/izRKObMJu/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('teachablemachine.withgoogle.com/models/izRKObMJu/',modelready);
}
function modelready(){
classifier.classify(gotresult)
}
function gotresult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        p=results[0].confidence*100
        document.getElementById("result_confidence").innerHTML="Accuracy-"+p.toFixed(3)+" %";
        if(results[0].label=="cat"){
            document.getElementById("cat").src="cat-danse.gif";
            document.getElementById("alien2").src="aliens-02.png";
            document.getElementById("alien3").src="aliens-03.png";
            
        if(results[0].label=="dog"){
            document.getElementById("alien1").src="aliens-01.png";
            document.getElementById("dog").src="koollua-dog.gif";
            document.getElementById("alien3").src="aliens-03.png";
            
        }
        if(results[0].label=="snap"){
            document.getElementById("alien1").src="aliens-01.png";
            document.getElementById("alien2").src="aliens-02.png";
            document.getElementById("background noise").src="O8hL.gif";
            
        
    }
 
}