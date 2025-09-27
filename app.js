// CASAGO - APP.JS COMPLETO E CORRIGIDO
// ============================================================================
// DADOS DA APLICAÇÃO
// ============================================================================

const APP_DATA = {
    // Lista das principais cidades brasileiras (amostra das 5570)
    cities: [
        // Capitais e principais cidades
        "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Salvador - BA",
        "Fortaleza - CE", "Brasília - DF", "Curitiba - PR", "Recife - PE", "Goiânia - GO",
        "Belém - PA", "Guarulhos - SP", "Campinas - SP", "São Luís - MA", "São Gonçalo - RJ",
        "Maceió - AL", "Duque de Caxias - RJ", "Campo Grande - MS", "Natal - RN",
        "Teresina - PI", "São Bernardo do Campo - SP", "Nova Iguaçu - RJ", "João Pessoa - PB",
        "Santo André - SP", "São José dos Campos - SP", "Jaboatão dos Guararapes - PE",
        "Osasco - SP", "Ribeirão Preto - SP", "Uberlândia - MG", "Sorocaba - SP",
        "Contagem - MG", "Aracaju - SE", "Feira de Santana - BA", "Cuiabá - MT",
        "Joinville - SC", "Londrina - PR", "Niterói - RJ", "Araraquara - SP",
        "Ananindeua - PA", "Belford Roxo - RJ", "Campos dos Goytacazes - RJ",
        "Caxias do Sul - RS", "Vila Velha - ES", "São João de Meriti - RJ",
        "Santos - SP", "Mogi das Cruzes - SP", "Betim - MG", "Diadema - SP",
        "Maringá - PR", "Jundiaí - SP", "Camaçari - BA", "Montes Claros - MG",

        // Cidades turísticas principais
        "Gramado - RS", "Canela - RS", "Campos do Jordão - SP", "Monte Verde - MG",
        "Petrópolis - RJ", "Búzios - RJ", "Angra dos Reis - RJ", "Paraty - RJ",
        "Ubatuba - SP", "Ilhabela - SP", "Porto Seguro - BA", "Morro de São Paulo - BA",
        "Trancoso - BA", "Jericoacoara - CE", "Canoa Quebrada - CE", "Natal - RN",
        "Fernando de Noronha - PE", "Maragogi - AL", "Bonito - MS", "Chapada dos Veadeiros - GO",
        "Tiradentes - MG", "Ouro Preto - MG", "Mariana - MG", "São Thomé das Letras - MG",
        "Capitólio - MG", "Caldas Novas - GO", "Pirenópolis - GO", "Holambra - SP",
        "Monte Roraima - RR", "Lençóis Maranhenses - MA", "Jalapão - TO",
        "Bonito - MS", "Pantanal - MT", "Chapada Diamantina - BA",

        // Adicionar mais cidades conforme necessário
        "Americana - SP", "Araraquara - SP", "Araras - SP", "Atibaia - SP",
        "Barueri - SP", "Botucatu - SP", "Bragança Paulista - SP", "Caçapava - SP",
        "Catanduva - SP", "Cotia - SP", "Franca - SP", "Guaratinguetá - SP",
        "Indaiatuba - SP", "Itapetininga - SP", "Itaquaquecetuba - SP", "Itu - SP",
        "Jaboticabal - SP", "Jacareí - SP", "Jau - SP", "Limeira - SP",
        "Marília - SP", "Mauá - SP", "Mogi Mirim - SP", "Ourinhos - SP",
        "Piracicaba - SP", "Presidente Prudente - SP", "Rio Claro - SP", "São Carlos - SP",
        "São José do Rio Preto - SP", "São Vicente - SP", "Sumaré - SP", "Suzano - SP",
        "Taboão da Serra - SP", "Taubaté - SP", "Várzea Paulista - SP"
    ],

    properties: [
        {
            id: 1,
            title: "Apartamento inteiro em Copacabana",
            location: "Rio de Janeiro - RJ",
            type: "Apartamento inteiro",
            price: 280,
            weekendPrice: 350,
            rating: 4.89,
            reviews: 127,
            host: "Maria Silva",
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            images: [
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500&h=400&fit=crop&q=80"
            ],
            amenities: ["Wi-Fi", "Cozinha", "Ar-condicionado", "TV", "Máquina de lavar", "Vista para o mar", "Estacionamento", "Piscina"],
            description: "Apartamento luxuoso com vista deslumbrante para a praia de Copacabana."
        },
        {
            id: 2,
            title: "Casa inteira em Vila Madalena",
            location: "São Paulo - SP",
            type: "Casa inteira",
            price: 320,
            weekendPrice: 420,
            rating: 4.95,
            reviews: 89,
            host: "João Santos",
            guests: 6,
            bedrooms: 3,
            bathrooms: 2,
            images: [
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&h=400&fit=crop&q=80"
            ],
            amenities: ["Wi-Fi", "Cozinha", "TV", "Jardim", "Churrasqueira", "Estacionamento", "Pet-friendly"],
            description: "Casa moderna no coração da Vila Madalena, próximo a bares e restaurantes."
        },
        {
            id: 3,
            title: "Chalé inteiro em Gramado",
            location: "Gramado - RS",
            type: "Casa inteira",
            price: 420,
            weekendPrice: 580,
            rating: 4.92,
            reviews: 156,
            host: "Ana Costa",
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop&q=80"
            ],
            amenities: ["Wi-Fi", "Lareira", "Jardim", "Estacionamento", "Hidromassagem", "Vista para as montanhas"],
            description: "Chalé romântico perfeito para um final de semana especial em Gramado."
        }
    ],

    state: {
        selectedCity: '',
        checkinDate: '',
        checkoutDate: '',
        guests: { adults: 2, children: 0 },
        filteredProperties: [],
        favorites: JSON.parse(localStorage.getItem('casago_favorites') || '[]'),
        currentBooking: null,
        currentStep: 1,
        currentUser: JSON.parse(localStorage.getItem('casago_user') || 'null'),
        isLoggedIn: false
    }
};

