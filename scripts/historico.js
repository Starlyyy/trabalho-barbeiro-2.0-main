function exibirHistorico(){
    const historico = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const divHistorico = document.querySelector('.agendamento-historico');

    if (historico.length === 0) {
        divHistorico.innerHTML = "<p>Nenhum agendamento realizado...</p>";
        return;
    } 

    divHistorico.innerHTML = ""; //pra limpar o texto anterior

    historico.forEach((item, index) => {
        divHistorico.innerHTML += `
            <div style="margin-bottom: 10px; border: 1px solid #ccc; padding: 10px;">
                <strong>Agendamento ${index + 1}:</strong><br>
                Nome: ${item.nome}<br>
                Telefone: ${item.telefone}<br>
                Serviço: ${item.servico}<br>
                Data: ${item.data}<br>
                Horário: ${item.horario}
            </div>
        `;
    });
}

exibirHistorico();