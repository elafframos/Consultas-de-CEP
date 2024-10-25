function endereco() {
    const ceps = document.getElementById('cep').value
    const resultado = document.querySelector('.resultado')

    // Validação do comprimento do CEP
    if (ceps.length !== 8 || !/^\d+$/.test(ceps)) {
        resultado.innerHTML = '<br> Digite um <b>CEP</b> válido!'
        return;
    }

    resultado.innerHTML = '<br> Carregando...' // Mensagem de carregamento

    fetch(`https://viacep.com.br/ws/${ceps}/json/`) // Use backticks
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro na resposta da rede')
            }
            return res.json()
        })
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado')
            }
            resultado.innerHTML = `
                <br>Logradouro: <b>${data.logradouro}</b>
                <br>Bairro: <b>${data.bairro}</b>
                <br>Cidade: <b>${data.localidade}</b>
                <br>Estado: <b>${data.uf}</b>
                <br>DD: <b>(${data.ddd})</b>
            `
        })
        .catch(e => {
            resultado.innerHTML = `<br> O CEP <strong>${ceps}</strong> não foi encontrado!`
        })
}
