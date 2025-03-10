//mostra o conteudo do faq
const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
      const question = faq.querySelector('.faq-question');
      const answer = faq.querySelector('.faq-answer');
      
      question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });

//

const form = document.querySelector('form');

form.onsubmit = async (event) => {
  event.preventDefault();

  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    cpf: formData.get("cpf"),
    empresa: formData.get("empresa"),
    descricao: formData.get("descricao"),
    anexos: formData.get("anexos"),
  };

  console.log(data);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxrjMBkr_LEDTRsQinwYTge87lv6lBQ-IVQgiTCy4Ay3Vf1op8x77rqYKgr4oCmVfypmQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // mode: "no-cors"
    });

    const result = await response.json();
    alert(result.message);
    alert("Processo enviado com sucesso!");

  } catch (error) {
    alert("Erro ao enviar o processo!");
    console.log(error)
  }
};