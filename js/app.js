/* document.querySelector('.get').addEventListener('submit', async(event)=>{

    //impede a ação padrão do formulario de recarregar a página
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        clearInfo()
        showWarning('Carregando...')
        
        let results = await fetch(`viacep.com.br/ws/01001000/json/`)

        let json = await results.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
            }else{
                clearInfo()
                showWarning('cep não encontrada')
            }
    //console.log(json)
        }else{
            clearInfo;
        }
});

function showInfo(json){
    //retirando a mensagem da tela antes de exibir os esutos
    showWarning('');

    document.querySelector('rua').value = `${json.name}`;
    document.querySelector('bairro').value = `${json.name}`;
    document.querySelector('cidade').value = `${json.name}`;
    document.querySelector('uf').value = `${json.name}`;

    //alterando o display do elemento .aviso p/ que ele seja exibido na tela
    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
} */

document.querySelector('#cep').addEventListener('blur', async () => {

    let cep = document.querySelector('#cep').value

    let result = await fetch(`http://viacep.com.br/ws/${cep}/json/ `);

    let json = await result.json();

    if (json.erro != true) {


        showCep(json);

    } else if (json.erro === true ) {
        alert('CEP inválido')
        clearInfo()
    }

    //console.log(json)
})


function showCep(json) {

    document.querySelector('#uf').value = `${json.uf}`;

    document.querySelector('#cidade').value = `${json.localidade}`;

    document.querySelector('#logradouro').value = `${json.logradouro}`;

    document.querySelector('#bairro').value = `${json.bairro}`;

}

function clearInfo() {

    document.querySelector('#cep').value = ('');

    document.querySelector('#uf').value = ('');

    document.querySelector('#cidade').value = ('');

    document.querySelector('#logradouro').value = ('');

    document.querySelector('#bairro').value = ('');

}