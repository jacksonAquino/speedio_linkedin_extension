const section = document.getElementById('section_first')

async function loadInformation(url){
  try {
    const res = await axios.post('http://65.108.9.219:5000/get_data_linkedin?link=www.linkedin.com/in/maucirnascimento/')
    document.getElementById('loading_content').style.display = 'none'
    document.getElementById('user_is_not_in_profile').style.display = 'none'
    document.getElementById('main').style.display = 'flex'
    return res.data
  } catch(e) {
    document.getElementById('loading_content').style.display = 'none'
    document.getElementById('user_is_not_in_profile').style.display = 'flex'
    document.getElementById('main').style.display = 'none'
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

  const values_in_html = values.reduce((total, value)=>{
    return total + `
      <div class="info">
        <p>${value.name}</p>
        <span>${info[value.field]}</span>
      </div>
    `
  }, '')
  section.innerHTML = values_in_html
}

async function execute(){
  const information = await loadInformation('kjadkjdajda')
  if ( information )
    setVisual(information)
}

execute()

