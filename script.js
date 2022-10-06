 const legenda = {
    'dados_funcionarios': 'Faixa estimada de funcionários da empresa'
 }
 const result = []
 const texto = ``
 
 result.map(el => {
    texto += `<div>
        ${legenda[el.titile]}
        <span>${el.result}</span>
    </div>`
 })

