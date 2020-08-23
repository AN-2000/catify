console.log("Catify");

function Catify(){

    let imgs = document.querySelectorAll("img")

    let ourImgs = ["imgs/i1.jfif","imgs/i2.jfif","imgs/i3.jfif"]

    for(x in imgs){
        imgs[x].src = chrome.extension.getURL(ourImgs[Math.floor(Math.random() * 3)])
        imgs[x].srcset = chrome.extension.getURL(ourImgs[Math.floor(Math.random() * 3)])
    
    }

}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // console.log(request)
        sendResponse("Hello from content");
        // console.log(sender);
       Catify();
    });



//only content script knows about page's content and popup and background knows nothing 
//all 3 scripts are isolated
//everything is to be mentioned in manifest 
//for every tab an instance of content script is created this is not true for popup