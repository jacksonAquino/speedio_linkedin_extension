function loadInformation(url){
  return {
    cnpj: "9898989998998",
    name: "carros do balacobaco"
  }
}

function setVisual(info){
  const values = [
    {
      name: 'Nome',
      field: 'name'
    },
    {
      name: 'Cnpj',
      field: 'cnpj'
    },
  ]

  const values_in_html = values.map((total, value)=>{
    return total + `
      <div>
        ${value.name}
        ${info[value.field]}
      </div>
    `
  })

}

function checkIfIsInProfile(url){
  const regex = new RegExp('https://www.linkedin.com/in/');
  const found = url.match(regex);
  return found && found.length
}

async function execute(){
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const url = tab.url
  const isInProfile = checkIfIsInProfile(url)
  if(isInProfile){
    chrome.action.setIcon({ path: "icons/gato16.png" })
    const information = loadInformation(url)
    setVisual(information)
  } else {
    chrome.action.setIcon({ path: "icons/16.png" })
  }
}

chrome.tabs.onActivated.addListener(execute);

chrome.tabs.onUpdated.addListener(execute);