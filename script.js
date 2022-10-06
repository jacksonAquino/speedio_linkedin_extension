const section = document.getElementById('section_first')

async function loadInformation(url){
  url = url.replace('https://', '')
  try {
    const res = await axios.post(`http://65.108.9.219:5000/get_data_linkedin?link=${url}`)
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
      name: 'CNAE',
      field: 'cnae1_desc'
    },
    {
      name: 'Situação do cnpj',
      field: 'ds_situacao_cnpj'
    },
    {
      name: 'Data de abertura',
      field: 'dt_abertura'
    },
    {
      name: 'Endereço',
      field: 'main_cnae_group_des'
    },
    // {
    //   name: 'Nome',
    //   field: 'no_pessoa'
    // },
    {
      name: 'Cep',
      field: 'nu_cep'
    },
    {
      name: 'CNPJ',
      field: 'nu_cnpj'
    },
    {
      name: 'Faturamento estimado da Empresa',
      field: 'revenue_a32_cnpj_desc'
    },
    {
      name: 'Faixa estimada de funcionários da Empresa',
      field: 'total_employees_r2016_cnpj_range_desc'
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
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const url = tab.url
  const information = await loadInformation(url)
  if(information)
    setVisual(information)
}

execute()

