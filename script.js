// Exibe e oculta as respostas do FAQ ao clicar na pergunta
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');
  
  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Captura o envio do formulário
const form = document.querySelector('form');

form.onsubmit = async (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const formData = new FormData(form); // Captura os dados do formulário
  const data = Object.fromEntries(formData.entries()); // Converte FormData para um objeto

  console.log("Dados enviados:", data);

  try {
    // Envia os dados para o servidor
    const response = await fetch("https://script.google.com/macros/s/AKfycbzUeTBWvSRnSh7VxHviVXWHV8kvGh847fM5EiVSb4cCaWqR0OUCEnRSNielONL2Sbd_/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "no-cors" // 🔹 IMPORTANTE para permitir CORS
    });

    const result = await response.json();
    // Exibe a resposta do servidor (deve ser apenas "ok")
    if (result.message === 'ok') {
      alert("Dados enviados com sucesso!");
    }

  } catch (error) {
    alert("Erro ao enviar os dados!");
    console.error("Erro na requisição:", error);
  }
};
