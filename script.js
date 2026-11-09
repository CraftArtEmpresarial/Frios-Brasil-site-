const items=[
["Mussarela","Frios e queijos","🧀","Queijo para lanches, pizzas e receitas."],
["Presunto","Frios e queijos","🥪","Opção para sanduíches e refeições."],
["Queijo prato","Frios e queijos","🧀","Ideal para lanches e preparos variados."],
["Mortadela","Frios e queijos","🥪","Consulte marcas e opções disponíveis."],
["Salame","Embutidos","🥓","Consulte tipos, marcas e apresentação."],
["Bacon","Embutidos","🥓","Consulte cortes, peso e disponibilidade."],
["Linguiça calabresa","Embutidos","🌭","Para pizzas, molhos e refeições."],
["Salsicha","Embutidos","🌭","Consulte embalagens e marcas."],
["Peito de frango","Carnes e frangos","🍗","Consulte cortes e apresentação."],
["Coxa e sobrecoxa","Carnes e frangos","🍗","Consulte disponibilidade e peso."],
["Filé de frango","Carnes e frangos","🍗","Opção prática para diversas receitas."],
["Requeijão","Laticínios","🥛","Consulte marcas e tamanhos."],
["Manteiga","Laticínios","🧈","Consulte apresentação e marca."],
["Creme de leite","Laticínios","🥛","Para receitas doces e salgadas."],
["Azeitonas","Mercearia","🫒","Consulte tipos e tamanhos de embalagem."],
["Palmito","Mercearia","🫙","Consulte marcas e apresentações."],
["Farinha de trigo","Mercearia","🌾","Consulte marcas e tamanhos."]
];
let active="Todos";
function renderProducts(){const q=document.getElementById('search').value.toLowerCase();const list=items.filter(x=>(active==="Todos"||x[1]===active)&&(x[0]+" "+x[1]+" "+x[3]).toLowerCase().includes(q));document.getElementById('products').innerHTML=list.length?list.map(x=>`<article class="product"><div class="product-img" aria-hidden="true">${x[2]}</div><div class="product-body"><span class="tag">${x[1]}</span><h3>${x[0]}</h3><p>${x[3]}</p><button onclick="askProduct('${x[0]}')">Consultar no WhatsApp ↗</button></div></article>`).join(''):'<p>Nenhum produto encontrado. Tente outra busca ou fale com a loja.</p>'}
function setFilter(f){active=f;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.textContent===f));renderProducts()}
function askProduct(name){const msg=encodeURIComponent(`Olá! Gostaria de consultar preço e disponibilidade de: ${name}.`);window.open('https://wa.me/5519982554950?text='+msg,'_blank','noopener')}
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),s=document.getElementById('subject').value,m=document.getElementById('message').value.trim();const body=encodeURIComponent(`Olá! Meu nome é ${n}.\nAssunto: ${s}\nMensagem: ${m}`);window.open('https://wa.me/5519982554950?text='+body,'_blank','noopener')});
document.getElementById('year').textContent=new Date().getFullYear();renderProducts();
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.links').classList.remove('open')));
