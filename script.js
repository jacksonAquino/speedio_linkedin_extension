const section = document.getElementById('section_first')

async function loadInformation(url){
  try {
    const res = await axios.post('http://65.108.9.219:5000/get_data_linkedin?link=www.linkedin.com/in/maucirnascimento/')
    return {
      cnpj: "9898989998998",
      name: "carros do balacobaco"
    }
  } catch(e) {
    return {
      cnpj: "9898989998998",
      name: "carros do balacobaco"
    }
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
  setVisual(information)
}

execute()

