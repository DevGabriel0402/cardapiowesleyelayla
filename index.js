const menuItems = {
    entradas: [
        { nome: "Supremo de frango ao molho rose" },
        { nome: "Saladinha defumada" },
        { nome: "Mesa cantinho mineiro" },
        { nome: "Petit Gourmet" },
        { nome: "Escondidinho de carne de sol" }
    ],
    salgados: [
        { nome: "Salgados assados" },
        { nome: "Salgados fritos" }
    ],
    pratosPrincipais: [
        { nome: "Massas" },
        { nome: "Molhos:", descricao: "Molho madeira, Molho 4 queijos" }
    ],
    sobremesas: [
        { nome: "Bombons finos" },
        { nome: "Bolo", descricao: "Chocolate com sonho de valsa" }
    ],
    bebidas: [
        { nome: "Refrigerante" },
        { nome: "Suco" },
        { nome: "Água" }
    ]
};

function preencherMenu() {
    for (const [categoria, itens] of Object.entries(menuItems)) {
        const section = document.getElementById(categoria === "pratosPrincipais" ? "pratos-principais" : categoria);
        const content = section.querySelector('.menu-content');
        content.innerHTML = '';
        itens.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.nome}</h3>
                ${item.descricao ? `<p>${item.descricao}</p>` : ''}
            `;
            content.appendChild(menuItem);
        });
    }
}

function toggleSection() {
    this.parentElement.classList.toggle('active');
}

document.querySelectorAll('.menu-section h2').forEach(header => {
    header.addEventListener('click', toggleSection);
});

preencherMenu();

  // Animação com delay
  const menuSections = document.querySelectorAll('.menu-section');
  menuSections.forEach((section, index) => {
      setTimeout(() => {
          section.classList.add('animate');
      }, index * 200); // 200ms de delay entre cada seção
  });