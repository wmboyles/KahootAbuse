chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        chrome.tabs.executeScript(null,{file:"content.js"});
        console.log("BACKGROUND: Detected page change");
    }
);