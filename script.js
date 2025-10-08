// Seleção dos elementos por id
const elements = {
  promptTitle: document.getElementById('prompt-title'),
  promptContent: document.getElementById('prompt-content'),
  titleWrapper: document.getElementById('title-wrapper'),
  contentWrapper: document.getElementById('content-wrapper'),
};

// Atualiza o estado do wrapper conforme o conteúdo do elemento
function updateEditableWrapperState(element, wrapper) {
  const hasText = element.textContent.trim().length > 0;
  wrapper.classList.toggle('is-empty', !hasText);
}

// Atualiza todos os estados dos editáveis
function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
}

// Adiciona os ouvintes de input para atualização em tempo real
function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
  });
  elements.promptContent.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
  });  
}

// Função de inicialização
function init() {
  attachAllEditableHandlers();
  // Atualiza o estado inicial
  updateAllEditableStates();
}

// Executa a inicialização ao carregar o script
init();
