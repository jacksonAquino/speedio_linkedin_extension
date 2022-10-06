const section = document.getElementById('section_first')

async function loadInformation(url){
  try {
    const res = await axios.get('https://api-publica.speedio.com.br/buscarcnpj?cnpj=59291534000167')
    console.log(res)
  } catch(e) {
    console.log('deu ruim')
  }
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

function execute(){
  const information = loadInformation('kjadkjdajda')
  setVisual(information)
}

execute()

