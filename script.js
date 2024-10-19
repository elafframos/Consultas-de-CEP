function endereco(){

    const ceps = document.getElementById('cep').value
    const resultado = document.querySelector('.resultado')

    fetch(`http://viacep.com.br/ws/${ceps}/json/`) //APi
    .then(res => res.json())
    .then(data => {
        resultado.innerHTML = `<br>Rua: <b>${data.logradouro }</b>
                              <br>Estado: <b>${data.estado }</b>
                              <br>Cidade: <b>${data.localidade }</b>
                              <br>Bairro: <b>${data.bairro }</b>
                              <br>DD: <b>${data.ddd }</b>`
    })
    .catch(e => {
        if(ceps.length !== 8){
            resultado.innerHTML = '<br> Digite um CEP válido!'
        } else {
            resultado.innerHTML = `<br> O CEP <strong>${ceps}</strong>, não foi encontrado!`
        }
            
    })
}
