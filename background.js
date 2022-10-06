function checkIfIsInProfile(url){
  const regex = new RegExp('https://www.linkedin.com/in/|https://www.linkedin.com/company');
  const found = url.match(regex);
  return found && found.length
}

async function execute(){
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const url = tab.url
  const isInProfile = checkIfIsInProfile(url)
  if(isInProfile){
    chrome.action.setIcon({ path: "icons/16.png" })
    chrome.action.setPopup({ popup: "information.html" })
  } else {
    chrome.action.setIcon({ path: "icons/16-sad.png" })
    chrome.action.setPopup({ popup: "not_in_profile.html" })
  }
}

chrome.tabs.onActivated.addListener(execute);

chrome.tabs.onUpdated.addListener(execute);