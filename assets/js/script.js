const acoes = [
    { icone: '🚮', texto: 'Não misture metais com lixo orgânico. O aço é 100% reciclável, mas ele precisa chegar limpo às cooperativas para facilitar a triagem magnética.'},
    { icone: '♻️', texto: 'Muitas embalagens de aço possuem o símbolo de reciclagem. Dar preferência a produtos com embalagens metálicas é uma escolha consciente, já que o aço volta para a prateleira em cerca de 60 dias.'},
    { icone: '🌀', texto: 'Ao trocar de eletrodomésticos, procure empresas ou prefeituras que ofereçam o serviço de coleta de "Linha Branca". Esses produtos são ricos em aço de alta qualidade.'},
    { icone: '🏗️', texto: 'Se for construir ou reformar, considere o uso de estruturas metálicas. Além de gerarem menos resíduos no canteiro de obras, o aço utilizado pode ser reaproveitado integralmente no futuro.'}
]

// renderização dinamica
const container = document.querySelector ('#container-acoes')

for(let i = 0; i < acoes.length; i++){
    const item = acoes[i]
    const div = document.createElement('div');
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <p class="acao-texto">${item.texto}</p>
    `
    container.appendChild(div)
}

const nav = document.querySelector('.menu-navegacao')

window.addEventListener('scroll', () => {
    if(window.scrollY > 1){
        nav.computedStyleMap.display = 'none'
    }else {
        nav.computedStyleMap.display = 'block'
    }
})
