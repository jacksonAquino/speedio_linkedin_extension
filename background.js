document.getElementById('description').innerText = "aaaaa"

chrome.tabs.onActivated.addListener(async activeInfo => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  url = tab.url
  const regex = new RegExp('https://www.linkedin.com/in/');
  const found = url.match(regex);
  if(found && found.length){
    console.log(url)
  } else {
    console.log(url)
  }
});