// ============================================================================
// UTILITÁRIOS
// ============================================================================

const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    },

    formatCurrency(amount) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    },

    calculateNights(checkin, checkout) {
        if (!checkin || !checkout) return 0;
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },

    validateDates(checkin, checkout) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);

        if (checkinDate < today) {
            return { valid: false, error: 'Data de check-in não pode ser no passado' };
        }

        if (checkoutDate <= checkinDate) {
            return { valid: false, error: 'Check-out deve ser após o check-in' };
        }

        return { valid: true };
    },

    removeAccents(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },

    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }
};

// ============================================================================
// SISTEMA DE NOTIFICAÇÕES TOAST
// ============================================================================

const Toast = {
    container: null,

    init() {
        if (!this.container) {
            this.container = document.getElementById('toast-container') || this.createContainer();
        }
    },

    createContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    },

    show(message, type = 'success', duration = 4000) {
        this.init();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            this.remove(toast);
        });

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            this.remove(toast);
        }, duration);

        return toast;
    },

    remove(toast) {
        if (!toast.parentNode) return;

        toast.classList.add('hiding');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    },

    success(message) { return this.show(message, 'success'); },
    error(message) { return this.show(message, 'error', 6000); },
    warning(message) { return this.show(message, 'warning', 5000); },
    info(message) { return this.show(message, 'info'); }
};

// ============================================================================
// LOADING
// ============================================================================

const Loading = {
    show() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
    },

    hide() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }
};

// ============================================================================
// AUTOCOMPLETE DE CIDADES
// ============================================================================

const CityAutocomplete = {
    init() {
        const input = document.getElementById('where-input');
        const dropdown = document.getElementById('suggestions-dropdown');

        if (!input || !dropdown) return;

        const debouncedSearch = Utils.debounce((query) => {
            this.search(query, dropdown);
        }, 200);

        input.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            debouncedSearch(query);
        });

        input.addEventListener('focus', (e) => {
            if (e.target.value.length >= 2) {
                this.search(e.target.value.trim(), dropdown);
            }
        });

        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    },

    search(query, dropdown) {
        if (query.length < 2) {
            dropdown.classList.add('hidden');
            return;
        }

        const matches = APP_DATA.cities
            .filter(city => {
                const cityLower = city.toLowerCase();
                const queryLower = query.toLowerCase();
                return cityLower.includes(queryLower) ||
                       Utils.removeAccents(cityLower).includes(Utils.removeAccents(queryLower));
            })
            .slice(0, 10);

        this.showSuggestions(matches, dropdown);
    },

    showSuggestions(cities, dropdown) {
        if (cities.length === 0) {
            dropdown.classList.add('hidden');
            return;
        }

        dropdown.innerHTML = cities.map(city => `
            <div class="suggestion-item" data-city="${city}">
                <i class="fas fa-map-marker-alt"></i>
                <span>${city}</span>
            </div>
        `).join('');

        dropdown.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                this.selectCity(item.dataset.city);
            });
        });

        dropdown.classList.remove('hidden');
    },

    selectCity(city) {
        const input = document.getElementById('where-input');
        const dropdown = document.getElementById('suggestions-dropdown');

        input.value = city;
        APP_DATA.state.selectedCity = city;
        dropdown.classList.add('hidden');

        Toast.success(`📍 Destino selecionado: ${city}`);
    }
};

// ============================================================================
// SISTEMA DE AUTENTICAÇÃO
// ============================================================================

