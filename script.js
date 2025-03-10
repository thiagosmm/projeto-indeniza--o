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
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Dados enviados:", data);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzy94IlxM-7GzPfQF4UvC0O9RkNRqZGXOkfO6eTOgAI8yguE8wnxPvOkmsX-OCBXBK_Fw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // mode: "cors"
    });

    const result = await response.json();
    alert(result.message || "Processo enviado com sucesso!");

  } catch (error) {
    alert("Erro ao enviar o processo!");
    console.error("Erro na requisição:", error);
  }
};
