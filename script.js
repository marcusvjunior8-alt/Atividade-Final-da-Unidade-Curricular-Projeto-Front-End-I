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

function renderizarServicos() {
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

document.addEventListener('DOMContentLoaded', renderizarServicos);