const servicos = [
  {
    titulo: "Consulta Veterinária",
    descricao: "Avaliação completa da saúde do seu pet, com orientação personalizada.",
    preco: "R$ 80,00",
    imagem: "./imgs/consulta.jpg"
  },
  {
    titulo: "Vacinação",
    descricao: "Proteção contra diversas doenças e mais qualidade de vida.",
    preco: "R$ 60,00",
    imagem: "./imgs/vacinacao.jpg"
  },
  {
    titulo: "Banho e Tosa",
    descricao: "Higiene, bem-estar e um visual ainda mais bonito para o seu pet.",
    preco: "R$ 70,00",
    imagem: "./imgs/banho-tosa.jpg"
  },
  {
    titulo: "Exames Laboratoriais",
    descricao: "Diagnósticos precisos para um tratamento mais eficaz.",
    preco: "R$ 90,00",
    imagem: "./imgs/exames.jpg"
  },
  {
    titulo: "Atendimento de Emergência",
    descricao: "Atendimento rápido e seguro quando seu pet mais precisa.",
    preco: "R$ 120,00",
    imagem: "./imgs/emergencia.jpg"
  },
  {
    titulo: "Acompanhamento Veterinário",
    descricao: "Acompanhamento contínuo para uma vida mais longa e saudável.",
    preco: "R$ 70,00",
    imagem: "./imgs/acompanhamento.jpg"
  }
];

const equipe = [
  {
    foto: "./imgs/ana-souza.png",
    nome: "Dra. Ana Souza",
    funcao: "Médica Veterinária",
    descricao: "Responsável pelos atendimentos clínicos e acompanhamento de cães e gatos."
  },
  {
    foto: "./imgs/lucas-ferreira.png",
    nome: "Dr. Lucas Ferreira",
    funcao: "Médico Veterinário",
    descricao: "Especialista em cirurgia veterinária e procedimentos de rotina."
  },
  {
    foto: "./imgs/carla-mendes.png",
    nome: "Carla Mendes",
    funcao: "Veterinária",
    descricao: "Atua em atendimento clínico, vacinação e acompanhamento de filhotes e idosos."
  },
  {
    foto: "./imgs/juliana-costa.png",
    nome: "Juliana Costa",
    funcao: "Banho e Tosa",
    descricao: "Responsável pelos cuidados de higiene e beleza dos pets."
  }
];


function renderizarServices() {
  const container = document.querySelector('.container-services');
  if (!container) return;

  container.innerHTML = servicos.map(servico => `
    <div class="card-servico">
      <img src="${servico.imagem}" alt="${servico.titulo}">
      <h3>${servico.titulo}</h3>
      <p>${servico.descricao}</p>
      <span class="preco">${servico.preco}</span>
      <button class="btn-solicitar">Solicitar Serviço</button>
    </div>
  `).join('');
}
function renderizarTeam(){
  const container = document.querySelector('.container-team')
  if (!container) return

  container.innerHTML = equipe.map(team => `
    <div class="card-team">
    <img src="${team.foto}" alt="${team.nome}">
    <h3>${team.nome}</h3>
    <span class="function">(${team.funcao})</span>
    <p>${team.descricao}</p>
    </div>
    `).join('')
}
document.addEventListener('DOMContentLoaded', renderizarServices());
document.addEventListener('DOMContentLoaded', renderizarTeam())