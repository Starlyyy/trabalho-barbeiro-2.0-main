function agendarHorario(){

    let nome = document.querySelector('.nomeSalvo').value;
    localStorage.setItem('nomeSalvo', nome);
    
    let telefone = document.querySelector('.telSalvo').value;
    localStorage.setItem('telSalvo', telefone);
    
    let servico = document.querySelector('.servicoSalvo').value;
    localStorage.setItem('servicoSalvo', servico);
    
    let data = document.querySelector('.dataSalva').value;
    localStorage.setItem('dataSalva', data);
    
    let horario = document.querySelector('.horarioSalvo').value;
    localStorage.setItem('horarioSalvo', horario);

}

document.querySelector('.botaoAgendado').addEventListener('click', ()=>{
    agendarHorario();
});