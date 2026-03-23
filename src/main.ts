
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const blogLink = document.getElementById('blog-link');
  const blogLinkMobile = document.getElementById('blog-link-mobile');
  const homeLinks = document.querySelectorAll('.home-link');
  const homeContent = document.getElementById('home-content');
  const blogContent = document.getElementById('blog-content');
  const postContent = document.getElementById('post-content');
  const postDetail = document.getElementById('post-detail');
  const backToBlogBtn = document.getElementById('back-to-blog');

  // Blog Posts Data
  const posts = {
    'sinais-batido': {
      title: '5 Sinais de que o Carro que Você Quer Comprar foi Batido',
      category: 'Dicas de Compra',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
      content: `
        <div class="prose prose-lg max-w-none text-navy/80">
          <p class="mb-6">Identificar se um carro já foi batido é uma das tarefas mais importantes durante uma vistoria pré-compra. Muitas vezes, o reparo é tão bem feito esteticamente que um olhar destreinado não percebe, mas a estrutura do veículo pode estar comprometida.</p>
          
          <h3 class="text-2xl font-bold text-navy mt-8 mb-4">1. Desalinhamento de Painéis e Frestas</h3>
          <p class="mb-4">Observe as frestas entre o capô e os paralamas, ou entre as portas e a carroceria. Elas devem ser uniformes em toda a sua extensão. Se um lado estiver mais aberto que o outro, ou se houver degraus entre as peças, é um sinal claro de que algo foi removido ou desalinhado por um impacto.</p>
          
          <h3 class="text-2xl font-bold text-navy mt-8 mb-4">2. Diferença de Tonalidade na Pintura</h3>
          <p class="mb-4">Olhe o carro sob luz natural de diferentes ângulos. Repare se há diferença de cor entre uma porta e o paralama, por exemplo. A tinta original de fábrica tem uma textura (conhecida como "casca de laranja") muito específica que é difícil de replicar perfeitamente em oficinas.</p>
          
          <h3 class="text-2xl font-bold text-navy mt-8 mb-4">3. Marcas de Fita e Pulverização</h3>
          <p class="mb-4">Verifique as borrachas dos vidros, as vedações das portas e os plásticos pretos. Se encontrar vestígios de tinta nessas peças, significa que o carro foi isolado com fita para uma repintura, e o "overspray" acabou atingindo áreas que não deveriam ser pintadas.</p>
          
          <h3 class="text-2xl font-bold text-navy mt-8 mb-4">4. Parafusos com Marcas de Chave</h3>
          <p class="mb-4">Abra o capô e o porta-malas. Inspecione os parafusos que prendem os paralamas e as dobradiças. Se a tinta do parafuso estiver descascada ou com marcas de ferramentas, significa que aquela peça já foi removida para reparo ou substituição.</p>
          
          <h3 class="text-2xl font-bold text-navy mt-8 mb-4">5. Calafetação Irregular</h3>
          <p class="mb-4">As fábricas usam robôs para aplicar o selante (calafetação) nas junções das chapas. Esse acabamento é perfeitamente uniforme. Se você notar um selante aplicado de forma grosseira, com marcas de dedo ou pincel, é sinal de que houve um reparo estrutural naquela região.</p>
          
          <div class="bg-gray-50 p-8 rounded-3xl mt-12 border border-gray-100">
            <h4 class="text-xl font-bold text-navy mb-4">Dica de Especialista</h4>
            <p>Na Carro Certo, utilizamos medidores de espessura de camada de tinta ultrassônicos para detectar repinturas e massa plástica que são invisíveis ao olho humano. Não arrisque seu dinheiro, faça uma vistoria profissional.</p>
          </div>
        </div>
      `
    }
  };

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('bg-white', 'shadow-md', 'py-2');
      navbar?.classList.remove('bg-transparent', 'py-4');
      navbar?.querySelectorAll('.nav-text').forEach(el => {
        el.classList.add('text-navy');
        el.classList.remove('text-white');
      });
      navbar?.querySelector('.logo-span')?.classList.add('text-navy');
      navbar?.querySelector('.logo-span')?.classList.remove('text-white');
      navbar?.querySelector('.logo-accent')?.classList.add('text-seagrass');
      navbar?.querySelector('.logo-accent')?.classList.remove('text-pearaqua');
      mobileMenuBtn?.classList.add('text-navy');
      mobileMenuBtn?.classList.remove('text-white');
    } else {
      if (blogContent?.classList.contains('hidden') && postContent?.classList.contains('hidden')) {
        navbar?.classList.remove('bg-white', 'shadow-md', 'py-2');
        navbar?.classList.add('bg-transparent', 'py-4');
        navbar?.querySelectorAll('.nav-text').forEach(el => {
          el.classList.remove('text-navy');
          el.classList.add('text-white');
        });
        navbar?.querySelector('.logo-span')?.classList.remove('text-navy');
        navbar?.querySelector('.logo-span')?.classList.add('text-white');
        navbar?.querySelector('.logo-accent')?.classList.remove('text-navy');
        navbar?.querySelector('.logo-accent')?.classList.add('text-pearaqua');
        mobileMenuBtn?.classList.remove('text-navy');
        mobileMenuBtn?.classList.add('text-white');
      }
    }
  });

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Navigation functions
  const showHome = () => {
    homeContent?.classList.remove('hidden');
    blogContent?.classList.add('hidden');
    postContent?.classList.add('hidden');
    window.scrollTo(0, 0);
    if (window.scrollY <= 50) {
      navbar?.classList.remove('bg-white', 'shadow-md', 'py-2');
      navbar?.classList.add('bg-transparent', 'py-4');
      navbar?.querySelectorAll('.nav-text').forEach(el => {
        el.classList.remove('text-navy');
        el.classList.add('text-white');
      });
      navbar?.querySelector('.logo-span')?.classList.remove('text-navy');
      navbar?.querySelector('.logo-span')?.classList.add('text-white');
      navbar?.querySelector('.logo-accent')?.classList.remove('text-seagrass');
      navbar?.querySelector('.logo-accent')?.classList.add('text-pearaqua');
      mobileMenuBtn?.classList.remove('text-navy');
      mobileMenuBtn?.classList.add('text-white');
    }
  };

  const showBlog = () => {
    homeContent?.classList.add('hidden');
    blogContent?.classList.remove('hidden');
    postContent?.classList.add('hidden');
    window.scrollTo(0, 0);
    navbar?.classList.add('bg-white', 'shadow-md', 'py-2');
    navbar?.classList.remove('bg-transparent', 'py-4');
    navbar?.querySelectorAll('.nav-text').forEach(el => {
      el.classList.add('text-navy');
      el.classList.remove('text-white');
    });
    navbar?.querySelector('.logo-span')?.classList.add('text-navy');
    navbar?.querySelector('.logo-span')?.classList.remove('text-white');
    navbar?.querySelector('.logo-accent')?.classList.add('text-seagrass');
    navbar?.querySelector('.logo-accent')?.classList.remove('text-pearaqua');
    mobileMenuBtn?.classList.add('text-navy');
    mobileMenuBtn?.classList.remove('text-white');
  };

  const showPost = (postId: string) => {
    const post = posts[postId as keyof typeof posts];
    if (!post) return;

    if (postDetail) {
      postDetail.innerHTML = `
        <div class="mb-12">
          <div class="inline-block bg-pearaqua text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">${post.category}</div>
          <h1 class="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">${post.title}</h1>
          <div class="aspect-video rounded-3xl overflow-hidden shadow-xl mb-12">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          ${post.content}
        </div>
      `;
    }

    homeContent?.classList.add('hidden');
    blogContent?.classList.add('hidden');
    postContent?.classList.remove('hidden');
    window.scrollTo(0, 0);
    navbar?.classList.add('bg-white', 'shadow-md', 'py-2');
    navbar?.classList.remove('bg-transparent', 'py-4');
    navbar?.querySelectorAll('.nav-text').forEach(el => {
      el.classList.add('text-navy');
      el.classList.remove('text-white');
    });
    navbar?.querySelector('.logo-span')?.classList.add('text-navy');
    navbar?.querySelector('.logo-span')?.classList.remove('text-white');
    navbar?.querySelector('.logo-accent')?.classList.add('text-seagrass');
    navbar?.querySelector('.logo-accent')?.classList.remove('text-pearaqua');
    mobileMenuBtn?.classList.add('text-navy');
    mobileMenuBtn?.classList.remove('text-white');
  };

  // Event Listeners
  blogLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showBlog();
    mobileMenu?.classList.add('hidden');
  });

  blogLinkMobile?.addEventListener('click', (e) => {
    e.preventDefault();
    showBlog();
    mobileMenu?.classList.add('hidden');
  });

  backToBlogBtn?.addEventListener('click', () => {
    showBlog();
  });

  document.querySelectorAll('.blog-post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      if (postId) showPost(postId);
    });
  });

  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showHome();
      mobileMenu?.classList.add('hidden');
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        if (targetId !== 'home') {
          const targetElement = document.getElementById(targetId);
          targetElement?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        showHome();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
        mobileMenu?.classList.add('hidden');
      }
    });
  });
});
