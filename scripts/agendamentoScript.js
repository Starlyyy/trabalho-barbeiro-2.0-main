document.querySelector('.botaoAgendado').addEventListener('click', function () {
    
    const nome = document.querySelector('.nomeSalvo').value;
    const telefone = document.querySelector('.telSalvo').value;
    const servico = document.querySelector('.servicoSalvo').value;
    const data = document.querySelector('.dataSalva').value;
    const horario = document.querySelector('.horarioSalvo').value;

    if (nome && telefone && servico && data && horario) {
        const agendamento = {
            nome,
            telefone,
            servico,
            data,
            horario
        };

        // Recupera o histórico existente ou inicializa um array vazio
        const historico = JSON.parse(localStorage.getItem('agendamentos')) || [];

        historico.push(agendamento);

        // Salva no Local Storage
        localStorage.setItem('agendamentos', JSON.stringify(historico));

        alert('Agendamento salvo com sucesso!');
        document.querySelector('.form').reset();

    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

