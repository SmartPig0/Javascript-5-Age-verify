const verificar = document.querySelector('.verificar')
verificar.addEventListener('click',Verificar)

function Verificar(){
    const data = new Date()
    const year = data.getFullYear()
    const ano = document.querySelector('.ano')
    const res = document.querySelector('.result')

    if (ano.value.length == 0 || Number(ano.value) > year){
        alert('Porfavor, preencha todos os campos.')
    } else {
        const sex = document.getElementsByName('sex')
        const age = year - Number(ano.value)
        let gen = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked) {
            gen = 'Homem'
            img.setAttribute('src', './lib/c-pedradagavea.svg')
        } else {
            gen = 'Mulher'
        }
    
        res.innerHTML = `Olá, você é do gênero ${gen} e tem ${age} anos.`
        res.appendChild(img)
    }
}