
(function(){
  const BUNDLES = window.BUNDLES || [];
  const grid = document.getElementById('bundleGrid');

  function render(){
    grid.innerHTML = '';
    BUNDLES.forEach(b => {
      const card = document.createElement('article');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = b.images[0] || '';
      img.alt = b.title;
      const inner = document.createElement('div');
      inner.className = 'inner';

      const title = document.createElement('div');
      title.className = 'brand';
      title.textContent = b.title;

      const desc = document.createElement('div');
      desc.className = 'model';
      desc.textContent = b.description;

      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = '$' + b.price;

      const actions = document.createElement('div');
      actions.className = 'actions';

      const view = document.createElement('a');
      view.href = '#'; view.className = 'btn outline'; view.textContent = 'View';
      view.addEventListener('click', (e)=>{ e.preventDefault(); openModal(b); });

      const message = document.createElement('a');
      message.href = '#'; message.className = 'btn'; message.textContent = 'Message';
      message.addEventListener('click', (e)=>{ e.preventDefault(); openModal(b); });

      actions.appendChild(view);
      actions.appendChild(message);

      inner.appendChild(title);
      inner.appendChild(desc);
      inner.appendChild(price);
      inner.appendChild(actions);

      card.appendChild(img);
      card.appendChild(inner);
      grid.appendChild(card);
    });
  }

  // Modal
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalImages = document.getElementById('modalImages');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const ctaMessage = document.getElementById('ctaMessage');
  const ctaEmail = document.getElementById('ctaEmail');

  function openModal(b){
    modalImages.innerHTML = '';
    (b.images || []).forEach(src => {
      const i = document.createElement('img');
      i.src = src; i.alt = b.title;
      modalImages.appendChild(i);
    });
    modalTitle.textContent = b.title;
    modalPrice.textContent = '$' + b.price;
    modalDesc.textContent = b.description;

    const msgText = encodeURIComponent(`Hi! I'm interested in the bundle: ${b.title} - $${b.price}`);
    ctaMessage.href = `https://m.me/?ref=${msgText}`;
    ctaEmail.href = `mailto:?subject=${encodeURIComponent('Golf Bundle Inquiry')}&body=${msgText}`;

    modal.classList.remove('hidden');
  }
  modalClose.addEventListener('click', ()=> modal.classList.add('hidden'));
  modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.add('hidden'); });

  render();
})();
