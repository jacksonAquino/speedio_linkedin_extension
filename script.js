const section = document.getElementById('section_first')

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

  const values_in_html = values.reduce((total, value)=>{
    return total + `
      <div>
        ${value.name}
        ${info[value.field]}
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

