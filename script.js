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
      name: 'CNPJ',
      field: 'nu_cnpj'
    },
    {
      name: 'Situação',
      field: 'ds_situacao_cnpj'
    },
    {
      name: 'Setor',
      field: 'main_cnae_group_des'
    },
    {
      name: 'Atividade',
      field: 'cnae1_desc'
    },
    {
      name: 'Idade da empresa',
      field: 'idade'
    },
    {
      name: 'Website',
      field: 'website_data'
    },
    {
      name: 'Faixa estimada de funcionários da empresa',
      field: 'total_employees_r2016_cnpj_range_desc'
    },
    {
      name: 'Faturamento estimado da empresa',
      field: 'revenue_a32_company_desc'
    },
    {
      name: '',
      field: ''
    },
    {
      name: 'Faturamento estimado do CNPJ',
      field: 'revenue_a32_cnpj_desc'
    }
  ]

  const values_in_html = values.reduce((total, value)=>{
    return total + `
      <div class="info">
        <p>${value.name || ''}</p>
        <span>${info[value.field] || ''}</span>
      </div>
    `
  }, '')
  section.innerHTML = values_in_html
  document.getElementById('company-name').innerHTML = info['no_pessoa']
}

async function execute(){
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const url = tab.url
  const information = await loadInformation(url)
  if(information)
    setVisual(information)
}

execute()

