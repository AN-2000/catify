
const btn = document.getElementById("catify")

btn.addEventListener("click",function(){
    console.log("popup")
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        // to send message
        chrome.tabs.sendMessage(tabs[0].id, "hello from popup",function(response){
            console.log(response);
        });
    })
    
})