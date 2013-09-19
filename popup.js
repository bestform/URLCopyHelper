
  chrome.tabs.query({ currentWindow: true, active: true}, function(tabs){
     url = tabs[0].url;
     url = url.replace("http://", "");
     url = url.replace("https://", "");
     url = url.replace(/\/$/, "");
     document.getElementById("urlid").value = url;

  });
