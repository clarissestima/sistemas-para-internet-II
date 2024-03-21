const cpfInput = document.getElementById('cpf')
cpfInput.addEventListener('input', function(event) {
    let valor = event.target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 11);

    //###.###.###-##
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    event.target.value = valor;
})

/*
const telefoneInput = document.getElementById('tel');
telefoneInput.addEventListener('input', function(event) {
    let valor = event.target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 11);

    //(##) #####-####
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

    event.target.value = valor;
});
*/