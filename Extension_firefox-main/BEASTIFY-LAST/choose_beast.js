/*
Given the name of something, get the URL to the corresponding image.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Michael":
      return browser.extension.getURL("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Michael_B._Jordan_Cannes_2018.jpg/330px-Michael_B._Jordan_Cannes_2018.jpg");
  }
}

/*
Listen for clicks in the popup.

If the click is on one of the beasts:
  Inject the "beastify.js" content script in the active tab.

  Then get the active tab and send "beastify.js" a message
  containing the URL to the chosen beast's image.

If it's on a button wich contains class "clear":
  Reload the page.
  Close the popup. This is needed, as the content script malfunctions after page reloads.
*/

// execute the script now so it can listen to the messages sent by the code below
browser.tabs.executeScript(null, { file: "/content_scripts/beastify.js" });


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);
    var elementimg = document.getElementsByTagName("img");
    console.log(elementimg);
    for (var i = 0; i <elementimg.length; i++) {
      elementimg[i].src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-facebook-png-icon-png-image_3562028.jpg";
    }
    
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
      
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});
    