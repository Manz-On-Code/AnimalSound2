function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/model.json', modelReady);
    //i had trouble exporting the teachable link, so i am unable to upload here
}
function modelReady(){
    console.log("modelisready")
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log (results);
        document.getElementById("result_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = ' Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+"%";} //i do not understand the error shown (red line which is behind this note)