const AuthManager = {
    init() {
        APP_DATA.state.currentUser = JSON.parse(localStorage.getItem('casago_user') || 'null');
        APP_DATA.state.isLoggedIn = !!APP_DATA.state.currentUser;
        this.updateUserInterface();
    },

    showLoginModal() {
        const modalHtml = `
            <div id="login-modal" class="modal-overlay active">
                <div class="modal">
                    <div class="modal-header">
                        <h2>Entrar no CasaGo</h2>
                        <button class="modal-close" onclick="AuthManager.closeModal('login-modal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div style="max-width: 400px; margin: 0 auto;">
                            <div style="margin-bottom: 24px;">
                                <button onclick="AuthManager.loginWithGoogle()" style="width: 100%; margin-bottom: 12px; padding: 14px; background: #4285f4; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fab fa-google"></i> Continuar com Google
                                </button>
                                <button onclick="AuthManager.loginWithFacebook()" style="width: 100%; margin-bottom: 12px; padding: 14px; background: #1877f2; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fab fa-facebook-f"></i> Continuar com Facebook
                                </button>
                            </div>

                            <div style="text-align: center; margin: 20px 0; color: #666;">ou</div>

                            <form id="login-form" onsubmit="AuthManager.handleLogin(event)">
                                <div style="margin-bottom: 16px;">
                                    <label style="display: block; font-weight: 500; margin-bottom: 6px;">Email</label>
                                    <input type="email" id="login-email" required
                                           style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                                </div>
                                <div style="margin-bottom: 24px;">
                                    <label style="display: block; font-weight: 500; margin-bottom: 6px;">Senha</label>
                                    <input type="password" id="login-password" required
                                           style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                                </div>
                                <button type="submit" 
                                        style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer;">
                                    Entrar
                                </button>
                            </form>
                            <div style="text-align: center; margin-top: 20px;">
                                <p>Não tem conta? 
                                   <a href="#" onclick="AuthManager.switchToRegister()" style="color: var(--brasil-verde); text-decoration: none;">
                                       Cadastre-se
                                   </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    loginWithGoogle() {
        Loading.show();
        Toast.info('🔄 Redirecionando para Google...');

        setTimeout(() => {
            const user = {
                id: Date.now(),
                name: 'Usuário Google',
                email: 'usuario@gmail.com',
                provider: 'google'
            };
            this.completeLogin(user);
        }, 1500);
    },

    loginWithFacebook() {
        Loading.show();
        Toast.info('🔄 Redirecionando para Facebook...');

        setTimeout(() => {
            const user = {
                id: Date.now(),
                name: 'Usuário Facebook', 
                email: 'usuario@facebook.com',
                provider: 'facebook'
            };
            this.completeLogin(user);
        }, 1500);
    },

    handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        Loading.show();

        setTimeout(() => {
            const user = {
                id: Date.now(),
                name: email.split('@')[0],
                email: email,
                provider: 'email'
            };
            this.completeLogin(user);
        }, 1000);
    },

    completeLogin(user) {
        APP_DATA.state.currentUser = user;
        APP_DATA.state.isLoggedIn = true;

        localStorage.setItem('casago_user', JSON.stringify(user));

        Loading.hide();
        this.closeModal('login-modal');
        this.updateUserInterface();

        Toast.success(`🎉 Bem-vindo, ${user.name}!`);
    },

    logout() {
        APP_DATA.state.currentUser = null;
        APP_DATA.state.isLoggedIn = false;
        localStorage.removeItem('casago_user');

        this.updateUserInterface();
        Toast.info('👋 Logout realizado com sucesso!');
    },

    updateUserInterface() {
        const profileBtn = document.getElementById('profile-button');
        if (!profileBtn) return;

        if (APP_DATA.state.isLoggedIn) {
            profileBtn.innerHTML = `
                <i class="fas fa-bars"></i>
                <div style="width: 32px; height: 32px; background: var(--brasil-verde); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                    ${APP_DATA.state.currentUser.name.charAt(0).toUpperCase()}
                </div>
            `;
        } else {
            profileBtn.innerHTML = `
                <i class="fas fa-bars"></i>
                <i class="fas fa-user-circle"></i>
            `;
        }
    },

    switchToRegister() {
        this.closeModal('login-modal');
        setTimeout(() => this.showRegisterModal(), 100);
    },

    showRegisterModal() {
        // Implementar modal de cadastro similar
        Toast.info('🚧 Modal de cadastro em desenvolvimento');
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.remove();
        }
    }
};

// ============================================================================
// MENU DE PERFIL
// ============================================================================

const ProfileMenu = {
    show() {
        if (document.getElementById('profile-menu')) {
            this.hide();
            return;
        }

        const menuHtml = `
            <div id="profile-menu" class="profile-menu-dropdown">
                ${APP_DATA.state.isLoggedIn ? `
                    <div class="profile-menu-item" onclick="ProfileMenu.showProfile()">
                        <i class="fas fa-user"></i>
                        <span>Meu Perfil</span>
                    </div>
                    <div class="profile-menu-item" onclick="ProfileMenu.showBookings()">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Minhas Reservas</span>
                    </div>
                    <div class="profile-menu-item" onclick="ProfileMenu.showFavorites()">
                        <i class="fas fa-heart"></i>
                        <span>Favoritos</span>
                    </div>
                    <hr>
                    <div class="profile-menu-item" onclick="HostModal.show()">
                        <i class="fas fa-home"></i>
                        <span>Anuncie seu espaço</span>
                    </div>
                    <hr>
                    <div class="profile-menu-item" onclick="AuthManager.logout(); ProfileMenu.hide();">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Sair</span>
                    </div>
                ` : `
                    <div class="profile-menu-item" onclick="AuthManager.showLoginModal(); ProfileMenu.hide();">
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Entrar</span>
                    </div>
                    <div class="profile-menu-item" onclick="AuthManager.showRegisterModal(); ProfileMenu.hide();">
                        <i class="fas fa-user-plus"></i>
                        <span>Cadastrar</span>
                    </div>
                    <hr>
                    <div class="profile-menu-item" onclick="HostModal.show(); ProfileMenu.hide();">
                        <i class="fas fa-home"></i>
                        <span>Anuncie seu espaço</span>
                    </div>
                `}
            </div>
        `;

        const profileButton = document.getElementById('profile-button');
        profileButton.style.position = 'relative';
        profileButton.insertAdjacentHTML('afterend', menuHtml);

        setTimeout(() => {
            document.addEventListener('click', this.handleClickOutside);
        }, 10);
    },

    hide() {
        const menu = document.getElementById('profile-menu');
        if (menu) {
            menu.remove();
        }
        document.removeEventListener('click', this.handleClickOutside);
    },

    handleClickOutside(event) {
        const menu = document.getElementById('profile-menu');
        const profileButton = document.getElementById('profile-button');

        if (menu && !menu.contains(event.target) && !profileButton.contains(event.target)) {
            ProfileMenu.hide();
        }
    },

    showProfile() {
        Toast.info('🚧 Perfil em desenvolvimento');
        this.hide();
    },

    showBookings() {
        Toast.info('🚧 Minhas reservas em desenvolvimento');
        this.hide();
    },

    showFavorites() {
        const favorites = APP_DATA.properties.filter(p => APP_DATA.state.favorites.includes(p.id));
        if (favorites.length === 0) {
            Toast.info('❤️ Você ainda não tem favoritos');
        } else {
            PropertiesRenderer.render(favorites);
            Toast.success(`❤️ ${favorites.length} propriedade(s) favorita(s)`);
        }
        this.hide();
    }
};

// ============================================================================
// RENDERIZADOR DE PROPRIEDADES
// ============================================================================

const PropertiesRenderer = {
    render(properties = APP_DATA.properties) {
        const grid = document.getElementById('properties-grid');
        if (!grid) return;

        if (properties.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 40px;">Nenhuma propriedade encontrada.</p>';
            return;
        }

        grid.innerHTML = properties.map(property => this.createPropertyCard(property)).join('');

        // Adicionar event listeners
        properties.forEach(property => {
            const card = document.querySelector(`[data-property-id="${property.id}"]`);
            if (card) {
                card.addEventListener('click', () => this.openPropertyDetails(property));

                const favoriteBtn = card.querySelector('.favorite-btn');
                if (favoriteBtn) {
                    favoriteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleFavorite(property.id);
                    });
                }
            }
        });
    },

    createPropertyCard(property) {
        const isFavorite = APP_DATA.state.favorites.includes(property.id);

        return `
            <div class="property-card" data-property-id="${property.id}">
                <div class="property-image">
                    <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="property-info">
                    <div class="property-header">
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-rating">
                            <i class="fas fa-star star"></i>
                            <span>${property.rating}</span>
                            <span>(${property.reviews})</span>
                        </div>
                    </div>
                    <p class="property-location">${property.location}</p>
                    <p class="property-type">${property.type}</p>
                    <div class="property-price">
                        <span class="currency">R$</span>
                        <strong>${property.price}</strong>
                        <span class="period">/ noite</span>
                    </div>
                </div>
            </div>
        `;
    },

    openPropertyDetails(property) {
        const modal = document.getElementById('property-modal');
        const title = document.getElementById('property-modal-title');
        const content = document.getElementById('property-modal-content');

        title.textContent = property.title;

        content.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="display: grid; gap: 24px;">
                    <div>
                        <img src="${property.images[0]}" alt="${property.title}" 
                             style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px;">
                    </div>

                    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px;">
                        <div>
                            <div style="margin-bottom: 24px;">
                                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">${property.title}</h3>
                                <p style="color: var(--gray-600); margin-bottom: 12px;">${property.location} • ${property.guests} hóspedes • ${property.bedrooms} quartos • ${property.bathrooms} banheiros</p>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-star" style="color: var(--brasil-amarelo);"></i>
                                    <span style="font-weight: 600;">${property.rating}</span>
                                    <span style="color: var(--gray-600);">(${property.reviews} avaliações)</span>
                                </div>
                            </div>

                            <div style="margin-bottom: 24px;">
                                <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Sobre este espaço</h4>
                                <p style="line-height: 1.6; color: var(--gray-700);">${property.description}</p>
                            </div>

                            <div>
                                <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">O que este lugar oferece</h4>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                                    ${property.amenities.map(amenity => `
                                        <div style="display: flex; align-items: center; gap: 12px;">
                                            <i class="fas fa-check" style="color: var(--brasil-verde);"></i>
                                            <span>${amenity}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <div style="background: var(--gray-50); border-radius: 12px; padding: 24px;">
                            <div style="text-align: center; margin-bottom: 20px;">
                                <div style="font-size: 24px; font-weight: 600;">
                                    <span style="color: var(--brasil-verde);">R$ ${property.price}</span>
                                    <span style="font-size: 16px; font-weight: 400; color: var(--gray-600);"> / noite</span>
                                </div>
                            </div>

                            <button onclick="BookingManager.startBooking(${property.id})" 
                                    style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 16px;">
                                Reservar
                            </button>

                            <p style="text-align: center; font-size: 14px; color: var(--gray-600);">
                                Você ainda não será cobrado
                            </p>

                            <div style="border-top: 1px solid var(--gray-300); margin: 16px 0; padding-top: 16px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                    <span>R$ ${property.price} x 1 noite</span>
                                    <span>R$ ${property.price}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                    <span>Taxa de serviço</span>
                                    <span>R$ ${Math.round(property.price * 0.1)}</span>
                                </div>
                                <hr style="margin: 12px 0;">
                                <div style="display: flex; justify-content: space-between; font-weight: 600;">
                                    <span>Total</span>
                                    <span>R$ ${property.price + Math.round(property.price * 0.1)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('active');
    },

    toggleFavorite(propertyId) {
        const index = APP_DATA.state.favorites.indexOf(propertyId);

        if (index > -1) {
            APP_DATA.state.favorites.splice(index, 1);
            Toast.info('💔 Removido dos favoritos');
        } else {
            APP_DATA.state.favorites.push(propertyId);
            Toast.success('❤️ Adicionado aos favoritos');
        }

        localStorage.setItem('casago_favorites', JSON.stringify(APP_DATA.state.favorites));
        this.render(); // Re-render para atualizar ícones
    }
};

// ============================================================================
// GERENCIADOR DE RESERVAS
// ============================================================================

const BookingManager = {
    startBooking(propertyId) {
        if (!APP_DATA.state.isLoggedIn) {
            Toast.warning('Faça login para fazer uma reserva');
            AuthManager.showLoginModal();
            return;
        }

        const property = APP_DATA.properties.find(p => p.id === propertyId);
        if (!property) {
            Toast.error('Propriedade não encontrada');
            return;
        }

        APP_DATA.state.currentBooking = property;

        // Fechar modal de propriedade
        document.getElementById('property-modal').classList.remove('active');

        // Mostrar modal de reserva
        this.showBookingModal(property);
    },

    showBookingModal(property) {
        const modal = document.getElementById('booking-modal');
        const content = document.getElementById('booking-modal-content');

        content.innerHTML = `
            <div style="max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <h3>${property.title}</h3>
                    <p style="color: var(--gray-600);">${property.location}</p>
                </div>

                <div style="background: var(--gray-50); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                    <h4 style="margin-bottom: 16px;">Detalhes da reserva</h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Check-in</label>
                            <input type="date" id="booking-checkin" style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Check-out</label>
                            <input type="date" id="booking-checkout" style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                    </div>

                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Hóspedes</label>
                        <select id="booking-guests" style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                            <option value="1">1 hóspede</option>
                            <option value="2" selected>2 hóspedes</option>
                            <option value="3">3 hóspedes</option>
                            <option value="4">4 hóspedes</option>
                            <option value="5">5 hóspedes</option>
                            <option value="6">6 hóspedes</option>
                        </select>
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="margin-bottom: 16px;">Resumo do preço</h4>
                    <div id="price-breakdown" style="background: var(--gray-50); border-radius: 8px; padding: 16px;">
                        <p style="text-align: center; color: var(--gray-600);">Selecione as datas para ver o preço</p>
                    </div>
                </div>

                <button onclick="BookingManager.proceedToPayment()" 
                        id="proceed-payment-btn"
                        disabled
                        style="width: 100%; background: var(--gray-300); color: var(--gray-500); border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: not-allowed;">
                    Confirmar e pagar
                </button>
            </div>
        `;

        modal.classList.add('active');

        // Setup listeners para cálculo dinâmico
        const checkinInput = document.getElementById('booking-checkin');
        const checkoutInput = document.getElementById('booking-checkout');

        checkinInput.addEventListener('change', this.calculatePrice.bind(this));
        checkoutInput.addEventListener('change', this.calculatePrice.bind(this));

        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        checkinInput.min = today;
        checkoutInput.min = today;
    },

    calculatePrice() {
        const checkin = document.getElementById('booking-checkin').value;
        const checkout = document.getElementById('booking-checkout').value;
        const breakdown = document.getElementById('price-breakdown');
        const proceedBtn = document.getElementById('proceed-payment-btn');

        if (!checkin || !checkout) {
            breakdown.innerHTML = '<p style="text-align: center; color: var(--gray-600);">Selecione as datas para ver o preço</p>';
            proceedBtn.disabled = true;
            proceedBtn.style.background = 'var(--gray-300)';
            proceedBtn.style.color = 'var(--gray-500)';
            proceedBtn.style.cursor = 'not-allowed';
            return;
        }

        const validation = Utils.validateDates(checkin, checkout);
        if (!validation.valid) {
            breakdown.innerHTML = `<p style="text-align: center; color: var(--error);">${validation.error}</p>`;
            proceedBtn.disabled = true;
            return;
        }

        const nights = Utils.calculateNights(checkin, checkout);
        const property = APP_DATA.state.currentBooking;
        const subtotal = nights * property.price;
        const serviceFee = Math.round(subtotal * 0.1);
        const total = subtotal + serviceFee;

        breakdown.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>R$ ${property.price} x ${nights} noite${nights > 1 ? 's' : ''}</span>
                <span>R$ ${subtotal}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <span>Taxa de serviço</span>
                <span>R$ ${serviceFee}</span>
            </div>
            <hr style="margin: 12px 0;">
            <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 18px;">
                <span>Total</span>
                <span style="color: var(--brasil-verde);">R$ ${total}</span>
            </div>
        `;

        // Enable proceed button
        proceedBtn.disabled = false;
        proceedBtn.style.background = 'var(--brasil-verde)';
        proceedBtn.style.color = 'white';
        proceedBtn.style.cursor = 'pointer';
    },

    proceedToPayment() {
        const checkin = document.getElementById('booking-checkin').value;
        const checkout = document.getElementById('booking-checkout').value;

        const validation = Utils.validateDates(checkin, checkout);
        if (!validation.valid) {
            Toast.error(validation.error);
            return;
        }

        // Store booking details
        APP_DATA.state.checkinDate = checkin;
        APP_DATA.state.checkoutDate = checkout;

        // Show payment modal
        PaymentManager.showPaymentModal();
    }
};

// ============================================================================
// GERENCIADOR DE PAGAMENTO
// ============================================================================

const PaymentManager = {
    showPaymentModal() {
        const modal = document.getElementById('payment-modal');
        const content = document.getElementById('payment-modal-content');

        content.innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <h3>Escolha a forma de pagamento</h3>
                    <p style="color: var(--gray-600);">Pagamento 100% seguro</p>
                </div>

                <div style="display: grid; gap: 16px;">
                    <button onclick="PaymentManager.selectPix()" 
                            style="display: flex; align-items: center; gap: 16px; width: 100%; padding: 20px; border: 2px solid var(--gray-200); border-radius: 12px; background: white; cursor: pointer; text-align: left;">
                        <div style="width: 48px; height: 48px; background: var(--brasil-verde); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
                            💳
                        </div>
                        <div>
                            <div style="font-weight: 600; margin-bottom: 4px;">PIX</div>
                            <div style="color: var(--gray-600); font-size: 14px;">Aprovação instantânea</div>
                        </div>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: var(--gray-400);"></i>
                    </button>

                    <button onclick="PaymentManager.selectCard()" 
                            style="display: flex; align-items: center; gap: 16px; width: 100%; padding: 20px; border: 2px solid var(--gray-200); border-radius: 12px; background: white; cursor: pointer; text-align: left;">
                        <div style="width: 48px; height: 48px; background: var(--brasil-azul); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
                            💳
                        </div>
                        <div>
                            <div style="font-weight: 600; margin-bottom: 4px;">Cartão de crédito</div>
                            <div style="color: var(--gray-600); font-size: 14px;">Parcelamento disponível</div>
                        </div>
                        <i class="fas fa-chevron-right" style="margin-left: auto; color: var(--gray-400);"></i>
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');
    },

    selectPix() {
        Loading.show();

        setTimeout(() => {
            Loading.hide();
            this.showPixPayment();
        }, 1000);
    },

    selectCard() {
        Toast.info('🚧 Pagamento com cartão em desenvolvimento');
    },

    showPixPayment() {
        const content = document.getElementById('payment-modal-content');
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const subtotal = nights * property.price;
        const serviceFee = Math.round(subtotal * 0.1);
        const total = subtotal + serviceFee;

        content.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto; text-align: center;">
                <div style="background: var(--success); color: white; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <i class="fas fa-qrcode" style="font-size: 24px; margin-bottom: 8px;"></i>
                    <h4 style="margin-bottom: 4px;">Pagamento PIX</h4>
                    <div style="font-size: 24px; font-weight: 600;">R$ ${total}</div>
                </div>

                <div style="background: white; border: 2px solid var(--gray-200); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <div style="width: 200px; height: 200px; background: var(--gray-100); border-radius: 8px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-qrcode" style="font-size: 48px; color: var(--gray-400);"></i>
                    </div>
                    <p style="font-size: 14px; color: var(--gray-600); margin-bottom: 16px;">Escaneie o código QR com o app do seu banco</p>

                    <button onclick="PaymentManager.copyPixCode()" 
                            style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 12px; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-copy"></i> Copiar código PIX
                    </button>
                </div>

                <div style="background: var(--info); color: white; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
                        <i class="fas fa-clock"></i>
                        <span style="font-weight: 600;">Expira em: 14:59</span>
                    </div>
                    <div style="font-size: 14px;">Realize o pagamento antes do prazo</div>
                </div>

                <div style="padding: 16px; border-radius: 8px; margin-bottom: 20px; background: var(--warning); color: white;">
                    <i class="fas fa-hourglass-half"></i> Aguardando pagamento...
                </div>

                <button onclick="PaymentManager.simulatePayment()" 
                        style="width: 100%; background: var(--brasil-azul); color: white; border: none; border-radius: 8px; padding: 12px; font-weight: 600; cursor: pointer; margin-top: 16px; font-size: 14px;">
                    ⚡ Simular Pagamento (Para Teste)
                </button>
            </div>
        `;

        // Auto-confirm payment after 3 seconds for demo
        setTimeout(() => {
            this.simulatePayment();
        }, 3000);
    },

    copyPixCode() {
        const pixCode = '00020126580014BR.GOV.BCB.PIX0136' + Utils.generateId() + '5204000053039865802BR5925CASAGO PAGAMENTOS LTDA6009SAO PAULO62070503***6304' + Math.random().toString().substring(2, 6);

        if (navigator.clipboard) {
            navigator.clipboard.writeText(pixCode).then(() => {
                Toast.success('✅ Código PIX copiado!');
            });
        } else {
            Toast.success('✅ Código PIX copiado!');
        }
    },

    simulatePayment() {
        Loading.show();

        setTimeout(() => {
            Loading.hide();
            this.showPaymentSuccess();
        }, 1500);
    },

    showPaymentSuccess() {
        const content = document.getElementById('payment-modal-content');
        const property = APP_DATA.state.currentBooking;
        const bookingId = Utils.generateId().toUpperCase().substring(0, 8);

        content.innerHTML = `
            <div style="max-width: 500px; margin: 0 auto; text-align: center;">
                <div style="background: var(--success); color: white; border-radius: 50%; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                    <i class="fas fa-check" style="font-size: 36px;"></i>
                </div>

                <h2 style="color: var(--success); margin-bottom: 16px;">Pagamento Aprovado!</h2>
                <p style="color: var(--gray-600); margin-bottom: 32px; font-size: 16px;">Sua reserva foi confirmada com sucesso. Você receberá todos os detalhes por email.</p>

                <div style="background: var(--gray-50); border-radius: 12px; padding: 24px; margin-bottom: 32px; text-align: left;">
                    <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 16px; text-align: center;">Voucher de Reserva</h4>

                    <div style="display: grid; gap: 12px; font-size: 14px;">
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Código da Reserva:</span>
                            <span style="font-weight: 600; font-family: monospace;">${bookingId}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Propriedade:</span>
                            <span style="font-weight: 600;">${property.title}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Check-in:</span>
                            <span>${Utils.formatDate(APP_DATA.state.checkinDate)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Check-out:</span>
                            <span>${Utils.formatDate(APP_DATA.state.checkoutDate)}</span>
                        </div>
                    </div>
                </div>

                <button onclick="PaymentManager.closePaymentModal()" 
                        style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer;">
                    Finalizar
                </button>

                <div style="margin-top: 24px; padding: 16px; background: var(--info); color: white; border-radius: 8px; font-size: 14px;">
                    <i class="fas fa-info-circle"></i> 
                    Apresente este voucher no check-in. O anfitrião entrará em contato em até 24 horas.
                </div>
            </div>
        `;
    },

    closePaymentModal() {
        document.getElementById('payment-modal').classList.remove('active');
        document.getElementById('booking-modal').classList.remove('active');

        Toast.success('🎉 Reserva finalizada com sucesso!');

        // Reset booking state
        APP_DATA.state.currentBooking = null;
        APP_DATA.state.checkinDate = '';
        APP_DATA.state.checkoutDate = '';
    }
};

// ============================================================================
// MODAL DE ANFITRIÃO (SIMPLIFICADO)
// ============================================================================

const HostModal = {
    show() {
        Toast.info('🚧 Área do anfitrião em desenvolvimento');

        // Implementação futura do modal de cadastro de propriedade
    }
};

// ============================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🏠 CasaGo App inicialized!');

    // Inicializar módulos
    AuthManager.init();
    CityAutocomplete.init();
    PropertiesRenderer.render();

    // Setup event listeners
    setupEventListeners();

    // Definir datas mínimas
    setMinDates();

    Toast.success('🚀 CasaGo carregado com sucesso!');
});

