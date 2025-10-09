// Seleção dos elementos por id
const elements = {
  promptTitle: document.getElementById('prompt-title'),
  promptContent: document.getElementById('prompt-content'),
  titleWrapper: document.getElementById('title-wrapper'),
  contentWrapper: document.getElementById('content-wrapper'),
  btnOpen: document.getElementById('btn-open'),
  btnCollapse: document.getElementById('btn-collapse'),
  sidebar: document.querySelector('.sidebar'),
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

// Função para abrir a sidebar
function openSidebar() {
  if (elements.sidebar) {
    elements.sidebar.style.display = 'flex';
  }
  if (elements.btnOpen) {
    elements.btnOpen.style.display = 'none';
  }
}

// Função para fechar a sidebar
function closeSidebar() {
  if (elements.sidebar) {
    elements.sidebar.style.display = 'none';
  }
  if (elements.btnOpen) {
    elements.btnOpen.style.display = 'block';
  }
}

function attachSidebarHandlers() {
  if (elements.btnOpen) {
    elements.btnOpen.addEventListener('click', openSidebar);
  }
  if (elements.btnCollapse) {
    elements.btnCollapse.addEventListener('click', closeSidebar);
  }
}

// Função de inicialização
function init() {
  attachAllEditableHandlers();
  updateAllEditableStates();
  attachSidebarHandlers();
  // Sidebar inicia aberta em desktop, oculta btnOpen
  if (elements.sidebar && window.getComputedStyle(elements.sidebar).display !== 'none') {
    if (elements.btnOpen) elements.btnOpen.style.display = 'none';
  }
}

init();
