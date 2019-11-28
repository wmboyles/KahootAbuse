// content.js
changeText();

function changeText(){
    console.clear();
    url = window.location.href;
    console.log("Full URL: "+url);

    //We're guranteed to be on kahoot.it, which is only test for start page
    console.log("Looking for button");  
    enterButton = document.getElementsByClassName("enter-button__EnterButton-sc-1o9b9va-0 fkiUpe")[0];
    if(enterButton != undefined){
        console.log("Found button");
        enterButton.innerHTML = "<span>Time to Die</span>";
    } else { 
        console.log("No button found");
    }

    console.log("Checking if possibly in instructions page");
    if(url.includes("instructions")){
        subheading = document.getElementsByClassName("sub-header-text__SubHeaderText-sc-6ghg2b-0 jYzvXZ")[0];
        console.log("Looking for instruction subheader");
        
        if(subheading != undefined){
            console.log("Found instruction subheader");
            subheading.innerHTML = "<span>Failure is a step away.</span>";
        } else {
            console.log("No hubheader found");
        }
        
        return;
    } 

    console.log("Looking for possibly on result page");
    if(url.includes("result")){
        message = document.getElementsByClassName("encouraging-message__FormattedMessageWrap-sc-1e5gf7v-1 hMfDIl")[0];
        console.log("Looking for an incorrect answer");
        if(message != undefined){
            console.log("Found incorrect answer encouragement");
            message.innerHTML = "<span>Why do you even try?</span>";
        } else {
            console.log("No incorrect answer encouragement found");
        }
        
        console.log("Looking for player stats");
        message = document.getElementsByClassName("rank-text__Rank-sc-1smelag-0 fHujOM")[0];
        if(message != undefined){
            console.log("Found player stats");
            message.innerHTML = "<span>If you're not 1st you're last</span>";
        } else {
            console.log("No stats found");
        }
        
        return;
    } 

    console.log("Looking for sent notification");
    if(url.includes("sent")){
        subheading = document.getElementsByClassName("answer-feedback-message__AnswerFeedbackMessage-o3yy2s-0 gEVUOW")[0];
        console.log("Looking for set subheader");
        
        if(subheading != undefined){
            console.log("Found sent subheader");
            subheading.innerHTML = "<span>Dumb fuck?</span>";
        } else {
            console.log("No sent subheader found");
        }
        
        return;
    }
}