function setupEventListeners() {
    // Close modal listeners
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Modal background click to close
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Search button
    const searchBtn = document.getElementById('search-button');
    searchBtn?.addEventListener('click', handleSearch);

    // Host button
    const hostBtn = document.getElementById('host-button');
    hostBtn?.addEventListener('click', () => {
        if (APP_DATA.state.isLoggedIn) {
            HostModal.show();
        } else {
            Toast.warning('Faça login para anunciar sua propriedade');
            AuthManager.showLoginModal();
        }
    });

    // Profile button
    const profileBtn = document.getElementById('profile-button');
    profileBtn?.addEventListener('click', ProfileMenu.show);

    // Guests counter
    setupGuestsCounter();

    // Date inputs
    const checkinInput = document.getElementById('checkin-input');
    const checkoutInput = document.getElementById('checkout-input');

    checkinInput?.addEventListener('change', handleDateChange);
    checkoutInput?.addEventListener('change', handleDateChange);
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin-input');
    const checkoutInput = document.getElementById('checkout-input');

    if (checkinInput) checkinInput.min = today;
    if (checkoutInput) checkoutInput.min = today;
}

function setupGuestsCounter() {
    const guestsField = document.getElementById('guests-field');
    const dropdown = document.getElementById('guests-dropdown');
    const display = document.getElementById('guests-display');

    // Toggle dropdown
    guestsField?.addEventListener('click', () => {
        dropdown?.classList.toggle('hidden');
    });

    // Counter buttons
    const setupCounter = (type) => {
        const minusBtn = document.getElementById(`${type}-minus`);
        const plusBtn = document.getElementById(`${type}-plus`);
        const count = document.getElementById(`${type}-count`);

        minusBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            let current = parseInt(count.textContent);
            if (type === 'adults' && current > 1) {
                count.textContent = current - 1;
                updateGuestsDisplay();
            } else if (type === 'children' && current > 0) {
                count.textContent = current - 1;
                updateGuestsDisplay();
            }
        });

        plusBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            let current = parseInt(count.textContent);
            if (current < 10) {
                count.textContent = current + 1;
                updateGuestsDisplay();
            }
        });
    };

    setupCounter('adults');
    setupCounter('children');

    function updateGuestsDisplay() {
        const adults = parseInt(document.getElementById('adults-count')?.textContent || '2');
        const children = parseInt(document.getElementById('children-count')?.textContent || '0');
        const total = adults + children;

        APP_DATA.state.guests.adults = adults;
        APP_DATA.state.guests.children = children;

        if (display) {
            display.textContent = `${total} hóspede${total > 1 ? 's' : ''}`;
        }
    }
}

