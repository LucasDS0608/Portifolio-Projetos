const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const buttons = document.querySelectorAll(".cardsobre-buttons button");
const sections = document.querySelectorAll(".cardsobre-section");
const cardsobre = document.querySelector(".cardsobre");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#sobre"
    ? cardsobre.classList.add("is-active")
    : cardsobre.classList.remove("is-active");
  cardsobre.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMsg = document.getElementById('success');
    const failureMsg = document.getElementById('failure');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset messages
            successMsg.style.display = 'none';
            failureMsg.style.display = 'none';
            
            // Validations
            let isValid = true;
            let errors = [];
            
            // Nome validation
            if (!nameInput.value.trim()) {
                errors.push('Nome é obrigatório');
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                errors.push('Nome deve ter pelo menos 2 caracteres');
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                errors.push('Email é obrigatório');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                errors.push('Email inválido');
                isValid = false;
            }
            
            // Message validation
            if (!messageInput.value.trim()) {
                errors.push('Mensagem é obrigatória');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                errors.push('Mensagem deve ter pelo menos 10 caracteres');
                isValid = false;
            }
            
            if (isValid) {
                // Simular envio
                successMsg.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            } else {
                failureMsg.innerHTML = 'Erros encontrados:<br>' + errors.join('<br>');
                failureMsg.style.display = 'block';
            }
        });
    }
});