function handleDateChange() {
    const checkin = document.getElementById('checkin-input')?.value;
    const checkout = document.getElementById('checkout-input')?.value;

    if (checkin && checkout) {
        const validation = Utils.validateDates(checkin, checkout);
        if (validation.valid) {
            const nights = Utils.calculateNights(checkin, checkout);
            Toast.success(`📅 ${nights} noite${nights > 1 ? 's' : ''} selecionada${nights > 1 ? 's' : ''}`);
        } else {
            Toast.error(validation.error);
        }
    }
}

function handleSearch() {
    const city = document.getElementById('where-input')?.value;
    const checkin = document.getElementById('checkin-input')?.value;
    const checkout = document.getElementById('checkout-input')?.value;

    if (!city) {
        Toast.warning('Selecione um destino');
        return;
    }

    if (!checkin || !checkout) {
        Toast.warning('Selecione as datas');
        return;
    }

    const validation = Utils.validateDates(checkin, checkout);
    if (!validation.valid) {
        Toast.error(validation.error);
        return;
    }

    Loading.show();

    // Simular busca
    setTimeout(() => {
        Loading.hide();
        const filtered = APP_DATA.properties.filter(p => 
            p.location.toLowerCase().includes(city.toLowerCase().split(' - ')[0])
        );

        if (filtered.length === 0) {
            Toast.info(`Nenhuma propriedade encontrada em ${city}. Mostrando todas as propriedades.`);
            PropertiesRenderer.render(APP_DATA.properties);
        } else {
            Toast.success(`${filtered.length} propriedade${filtered.length > 1 ? 's' : ''} encontrada${filtered.length > 1 ? 's' : ''} em ${city}`);
            PropertiesRenderer.render(filtered);
        }

        // Scroll to results
        document.getElementById('properties-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

// Expose globals for HTML onclick handlers
window.AuthManager = AuthManager;
window.ProfileMenu = ProfileMenu;
window.BookingManager = BookingManager;
window.PaymentManager = PaymentManager;
window.HostModal = HostModal;

console.log("✅ CasaGo App.js carregado com todas as funcionalidades!");
