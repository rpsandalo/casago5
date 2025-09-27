// CasaGo - Aplicação Principal JavaScript

// ============================================================================
// DADOS DA APLICAÇÃO
// ============================================================================

const APP_DATA = {
    cities: [
        "São Paulo - SP", "Rio de Janeiro - RJ", "Salvador - BA", "Brasília - DF", "Fortaleza - CE",
        "Belo Horizonte - MG", "Manaus - AM", "Curitiba - PR", "Recife - PE", "Florianópolis - SC",
        "Goiânia - GO", "Belém - PA", "Guarulhos - SP", "Campinas - SP", "São Luís - MA",
        "São Gonçalo - RJ", "Maceió - AL", "Duque de Caxias - RJ", "Teresina - PI", "Natal - RN",
        "Nova Iguaçu - RJ", "Campo Grande - MS", "Osasco - SP", "Santo André - SP", "João Pessoa - PB",
        "Jaboatão dos Guararapes - PE", "São José dos Campos - SP", "Ribeirão Preto - SP",
        "Uberlândia - MG", "Sorocaba - SP", "Contagem - MG", "Aracaju - SE", "Feira de Santana - BA",
        "Cuiabá - MT", "Joinville - SC", "Londrina - PR", "Aparecida de Goiânia - GO",
        "Ananindeua - PA", "Porto Velho - RO", "Serra - ES", "Niterói - RJ", "Caxias do Sul - RS",
        "Campos dos Goytacazes - RJ", "Vila Velha - ES", "Mauá - SP", "São João de Meriti - RJ",
        "Macapá - AP", "Montes Claros - MG", "Betim - MG", "Diadema - SP", "Jundiaí - SP",
        "Campina Grande - PB", "Piracicaba - SP", "Cariacica - ES", "Caruaru - PE", "Várzea Grande - MT",
        "Pelotas - RS", "Canoas - RS", "Anápolis - GO", "Maringá - PR", "Vitória - ES",
        "São Vicente - SP", "Franca - SP", "Ponta Grossa - PR", "Foz do Iguaçu - PR", "Uberaba - MG",
        "Blumenau - SC", "Paulista - PE", "Limeira - SP", "Suzano - SP", "Petrópolis - RJ",
        "Caucaia - CE", "Vitória da Conquista - BA", "Gravataí - RS", "Embu das Artes - SP",
        "Novo Hamburgo - RS", "Santa Maria - RS", "Praia Grande - SP", "Várzea Paulista - SP",
        "Taboão da Serra - SP", "Sumaré - SP", "Bauru - SP", "São José do Rio Preto - SP",
        "Juiz de Fora - MG", "Marília - SP", "Taubaté - SP", "Carapicuíba - SP", "Presidente Prudente - SP",
        "Volta Redonda - RJ", "Governador Valadares - MG", "Guarujá - SP", "São Carlos - SP",
        "Jacareí - SP", "Ribeirão das Neves - MG", "Americana - SP", "Araraquara - SP",
        "Santarém - PA", "Rio Branco - AC", "Indaiatuba - SP", "Cotia - SP", "Hortolândia - SP",
        "Itu - SP", "Palmas - TO", "Itaquaquecetuba - SP", "Criciúma - SC", "Mogi das Cruzes - SP",
        "São Caetano do Sul - SP", "Franco da Rocha - SP", "Itapevi - SP", "Boa Vista - RR",
        "Rio Grande - RS", "Angra dos Reis - RJ", "Búzios - RJ", "Gramado - RS", "Porto Seguro - BA",
        "Campos do Jordão - SP", "Paraty - RJ", "Bonito - MS", "Fernando de Noronha - PE",
        "Jericoacoara - CE", "Ouro Preto - MG", "Trancoso - BA", "Ilhabela - SP", "Canela - RS",
        "Monte Verde - MG", "Visconde de Mauá - RJ", "Penedo - AL", "Alto Paraíso - GO",
        "Capitólio - MG", "São Thomé das Letras - MG", "Cunha - SP", "Holambra - SP",
        "Nova Petrópolis - RS", "Bento Gonçalves - RS", "Garibaldi - RS", "São Bento do Sul - SC",
        "Pomerode - SC", "Itacaré - BA", "Morro Branco - CE", "Canoa Quebrada - CE",
        "Praia do Forte - BA", "Lençóis - BA", "Tiradentes - MG", "São Sebastião - SP",
        "Morro de São Paulo - BA", "Arraial do Cabo - RJ", "Ubatuba - SP", "Cabo Frio - RJ"
    ],

    properties: [
        {
            id: 1,
            title: "Apartamento inteiro em Copacabana",
            location: "Rio de Janeiro - RJ",
            type: "Apartamento inteiro",
            price: 280,
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
            amenities: ["Wi-Fi", "Cozinha", "Ar-condicionado", "Vista para o mar", "Estacionamento"],
            description: "Apartamento luxuoso com vista deslumbrante para a praia de Copacabana. Localizado em uma das regiões mais icônicas do Rio de Janeiro, você terá acesso direto à praia e a todos os pontos turísticos da cidade maravilhosa."
        },
        {
            id: 2,
            title: "Casa inteira em Vila Madalena",
            location: "São Paulo - SP",
            type: "Casa inteira",
            price: 320,
            rating: 4.95,
            reviews: 89,
            host: "João Santos",
            guests: 6,
            bedrooms: 3,
            bathrooms: 2,
            images: [
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600607688678-3f1a7f64e3fe?w=500&h=400&fit=crop&q=80"
            ],
            amenities: ["Wi-Fi", "Cozinha", "Jardim", "Estacionamento", "Pet-friendly"],
            description: "Casa moderna no coração da Vila Madalena, próximo a bares e restaurantes. Perfeita para grupos que querem explorar a vida noturna paulistana e a cultura alternativa do bairro."
        },
        {
            id: 3,
            title: "Chalé inteiro em Gramado",
            location: "Gramado - RS",
            type: "Casa inteira",
            price: 420,
            rating: 4.92,
            reviews: 156,
            host: "Ana Costa",
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=400&fit=crop&q=80"
            ],
            amenities: ["Wi-Fi", "Lareira", "Jardim", "Estacionamento", "Hidromassagem"],
            description: "Chalé romântico perfeito para um final de semana especial em Gramado. Com lareira aconchegante, hidromassagem e vista para as montanhas, ideal para casais em lua de mel."
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
        currentStep: 1
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
// SISTEMA DE NOTIFICAÇÕES
// ============================================================================

const Toast = {
    show(message, type = 'success', duration = 4000) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <i class="toast-icon ${icons[type]}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, duration);
    }
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

        // Fechar ao clicar fora
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
            .slice(0, 8);

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

        // Event listeners para seleção
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

        Toast.show(`📍 Destino selecionado: ${city}`, 'success');
        this.updateSearchButton();
    },

    updateSearchButton() {
        const button = document.getElementById('search-button');
        if (button) {
            button.disabled = false;
            button.style.opacity = '1';
        }
    }
};

// ============================================================================
// GERENCIAMENTO DE DATAS
// ============================================================================

const DateManager = {
    init() {
        const checkinInput = document.getElementById('checkin-input');
        const checkoutInput = document.getElementById('checkout-input');

        if (!checkinInput || !checkoutInput) return;

        // Configurar data mínima (hoje)
        const today = new Date().toISOString().split('T')[0];
        checkinInput.setAttribute('min', today);
        checkoutInput.setAttribute('min', today);

        checkinInput.addEventListener('change', () => {
            this.updateCheckoutMin();
            this.updateSummary();
        });

        checkoutInput.addEventListener('change', () => {
            this.updateSummary();
        });

        this.setupSummaryActions();
    },

    updateCheckoutMin() {
        const checkinInput = document.getElementById('checkin-input');
        const checkoutInput = document.getElementById('checkout-input');

        if (checkinInput.value) {
            const checkinDate = new Date(checkinInput.value);
            checkinDate.setDate(checkinDate.getDate() + 1);
            checkoutInput.setAttribute('min', checkinDate.toISOString().split('T')[0]);
        }
    },

    updateSummary() {
        const checkinInput = document.getElementById('checkin-input');
        const checkoutInput = document.getElementById('checkout-input');
        const summary = document.getElementById('date-summary');
        const summaryDates = document.getElementById('summary-dates');
        const summaryNights = document.getElementById('summary-nights');

        const checkin = checkinInput.value;
        const checkout = checkoutInput.value;

        if (!checkin || !checkout) {
            summary.classList.add('hidden');
            return;
        }

        const validation = Utils.validateDates(checkin, checkout);

        if (!validation.valid) {
            summaryDates.textContent = validation.error;
            summaryDates.style.color = 'var(--error)';
            summaryNights.textContent = '';
            summary.classList.remove('hidden');
            return;
        }

        const nights = Utils.calculateNights(checkin, checkout);
        const checkinFormatted = Utils.formatDate(checkin);
        const checkoutFormatted = Utils.formatDate(checkout);

        summaryDates.textContent = `${checkinFormatted} → ${checkoutFormatted}`;
        summaryDates.style.color = 'var(--brasil-verde)';
        summaryNights.textContent = `${nights} noite${nights > 1 ? 's' : ''}`;

        APP_DATA.state.checkinDate = checkin;
        APP_DATA.state.checkoutDate = checkout;

        summary.classList.remove('hidden');
    },

    setupSummaryActions() {
        const clearBtn = document.getElementById('clear-dates');
        const confirmBtn = document.getElementById('confirm-dates');

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearDates();
            });
        }

        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                this.confirmDates();
            });
        }
    },

    clearDates() {
        const checkinInput = document.getElementById('checkin-input');
        const checkoutInput = document.getElementById('checkout-input');
        const summary = document.getElementById('date-summary');

        checkinInput.value = '';
        checkoutInput.value = '';
        APP_DATA.state.checkinDate = '';
        APP_DATA.state.checkoutDate = '';

        summary.classList.add('hidden');
        Toast.show('📅 Datas removidas', 'warning');
    },

    confirmDates() {
        const checkin = APP_DATA.state.checkinDate;
        const checkout = APP_DATA.state.checkoutDate;

        const validation = Utils.validateDates(checkin, checkout);
        if (!validation.valid) {
            Toast.show(validation.error, 'error');
            return;
        }

        const summary = document.getElementById('date-summary');
        summary.classList.add('hidden');

        Toast.show('✅ Datas confirmadas!', 'success');

        // Scroll para propriedades
        const propertiesSection = document.querySelector('.properties-section');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
};

// ============================================================================
// CONTADOR DE HÓSPEDES
// ============================================================================

const GuestsManager = {
    init() {
        const guestsField = document.getElementById('guests-field');
        const guestsDropdown = document.getElementById('guests-dropdown');

        if (!guestsField || !guestsDropdown) return;

        guestsField.addEventListener('click', () => {
            guestsDropdown.classList.toggle('hidden');
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!guestsField.contains(e.target)) {
                guestsDropdown.classList.add('hidden');
            }
        });

        this.setupCounters();
        this.updateDisplay();
    },

    setupCounters() {
        const adultsPlus = document.getElementById('adults-plus');
        const adultsMinus = document.getElementById('adults-minus');
        const childrenPlus = document.getElementById('children-plus');
        const childrenMinus = document.getElementById('children-minus');

        adultsPlus?.addEventListener('click', () => {
            if (APP_DATA.state.guests.adults < 16) {
                APP_DATA.state.guests.adults++;
                this.updateDisplay();
            }
        });

        adultsMinus?.addEventListener('click', () => {
            if (APP_DATA.state.guests.adults > 1) {
                APP_DATA.state.guests.adults--;
                this.updateDisplay();
            }
        });

        childrenPlus?.addEventListener('click', () => {
            if (APP_DATA.state.guests.children < 5) {
                APP_DATA.state.guests.children++;
                this.updateDisplay();
            }
        });

        childrenMinus?.addEventListener('click', () => {
            if (APP_DATA.state.guests.children > 0) {
                APP_DATA.state.guests.children--;
                this.updateDisplay();
            }
        });
    },

    updateDisplay() {
        const guestsDisplay = document.getElementById('guests-display');
        const adultsCount = document.getElementById('adults-count');
        const childrenCount = document.getElementById('children-count');
        const adultsMinus = document.getElementById('adults-minus');
        const childrenMinus = document.getElementById('children-minus');

        const { adults, children } = APP_DATA.state.guests;
        const total = adults + children;

        if (guestsDisplay) {
            guestsDisplay.textContent = `${total} hóspede${total > 1 ? 's' : ''}`;
        }

        if (adultsCount) adultsCount.textContent = adults;
        if (childrenCount) childrenCount.textContent = children;

        // Disable/enable buttons
        if (adultsMinus) adultsMinus.disabled = adults <= 1;
        if (childrenMinus) childrenMinus.disabled = children <= 0;
    }
};

// ============================================================================
// RENDERIZAÇÃO DE PROPRIEDADES
// ============================================================================

const PropertiesRenderer = {
    render(properties = APP_DATA.properties) {
        const grid = document.getElementById('properties-grid');
        if (!grid) return;

        if (properties.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-home" style="font-size: 48px; color: var(--gray-300); margin-bottom: 16px;"></i>
                    <h3 style="color: var(--gray-600); margin-bottom: 8px;">Nenhuma propriedade encontrada</h3>
                    <p style="color: var(--gray-500);">Tente ajustar seus filtros de busca</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = properties.map(property => this.createPropertyCard(property)).join('');
        this.setupPropertyListeners();
    },

    createPropertyCard(property) {
        const isFavorite = APP_DATA.state.favorites.includes(property.id);
        const mainImage = property.images?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80';

        return `
            <div class="property-card" data-property-id="${property.id}">
                <div class="property-image">
                    <img src="${mainImage}" alt="${property.title}" loading="lazy">
                    ${property.isNew ? '<div class="new-badge">Novo</div>' : ''}
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-property-id="${property.id}">
                        <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="property-info">
                    <div class="property-header">
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-rating">
                            <i class="fas fa-star star"></i>
                            <span>${property.rating}</span>
                        </div>
                    </div>
                    <div class="property-location">${property.location}</div>
                    <div class="property-type">${property.type}</div>
                    <div class="property-price">
                        <span class="currency">${Utils.formatCurrency(property.price).replace(/\s/g, ' ')}</span>
                        <span class="period"> /noite</span>
                    </div>
                </div>
            </div>
        `;
    },

    setupPropertyListeners() {
        // Listeners para cards
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.favorite-btn')) {
                    const propertyId = parseInt(card.dataset.propertyId);
                    this.openPropertyModal(propertyId);
                }
            });
        });

        // Listeners para favoritos
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const propertyId = parseInt(btn.dataset.propertyId);
                FavoritesManager.toggle(propertyId);
            });
        });
    },

    openPropertyModal(propertyId) {
        const property = APP_DATA.properties.find(p => p.id === propertyId);
        if (!property) return;

        PropertyModal.show(property);
    }
};

// ============================================================================
// SISTEMA DE FAVORITOS
// ============================================================================

const FavoritesManager = {
    toggle(propertyId) {
        const favorites = APP_DATA.state.favorites;
        const index = favorites.indexOf(propertyId);

        if (index === -1) {
            favorites.push(propertyId);
            Toast.show('❤️ Adicionado aos favoritos!', 'success');
        } else {
            favorites.splice(index, 1);
            Toast.show('💔 Removido dos favoritos', 'warning');
        }

        localStorage.setItem('casago_favorites', JSON.stringify(favorites));
        this.updateVisuals(propertyId);
    },

    updateVisuals(propertyId) {
        const btn = document.querySelector(`[data-property-id="${propertyId}"].favorite-btn`);
        if (!btn) return;

        const icon = btn.querySelector('i');
        const isFavorite = APP_DATA.state.favorites.includes(propertyId);

        btn.classList.toggle('active', isFavorite);
        icon.className = isFavorite ? 'fas fa-heart' : 'far fa-heart';
    }
};

// ============================================================================
// MODAL DE PROPRIEDADE
// ============================================================================

const PropertyModal = {
    show(property) {
        const modal = document.getElementById('property-modal');
        const title = document.getElementById('property-modal-title');
        const content = document.getElementById('property-modal-content');

        title.textContent = property.title;
        content.innerHTML = this.createContent(property);

        modal.classList.add('active');
        this.setupListeners();
    },

    createContent(property) {
        return `
            <div style="max-width: 800px;">
                <div class="property-gallery" style="margin-bottom: 24px;">
                    <div class="main-image" style="margin-bottom: 12px;">
                        <img src="${property.images[0]}" alt="${property.title}" 
                             style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px;" 
                             id="modal-main-image">
                    </div>
                    <div style="display: flex; gap: 8px; overflow-x: auto;">
                        ${property.images.slice(1, 5).map(img => `
                            <img src="${img}" alt="Foto da propriedade" 
                                 style="width: 80px; height: 60px; object-fit: cover; border-radius: 6px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s;"
                                 onclick="PropertyModal.changeMainImage('${img}')">
                        `).join('')}
                    </div>
                </div>

                <div class="property-details" style="display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: start;">
                    <div>
                        <div style="margin-bottom: 16px;">
                            <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">${property.title}</h3>
                            <div style="display: flex; align-items: center; gap: 16px; color: var(--gray-600);">
                                <span><i class="fas fa-map-marker-alt" style="color: var(--brasil-verde);"></i> ${property.location}</span>
                                <span><i class="fas fa-star" style="color: var(--brasil-amarelo);"></i> ${property.rating} (${property.reviews} avaliações)</span>
                            </div>
                        </div>

                        <div style="display: flex; gap: 24px; margin-bottom: 24px; padding: 16px; background: var(--gray-50); border-radius: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-users" style="color: var(--gray-500);"></i>
                                <span>${property.guests} hóspedes</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-bed" style="color: var(--gray-500);"></i>
                                <span>${property.bedrooms} quartos</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-bath" style="color: var(--gray-500);"></i>
                                <span>${property.bathrooms} banheiros</span>
                            </div>
                        </div>

                        <div style="margin-bottom: 24px;">
                            <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Descrição</h4>
                            <p style="line-height: 1.6; color: var(--gray-600);">${property.description}</p>
                        </div>

                        <div style="margin-bottom: 24px;">
                            <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Comodidades</h4>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
                                ${property.amenities.map(amenity => `
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <i class="fas fa-check" style="color: var(--success); font-size: 12px;"></i>
                                        <span>${amenity}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div>
                            <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Anfitrião</h4>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <i class="fas fa-user-circle" style="font-size: 32px; color: var(--gray-400);"></i>
                                <span>Hospedado por ${property.host}</span>
                            </div>
                        </div>
                    </div>

                    <div style="background: var(--white); border: 1px solid var(--gray-200); border-radius: 12px; padding: 24px; min-width: 300px; box-shadow: var(--shadow-lg);">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <span style="font-size: 24px; font-weight: 600;">${Utils.formatCurrency(property.price)}</span>
                            <span style="color: var(--gray-500);"> /noite</span>
                        </div>
                        <button onclick="BookingModal.show(${property.id})" 
                                style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s;">
                            Reservar Agora
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    changeMainImage(src) {
        const mainImage = document.getElementById('modal-main-image');
        if (mainImage) {
            mainImage.src = src;
        }
    },

    setupListeners() {
        const closeBtn = document.getElementById('property-modal-close');
        closeBtn?.addEventListener('click', () => {
            this.hide();
        });
    },

    hide() {
        const modal = document.getElementById('property-modal');
        modal?.classList.remove('active');
    }
};

// ============================================================================
// MODAL DE RESERVA
// ============================================================================

const BookingModal = {
    show(propertyId) {
        const property = APP_DATA.properties.find(p => p.id === propertyId);
        if (!property) return;

        APP_DATA.state.currentBooking = property;

        const modal = document.getElementById('booking-modal');
        const content = document.getElementById('booking-modal-content');

        content.innerHTML = this.createContent(property);
        modal.classList.add('active');

        // Fechar modal de propriedade
        PropertyModal.hide();

        this.setupListeners();
    },

    createContent(property) {
        const { checkinDate, checkoutDate } = APP_DATA.state;
        const nights = checkinDate && checkoutDate ? Utils.calculateNights(checkinDate, checkoutDate) : 0;
        const totalPrice = nights * property.price;

        return `
            <div style="max-width: 500px; margin: 0 auto;">
                <div style="display: flex; gap: 16px; margin-bottom: 24px; padding: 16px; background: var(--gray-50); border-radius: 12px;">
                    <img src="${property.images[0]}" alt="${property.title}" 
                         style="width: 80px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div style="flex: 1;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${property.title}</h4>
                        <p style="color: var(--gray-600); font-size: 14px;">${property.location}</p>
                        <p style="color: var(--gray-600); font-size: 14px;"><i class="fas fa-star" style="color: var(--brasil-amarelo);"></i> ${property.rating}</p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 18px; font-weight: 600;">${Utils.formatCurrency(property.price)}</div>
                        <div style="font-size: 14px; color: var(--gray-500);">por noite</div>
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Selecione suas datas</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Check-in</label>
                            <input type="date" id="booking-checkin" value="${checkinDate}" 
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Check-out</label>
                            <input type="date" id="booking-checkout" value="${checkoutDate}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Hóspedes</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        <span>Total de hóspedes</span>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <button type="button" onclick="BookingModal.updateGuests(-1)" 
                                    style="width: 32px; height: 32px; border: 1px solid var(--gray-300); border-radius: 50%; background: white; cursor: pointer;">-</button>
                            <span id="booking-guests">${APP_DATA.state.guests.adults + APP_DATA.state.guests.children}</span>
                            <button type="button" onclick="BookingModal.updateGuests(1)" 
                                    style="width: 32px; height: 32px; border: 1px solid var(--gray-300); border-radius: 50%; background: white; cursor: pointer;">+</button>
                        </div>
                    </div>
                </div>

                <div id="booking-summary" style="background: var(--gray-50); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    ${nights > 0 ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>${Utils.formatCurrency(property.price)} x ${nights} noite${nights > 1 ? 's' : ''}</span>
                            <span>${Utils.formatCurrency(property.price * nights)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Taxa de serviço</span>
                            <span>${Utils.formatCurrency(property.price * nights * 0.1)}</span>
                        </div>
                        <hr style="border: none; border-top: 1px solid var(--gray-300); margin: 12px 0;">
                        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 18px;">
                            <span>Total</span>
                            <span>${Utils.formatCurrency(property.price * nights * 1.1)}</span>
                        </div>
                    ` : `
                        <p style="text-align: center; color: var(--gray-500);">Selecione as datas para ver o preço total</p>
                    `}
                </div>

                <button onclick="PaymentModal.show()" 
                        ${nights <= 0 ? 'disabled' : ''}
                        style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s; ${nights <= 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                    ${nights > 0 ? 'Continuar para Pagamento' : 'Selecione as datas primeiro'}
                </button>
            </div>
        `;
    },

    setupListeners() {
        const closeBtn = document.getElementById('booking-modal-close');
        const checkinInput = document.getElementById('booking-checkin');
        const checkoutInput = document.getElementById('booking-checkout');

        closeBtn?.addEventListener('click', () => {
            this.hide();
        });

        checkinInput?.addEventListener('change', () => {
            this.updateDates();
        });

        checkoutInput?.addEventListener('change', () => {
            this.updateDates();
        });

        // Configurar datas mínimas
        const today = new Date().toISOString().split('T')[0];
        if (checkinInput) checkinInput.setAttribute('min', today);
        if (checkoutInput) checkoutInput.setAttribute('min', today);
    },

    updateDates() {
        const checkinInput = document.getElementById('booking-checkin');
        const checkoutInput = document.getElementById('booking-checkout');

        APP_DATA.state.checkinDate = checkinInput.value;
        APP_DATA.state.checkoutDate = checkoutInput.value;

        // Atualizar data mínima do checkout
        if (checkinInput.value) {
            const checkinDate = new Date(checkinInput.value);
            checkinDate.setDate(checkinDate.getDate() + 1);
            checkoutInput.setAttribute('min', checkinDate.toISOString().split('T')[0]);
        }

        // Recriar conteúdo com novos preços
        const content = document.getElementById('booking-modal-content');
        content.innerHTML = this.createContent(APP_DATA.state.currentBooking);
        this.setupListeners();
    },

    updateGuests(delta) {
        const currentTotal = APP_DATA.state.guests.adults + APP_DATA.state.guests.children;
        const newTotal = Math.max(1, Math.min(16, currentTotal + delta));

        if (delta > 0) {
            APP_DATA.state.guests.adults++;
        } else if (APP_DATA.state.guests.adults > 1) {
            APP_DATA.state.guests.adults--;
        } else if (APP_DATA.state.guests.children > 0) {
            APP_DATA.state.guests.children--;
        }

        document.getElementById('booking-guests').textContent = APP_DATA.state.guests.adults + APP_DATA.state.guests.children;
    },

    hide() {
        const modal = document.getElementById('booking-modal');
        modal?.classList.remove('active');
    }
};

// ============================================================================
// MODAL DE PAGAMENTO
// ============================================================================

const PaymentModal = {
    show() {
        const modal = document.getElementById('payment-modal');
        const content = document.getElementById('payment-modal-content');

        content.innerHTML = this.createContent();
        modal.classList.add('active');

        // Fechar modal de reserva
        BookingModal.hide();

        this.setupListeners();
    },

    createContent() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const subtotal = property.price * nights;
        const serviceFee = subtotal * 0.1;
        const total = subtotal + serviceFee;

        return `
            <div style="max-width: 500px; margin: 0 auto;">
                <div style="background: var(--gray-50); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Resumo da Reserva</h4>
                    <div style="font-size: 14px; line-height: 1.8;">
                        <div><strong>${property.title}</strong></div>
                        <div>${property.location}</div>
                        <div>${Utils.formatDate(APP_DATA.state.checkinDate)} - ${Utils.formatDate(APP_DATA.state.checkoutDate)}</div>
                        <div>${APP_DATA.state.guests.adults + APP_DATA.state.guests.children} hóspede${(APP_DATA.state.guests.adults + APP_DATA.state.guests.children) > 1 ? 's' : ''}</div>
                        <hr style="border: none; border-top: 1px solid var(--gray-300); margin: 12px 0;">
                        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 16px;">
                            <span>Total: ${Utils.formatCurrency(total)}</span>
                        </div>
                    </div>
                </div>

                <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Escolha sua forma de pagamento</h4>

                <div style="display: grid; gap: 12px;">
                    <button onclick="PaymentModal.selectPix()" 
                            style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 16px; border: 2px solid var(--gray-200); border-radius: 12px; background: white; cursor: pointer; transition: border-color 0.2s;">
                        <div style="width: 40px; height: 40px; background: var(--brasil-verde); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">PIX</div>
                        <div style="flex: 1; text-align: left;">
                            <div style="font-weight: 600;">PIX - Instantâneo</div>
                            <div style="font-size: 14px; color: var(--gray-600);">Aprovação imediata e gratuita</div>
                        </div>
                        <div style="color: var(--success); font-weight: 600;">Recomendado</div>
                    </button>

                    <button onclick="PaymentModal.selectCard()" 
                            style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 16px; border: 2px solid var(--gray-200); border-radius: 12px; background: white; cursor: pointer; transition: border-color 0.2s;">
                        <div style="width: 40px; height: 40px; background: var(--brasil-azul); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <div style="flex: 1; text-align: left;">
                            <div style="font-weight: 600;">Cartão de Crédito</div>
                            <div style="font-size: 14px; color: var(--gray-600);">Visa, Mastercard, Elo</div>
                        </div>
                    </button>
                </div>
            </div>
        `;
    },

    selectPix() {
        Loading.show();

        setTimeout(() => {
            Loading.hide();
            this.showPixPayment();
        }, 1000);
    },

    selectCard() {
        Loading.show();

        setTimeout(() => {
            Loading.hide();
            this.showCardPayment();
        }, 1000);
    },

    showPixPayment() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const total = (property.price * nights * 1.1).toFixed(2);

        // Gerar código PIX simulado
        const pixCode = `00020126580014BR.GOV.BCB.PIX013${Utils.generateId().substring(0, 13)}5204000053039865802BR5925CASAGO PAGAMENTOS LTDA6009SAO PAULO62070503***6304${Math.random().toString().substring(2, 6)}`;

        const content = document.getElementById('payment-modal-content');
        content.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto; text-align: center;">
                <div style="background: var(--success); color: white; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <i class="fas fa-qrcode" style="font-size: 24px; margin-bottom: 8px;"></i>
                    <h4 style="margin-bottom: 4px;">Pagamento PIX</h4>
                    <div style="font-size: 24px; font-weight: 600;">${Utils.formatCurrency(parseFloat(total))}</div>
                </div>

                <div style="background: white; border: 2px solid var(--gray-200); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <div id="qr-code" style="width: 200px; height: 200px; background: white; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--gray-500); border: 1px solid var(--gray-200);">
                        QR CODE PIX<br/>
                        Escaneie com seu<br/>
                        app do banco
                    </div>
                    <p style="font-size: 14px; color: var(--gray-600); margin-bottom: 16px;">Escaneie o código QR com o app do seu banco</p>

                    <div style="background: var(--gray-50); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
                        <div style="font-size: 12px; color: var(--gray-600); margin-bottom: 4px;">Código PIX Copia e Cola:</div>
                        <div style="font-family: monospace; font-size: 10px; word-break: break-all; background: white; padding: 8px; border-radius: 4px; border: 1px solid var(--gray-200);">${pixCode}</div>
                    </div>

                    <button onclick="PaymentModal.copyPixCode('${pixCode}')" 
                            style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 12px; font-weight: 600; cursor: pointer; margin-bottom: 16px;">
                        <i class="fas fa-copy"></i> Copiar Código PIX
                    </button>
                </div>

                <div style="background: var(--warning); color: white; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
                        <i class="fas fa-clock"></i>
                        <span style="font-weight: 600;">Expira em: <span id="pix-timer">14:59</span></span>
                    </div>
                    <div style="font-size: 14px;">Realize o pagamento antes do prazo</div>
                </div>

                <div id="pix-status" style="padding: 16px; border-radius: 8px; margin-bottom: 20px; background: var(--info); color: white;">
                    <i class="fas fa-hourglass-half"></i> Aguardando pagamento...
                </div>

                <div style="font-size: 14px; color: var(--gray-600); line-height: 1.5;">
                    <p><strong>Como pagar:</strong></p>
                    <ol style="text-align: left; padding-left: 20px;">
                        <li>Abra o app do seu banco</li>
                        <li>Escolha a opção PIX</li>
                        <li>Escaneie o QR Code ou cole o código</li>
                        <li>Confirme o pagamento</li>
                    </ol>
                </div>
            </div>
        `;

        this.startPixTimer();
        this.simulatePixPayment();
    },

    showCardPayment() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const total = (property.price * nights * 1.1).toFixed(2);

        const content = document.getElementById('payment-modal-content');
        content.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto;">
                <div style="background: var(--brasil-azul); color: white; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
                    <i class="fas fa-credit-card" style="font-size: 24px; margin-bottom: 8px;"></i>
                    <h4 style="margin-bottom: 4px;">Pagamento Cartão</h4>
                    <div style="font-size: 24px; font-weight: 600;">${Utils.formatCurrency(parseFloat(total))}</div>
                </div>

                <form id="card-form" style="display: grid; gap: 16px;">
                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Número do Cartão</label>
                        <div style="position: relative;">
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" maxlength="19"
                                   style="width: 100%; padding: 12px 50px 12px 12px; border: 1px solid var(--gray-300); border-radius: 8px; font-size: 16px;">
                            <div id="card-brand" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); width: 30px; height: 20px; background: var(--gray-200); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--gray-500);">
                                ?
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Nome no Cartão</label>
                        <input type="text" id="card-name" placeholder="JOÃO DA SILVA" 
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px; text-transform: uppercase;">
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Validade</label>
                            <input type="text" id="card-expiry" placeholder="MM/AA" maxlength="5"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">CVV</label>
                            <input type="text" id="card-cvv" placeholder="123" maxlength="4"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">CPF do Titular</label>
                        <input type="text" id="card-cpf" placeholder="000.000.000-00" maxlength="14"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Parcelas</label>
                        <select id="card-installments" 
                                style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                            <option value="1">1x de ${Utils.formatCurrency(parseFloat(total))} (sem juros)</option>
                            <option value="2">2x de ${Utils.formatCurrency(parseFloat(total) / 2)} (sem juros)</option>
                            <option value="3">3x de ${Utils.formatCurrency(parseFloat(total) / 3)} (sem juros)</option>
                            <option value="4">4x de ${Utils.formatCurrency(parseFloat(total) / 4 * 1.02)} (com juros)</option>
                            <option value="6">6x de ${Utils.formatCurrency(parseFloat(total) / 6 * 1.05)} (com juros)</option>
                        </select>
                    </div>

                    <button type="submit" 
                            style="width: 100%; background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; cursor: pointer; margin-top: 8px;">
                        <i class="fas fa-lock"></i> Finalizar Pagamento
                    </button>
                </form>

                <div style="display: flex; justify-content: center; gap: 8px; margin-top: 16px; opacity: 0.7;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 24'%3E%3Cpath fill='%23005a9e' d='M0 0h16v24H0z'/%3E%3Cpath fill='%23f9a533' d='M16 0h8v24h-8z'/%3E%3Cpath fill='%23e62b26' d='M24 0h16v24H24z'/%3E%3C/svg%3E" alt="Mastercard" style="height: 20px;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 24'%3E%3Cpath fill='%23005a9e' d='M0 0h40v24H0z'/%3E%3Cpath fill='%23fff' d='M8 8h24v8H8z'/%3E%3C/svg%3E" alt="Visa" style="height: 20px;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 24'%3E%3Cpath fill='%23f9a533' d='M0 0h40v24H0z'/%3E%3Cpath fill='%23005a9e' d='M0 12h40v12H0z'/%3E%3C/svg%3E" alt="Elo" style="height: 20px;">
                </div>
            </div>
        `;

        this.setupCardForm();
    },

    setupCardForm() {
        const cardNumber = document.getElementById('card-number');
        const cardName = document.getElementById('card-name');
        const cardExpiry = document.getElementById('card-expiry');
        const cardCvv = document.getElementById('card-cvv');
        const cardCpf = document.getElementById('card-cpf');
        const form = document.getElementById('card-form');

        // Máscaras
        cardNumber?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
            this.detectCardBrand(value.replace(/\s/g, ''));
        });

        cardExpiry?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });

        cardCvv?.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        cardCpf?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });

        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processCardPayment();
        });
    },

    detectCardBrand(number) {
        const brandElement = document.getElementById('card-brand');
        if (!brandElement) return;

        let brand = '?';
        let color = 'var(--gray-200)';

        if (number.startsWith('4')) {
            brand = 'VISA';
            color = '#005a9e';
        } else if (number.startsWith('5') || number.startsWith('2')) {
            brand = 'MASTER';
            color = '#eb001b';
        } else if (number.startsWith('6')) {
            brand = 'ELO';
            color = '#f9a533';
        }

        brandElement.textContent = brand;
        brandElement.style.background = color;
        brandElement.style.color = 'white';
        brandElement.style.fontSize = '8px';
        brandElement.style.fontWeight = 'bold';
    },

    processCardPayment() {
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const cardName = document.getElementById('card-name').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvv = document.getElementById('card-cvv').value;
        const cardCpf = document.getElementById('card-cpf').value;

        // Validações simples
        if (!cardNumber || cardNumber.length < 13) {
            Toast.show('Número do cartão inválido', 'error');
            return;
        }

        if (!cardName || cardName.length < 3) {
            Toast.show('Nome do titular inválido', 'error');
            return;
        }

        if (!cardExpiry || cardExpiry.length !== 5) {
            Toast.show('Data de validade inválida', 'error');
            return;
        }

        if (!cardCvv || cardCvv.length < 3) {
            Toast.show('CVV inválido', 'error');
            return;
        }

        if (!cardCpf || cardCpf.replace(/\D/g, '').length !== 11) {
            Toast.show('CPF inválido', 'error');
            return;
        }

        // Validar algoritmo de Luhn (simplificado)
        if (!this.validateLuhn(cardNumber)) {
            Toast.show('Número do cartão inválido', 'error');
            return;
        }

        Loading.show();

        // Simular processamento
        setTimeout(() => {
            Loading.hide();

            // 90% de aprovação
            if (Math.random() > 0.1) {
                this.showPaymentSuccess();
            } else {
                this.showPaymentError();
            }
        }, 3000);
    },

    validateLuhn(cardNumber) {
        // Algoritmo de Luhn simplificado
        let sum = 0;
        let alternate = false;

        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let n = parseInt(cardNumber.charAt(i), 10);

            if (alternate) {
                n *= 2;
                if (n > 9) {
                    n = (n % 10) + 1;
                }
            }

            sum += n;
            alternate = !alternate;
        }

        return (sum % 10) === 0;
    },

    copyPixCode(code) {
        navigator.clipboard.writeText(code).then(() => {
            Toast.show('✅ Código PIX copiado!', 'success');
        }).catch(() => {
            Toast.show('❌ Erro ao copiar código', 'error');
        });
    },

    startPixTimer() {
        let minutes = 14;
        let seconds = 59;

        const timer = setInterval(() => {
            const timerElement = document.getElementById('pix-timer');
            if (!timerElement) {
                clearInterval(timer);
                return;
            }

            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                this.showPixExpired();
                return;
            }

            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }
        }, 1000);
    },

    simulatePixPayment() {
        // Simular confirmação automática após 10 segundos
        setTimeout(() => {
            const statusElement = document.getElementById('pix-status');
            if (statusElement) {
                statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Pagamento confirmado!';
                statusElement.style.background = 'var(--success)';

                setTimeout(() => {
                    this.showPaymentSuccess();
                }, 2000);
            }
        }, 10000);
    },

    showPixExpired() {
        const statusElement = document.getElementById('pix-status');
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-times-circle"></i> PIX expirado';
            statusElement.style.background = 'var(--error)';
        }
    },

    showPaymentSuccess() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const total = (property.price * nights * 1.1).toFixed(2);
        const bookingId = Utils.generateId().toUpperCase();

        const content = document.getElementById('payment-modal-content');
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
                            <span style="color: var(--gray-600);">Localização:</span>
                            <span>${property.location}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Check-in:</span>
                            <span>${Utils.formatDate(APP_DATA.state.checkinDate)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Check-out:</span>
                            <span>${Utils.formatDate(APP_DATA.state.checkoutDate)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Hóspedes:</span>
                            <span>${APP_DATA.state.guests.adults + APP_DATA.state.guests.children} pessoa${(APP_DATA.state.guests.adults + APP_DATA.state.guests.children) > 1 ? 's' : ''}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Noites:</span>
                            <span>${nights} noite${nights > 1 ? 's' : ''}</span>
                        </div>
                        <hr style="border: none; border-top: 1px solid var(--gray-300); margin: 8px 0;">
                        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 16px;">
                            <span>Total Pago:</span>
                            <span style="color: var(--success);">${Utils.formatCurrency(parseFloat(total))}</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 12px; justify-content: center;">
                    <button onclick="PaymentModal.downloadVoucher()" 
                            style="background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 12px 24px; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-download"></i> Baixar Voucher
                    </button>
                    <button onclick="PaymentModal.hide()" 
                            style="background: var(--gray-200); color: var(--gray-700); border: none; border-radius: 8px; padding: 12px 24px; font-weight: 600; cursor: pointer;">
                        Fechar
                    </button>
                </div>

                <div style="margin-top: 24px; padding: 16px; background: var(--info); color: white; border-radius: 8px; font-size: 14px;">
                    <i class="fas fa-info-circle"></i> 
                    Apresente este voucher no check-in. O anfitrião entrará em contato em até 24 horas.
                </div>
            </div>
        `;
    },

    showPaymentError() {
        Toast.show('❌ Pagamento recusado. Verifique os dados do cartão.', 'error');

        setTimeout(() => {
            this.showCardPayment();
        }, 2000);
    },

    downloadVoucher() {
        Toast.show('📱 Em breve: Download de voucher via WhatsApp', 'info');
    },

    setupListeners() {
        const closeBtn = document.getElementById('payment-modal-close');
        closeBtn?.addEventListener('click', () => {
            this.hide();
        });
    },

    hide() {
        const modal = document.getElementById('payment-modal');
        modal?.classList.remove('active');

        // Reset states
        APP_DATA.state.currentBooking = null;
        APP_DATA.state.checkinDate = '';
        APP_DATA.state.checkoutDate = '';
    }
};

// ============================================================================
// MODAL DE HOST (CADASTRO DE PROPRIEDADE)
// ============================================================================

const HostModal = {
    currentStep: 1,
    totalSteps: 4,
    propertyData: {},

    show() {
        const modal = document.getElementById('host-modal');
        const content = document.getElementById('host-modal-content');

        this.currentStep = 1;
        this.propertyData = {};

        content.innerHTML = this.createStepContent();
        modal.classList.add('active');

        this.setupListeners();
    },

    createStepContent() {
        const stepContents = [
            this.createStep1(),
            this.createStep2(),
            this.createStep3(),
            this.createStep4()
        ];

        return `
            <div style="max-width: 600px; margin: 0 auto;">
                <div style="display: flex; justify-content: center; margin-bottom: 32px;">
                    ${Array.from({length: this.totalSteps}, (_, i) => `
                        <div style="display: flex; align-items: center;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${i + 1 <= this.currentStep ? 'var(--brasil-verde)' : 'var(--gray-300)'}; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">
                                ${i + 1}
                            </div>
                            ${i < this.totalSteps - 1 ? `<div style="width: 40px; height: 2px; background: ${i + 1 < this.currentStep ? 'var(--brasil-verde)' : 'var(--gray-300)'};"></div>` : ''}
                        </div>
                    `).join('')}
                </div>

                ${stepContents[this.currentStep - 1]}

                <div style="display: flex; justify-content: space-between; margin-top: 32px;">
                    <button onclick="HostModal.previousStep()" 
                            ${this.currentStep === 1 ? 'style="visibility: hidden;"' : ''}
                            style="background: var(--gray-200); color: var(--gray-700); border: none; border-radius: 8px; padding: 12px 24px; font-weight: 600; cursor: pointer;">
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>

                    <button onclick="HostModal.${this.currentStep === this.totalSteps ? 'submitProperty' : 'nextStep'}()" 
                            id="step-next-btn"
                            style="background: var(--brasil-verde); color: white; border: none; border-radius: 8px; padding: 12px 24px; font-weight: 600; cursor: pointer;">
                        ${this.currentStep === this.totalSteps ? '<i class="fas fa-check"></i> Publicar Propriedade' : 'Próximo <i class="fas fa-arrow-right"></i>'}
                    </button>
                </div>
            </div>
        `;
    },

    createStep1() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Informações básicas</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Conte-nos sobre sua propriedade</p>

                <div style="display: grid; gap: 16px;">
                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Título da propriedade *</label>
                        <input type="text" id="property-title" placeholder="Ex: Apartamento aconchegante em Copacabana" value="${this.propertyData.title || ''}"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Tipo de propriedade *</label>
                        <select id="property-type" 
                                style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                            <option value="">Selecione o tipo</option>
                            <option value="Apartamento inteiro" ${this.propertyData.type === 'Apartamento inteiro' ? 'selected' : ''}>Apartamento inteiro</option>
                            <option value="Casa inteira" ${this.propertyData.type === 'Casa inteira' ? 'selected' : ''}>Casa inteira</option>
                            <option value="Quarto privado" ${this.propertyData.type === 'Quarto privado' ? 'selected' : ''}>Quarto privado</option>
                            <option value="Quarto compartilhado" ${this.propertyData.type === 'Quarto compartilhado' ? 'selected' : ''}>Quarto compartilhado</option>
                        </select>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Preço por noite (R$) *</label>
                        <input type="number" id="property-price" placeholder="280" min="1" value="${this.propertyData.price || ''}"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                    </div>
                </div>
            </div>
        `;
    },

    createStep2() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Localização</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Onde fica sua propriedade?</p>

                <div style="display: grid; gap: 16px;">
                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">CEP *</label>
                        <input type="text" id="property-cep" placeholder="00000-000" maxlength="9" value="${this.propertyData.cep || ''}"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        <small style="color: var(--gray-500);">Digite o CEP para preenchimento automático</small>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Endereço *</label>
                        <input type="text" id="property-address" placeholder="Rua, Avenida..." value="${this.propertyData.address || ''}"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Bairro *</label>
                            <input type="text" id="property-neighborhood" value="${this.propertyData.neighborhood || ''}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Cidade - UF *</label>
                            <input type="text" id="property-city" placeholder="São Paulo - SP" value="${this.propertyData.city || ''}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    createStep3() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Detalhes da propriedade</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Quantas pessoas sua propriedade acomoda?</p>

                <div style="display: grid; gap: 16px;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Hóspedes *</label>
                            <input type="number" id="property-guests" min="1" max="20" value="${this.propertyData.guests || 2}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Quartos *</label>
                            <input type="number" id="property-bedrooms" min="1" max="10" value="${this.propertyData.bedrooms || 1}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Banheiros *</label>
                            <input type="number" id="property-bathrooms" min="1" max="10" value="${this.propertyData.bathrooms || 1}"
                                   style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        </div>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 12px;">Comodidades</label>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                            ${[
                                {id: 'wifi', label: 'Wi-Fi', icon: 'fas fa-wifi'},
                                {id: 'kitchen', label: 'Cozinha', icon: 'fas fa-utensils'},
                                {id: 'ac', label: 'Ar-condicionado', icon: 'fas fa-snowflake'},
                                {id: 'parking', label: 'Estacionamento', icon: 'fas fa-parking'},
                                {id: 'pool', label: 'Piscina', icon: 'fas fa-swimming-pool'},
                                {id: 'pets', label: 'Pet-friendly', icon: 'fas fa-paw'}
                            ].map(amenity => `
                                <label style="display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px; cursor: pointer; transition: border-color 0.2s;">
                                    <input type="checkbox" name="amenities" value="${amenity.label}" id="${amenity.id}" 
                                           ${(this.propertyData.amenities || []).includes(amenity.label) ? 'checked' : ''}>
                                    <i class="${amenity.icon}" style="color: var(--brasil-verde);"></i>
                                    <span>${amenity.label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    createStep4() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Descrição</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Descreva sua propriedade para os hóspedes</p>

                <div>
                    <label style="display: block; font-weight: 500; margin-bottom: 6px;">Descrição da propriedade *</label>
                    <textarea id="property-description" rows="6" placeholder="Descreva sua propriedade, o que a torna especial, a localização, comodidades próximas..."
                              style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px; resize: vertical;">${this.propertyData.description || ''}</textarea>

                    <div style="margin-top: 24px; padding: 16px; background: var(--gray-50); border-radius: 12px;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--brasil-verde);">Resumo da Propriedade</h4>
                        <div id="property-summary" style="font-size: 14px; color: var(--gray-600);">
                            Complete todos os passos para ver o resumo
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    nextStep() {
        if (!this.validateCurrentStep()) return;

        this.saveCurrentStep();

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateContent();
        }
    },

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateContent();
        }
    },

    validateCurrentStep() {
        switch (this.currentStep) {
            case 1:
                const title = document.getElementById('property-title').value.trim();
                const type = document.getElementById('property-type').value;
                const price = document.getElementById('property-price').value;

                if (!title) {
                    Toast.show('❌ Preencha o título da propriedade', 'error');
                    return false;
                }
                if (!type) {
                    Toast.show('❌ Selecione o tipo de propriedade', 'error');
                    return false;
                }
                if (!price || price <= 0) {
                    Toast.show('❌ Informe um preço válido', 'error');
                    return false;
                }
                break;

            case 2:
                const cep = document.getElementById('property-cep').value.trim();
                const address = document.getElementById('property-address').value.trim();
                const neighborhood = document.getElementById('property-neighborhood').value.trim();
                const city = document.getElementById('property-city').value.trim();

                if (!cep || cep.replace(/\D/g, '').length !== 8) {
                    Toast.show('❌ Informe um CEP válido', 'error');
                    return false;
                }
                if (!address) {
                    Toast.show('❌ Preencha o endereço', 'error');
                    return false;
                }
                if (!neighborhood) {
                    Toast.show('❌ Preencha o bairro', 'error');
                    return false;
                }
                if (!city) {
                    Toast.show('❌ Preencha a cidade', 'error');
                    return false;
                }
                break;

            case 3:
                const guests = document.getElementById('property-guests').value;
                const bedrooms = document.getElementById('property-bedrooms').value;
                const bathrooms = document.getElementById('property-bathrooms').value;

                if (!guests || guests < 1) {
                    Toast.show('❌ Informe a quantidade de hóspedes', 'error');
                    return false;
                }
                if (!bedrooms || bedrooms < 1) {
                    Toast.show('❌ Informe a quantidade de quartos', 'error');
                    return false;
                }
                if (!bathrooms || bathrooms < 1) {
                    Toast.show('❌ Informe a quantidade de banheiros', 'error');
                    return false;
                }
                break;

            case 4:
                const description = document.getElementById('property-description').value.trim();
                if (!description || description.length < 20) {
                    Toast.show('❌ Escreva uma descrição mais completa (mínimo 20 caracteres)', 'error');
                    return false;
                }
                break;
        }

        return true;
    },

    saveCurrentStep() {
        switch (this.currentStep) {
            case 1:
                this.propertyData.title = document.getElementById('property-title').value.trim();
                this.propertyData.type = document.getElementById('property-type').value;
                this.propertyData.price = parseInt(document.getElementById('property-price').value);
                break;

            case 2:
                this.propertyData.cep = document.getElementById('property-cep').value.trim();
                this.propertyData.address = document.getElementById('property-address').value.trim();
                this.propertyData.neighborhood = document.getElementById('property-neighborhood').value.trim();
                this.propertyData.city = document.getElementById('property-city').value.trim();
                break;

            case 3:
                this.propertyData.guests = parseInt(document.getElementById('property-guests').value);
                this.propertyData.bedrooms = parseInt(document.getElementById('property-bedrooms').value);
                this.propertyData.bathrooms = parseInt(document.getElementById('property-bathrooms').value);
                this.propertyData.amenities = Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(cb => cb.value);
                break;

            case 4:
                this.propertyData.description = document.getElementById('property-description').value.trim();
                break;
        }
    },

    updateContent() {
        const content = document.getElementById('host-modal-content');
        content.innerHTML = this.createStepContent();
        this.setupListeners();

        if (this.currentStep === 4) {
            this.updatePropertySummary();
        }
    },

    updatePropertySummary() {
        const summary = document.getElementById('property-summary');
        if (!summary) return;

        summary.innerHTML = `
            <strong>${this.propertyData.title || 'Título não definido'}</strong><br>
            ${this.propertyData.type || 'Tipo não definido'} • ${Utils.formatCurrency(this.propertyData.price || 0)}/noite<br>
            ${this.propertyData.address || 'Endereço não definido'}, ${this.propertyData.neighborhood || 'Bairro não definido'}<br>
            ${this.propertyData.city || 'Cidade não definida'}<br>
            ${this.propertyData.guests || 0} hóspedes • ${this.propertyData.bedrooms || 0} quartos • ${this.propertyData.bathrooms || 0} banheiros<br>
            Comodidades: ${(this.propertyData.amenities || []).join(', ') || 'Nenhuma selecionada'}
        `;
    },

    setupListeners() {
        const closeBtn = document.getElementById('host-modal-close');
        closeBtn?.addEventListener('click', () => {
            this.hide();
        });

        // Setup CEP autocomplete
        const cepInput = document.getElementById('property-cep');
        if (cepInput) {
            cepInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 5) {
                    value = value.replace(/(\d{5})(\d)/, '$1-$2');
                }
                e.target.value = value;

                if (value.length === 9) {
                    this.fetchCEP(value.replace('-', ''));
                }
            });
        }

        // Update summary on step 4
        if (this.currentStep === 4) {
            const descriptionInput = document.getElementById('property-description');
            descriptionInput?.addEventListener('input', () => {
                this.propertyData.description = descriptionInput.value.trim();
            });
        }
    },

    async fetchCEP(cep) {
        try {
            Loading.show();
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                Toast.show('❌ CEP não encontrado', 'error');
                return;
            }

            document.getElementById('property-address').value = data.logradouro || '';
            document.getElementById('property-neighborhood').value = data.bairro || '';
            document.getElementById('property-city').value = `${data.localidade} - ${data.uf}` || '';

            Toast.show('✅ Endereço preenchido automaticamente!', 'success');
        } catch (error) {
            Toast.show('❌ Erro ao buscar CEP', 'error');
        } finally {
            Loading.hide();
        }
    },

    submitProperty() {
        if (!this.validateCurrentStep()) return;

        this.saveCurrentStep();

        Loading.show();

        // Simular criação da propriedade
        setTimeout(() => {
            const newProperty = {
                id: Date.now(),
                ...this.propertyData,
                location: this.propertyData.city,
                rating: (4.5 + Math.random() * 0.5).toFixed(2),
                reviews: Math.floor(Math.random() * 50) + 1,
                host: "Você",
                images: [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500&h=400&fit=crop&q=80"
                ],
                isNew: true
            };

            // Adicionar à lista de propriedades
            APP_DATA.properties.unshift(newProperty);

            // Salvar no localStorage
            const localProperties = JSON.parse(localStorage.getItem('casago_properties') || '[]');
            localProperties.unshift(newProperty);
            localStorage.setItem('casago_properties', JSON.stringify(localProperties));

            // Re-renderizar propriedades
            PropertiesRenderer.render();

            Loading.hide();
            Toast.show('🎉 Propriedade publicada com sucesso!', 'success');

            this.hide();

            // Scroll para a nova propriedade
            setTimeout(() => {
                const newCard = document.querySelector(`[data-property-id="${newProperty.id}"]`);
                if (newCard) {
                    newCard.style.border = '2px solid var(--brasil-verde)';
                    newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    setTimeout(() => {
                        newCard.style.border = '';
                    }, 3000);
                }
            }, 100);
        }, 2000);
    },

    hide() {
        const modal = document.getElementById('host-modal');
        modal?.classList.remove('active');

        // Reset
        this.currentStep = 1;
        this.propertyData = {};
    }
};

// ============================================================================
// BUSCA E FILTROS
// ============================================================================

const SearchManager = {
    init() {
        const searchButton = document.getElementById('search-button');
        const whereInput = document.getElementById('where-input');

        searchButton?.addEventListener('click', () => {
            this.performSearch();
        });

        whereInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Categoria filters
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.filterByCategory(category);
            });
        });
    },

    performSearch() {
        const city = APP_DATA.state.selectedCity || document.getElementById('where-input')?.value || '';
        const checkin = APP_DATA.state.checkinDate;
        const checkout = APP_DATA.state.checkoutDate;

        let filteredProperties = [...APP_DATA.properties];

        // Filtrar por cidade
        if (city) {
            const searchTerm = city.toLowerCase();
            filteredProperties = filteredProperties.filter(property => 
                property.location.toLowerCase().includes(searchTerm) ||
                Utils.removeAccents(property.location.toLowerCase()).includes(Utils.removeAccents(searchTerm))
            );
        }

        // Validar datas
        if (checkin && checkout) {
            const validation = Utils.validateDates(checkin, checkout);
            if (!validation.valid) {
                Toast.show(validation.error, 'error');
                return;
            }
        }

        APP_DATA.state.filteredProperties = filteredProperties;
        PropertiesRenderer.render(filteredProperties);

        // Feedback
        if (filteredProperties.length === 0 && city) {
            Toast.show(`🔍 Nenhuma propriedade encontrada em ${city}`, 'warning');
        } else if (city) {
            Toast.show(`✅ ${filteredProperties.length} propriedade(s) encontrada(s)!`);
        }

        // Scroll para resultados
        const propertiesSection = document.querySelector('.properties-section');
        if (propertiesSection && (city || (checkin && checkout))) {
            propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    filterByCategory(category) {
        // Implementar filtros por categoria no futuro
        Toast.show(`🔍 Buscando propriedades de ${category}...`, 'info');
    }
};

// ============================================================================
// CARREGAMENTO DE PROPRIEDADES LOCAIS
// ============================================================================

const LocalStorage = {
    loadProperties() {
        const localProperties = JSON.parse(localStorage.getItem('casago_properties') || '[]');

        localProperties.forEach(property => {
            const exists = APP_DATA.properties.find(p => p.id === property.id);
            if (!exists) {
                APP_DATA.properties.unshift(property);
            }
        });
    }
};

// ============================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================================================

class CasaGoApp {
    constructor() {
        this.init();
    }

    async init() {
        console.log('🇧🇷 Inicializando CasaGo - Versão Completa Funcional');

        try {
            // Carregar propriedades locais
            LocalStorage.loadProperties();

            // Inicializar componentes
            CityAutocomplete.init();
            DateManager.init();
            GuestsManager.init();
            SearchManager.init();

            // Renderizar propriedades
            PropertiesRenderer.render();

            // Setup modais
            this.setupModals();

            // Setup host button
            this.setupHostButton();

            console.log('✅ CasaGo inicializado com sucesso!');
            Toast.show('🎉 CasaGo carregado! Tudo funcionando 100%', 'success');

        } catch (error) {
            console.error('❌ Erro na inicialização:', error);
            Toast.show('❌ Erro ao carregar aplicação', 'error');
        }
    }

    setupModals() {
        // Fechar modais ao clicar no overlay
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // Fechar modais com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
        });
    }

    setupHostButton() {
        const hostButton = document.getElementById('host-button');
        hostButton?.addEventListener('click', () => {
            HostModal.show();
        });
    }
}

// ============================================================================
// INICIALIZAR APLICAÇÃO
// ============================================================================

// Aguardar DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CasaGoApp();
    });
} else {
    new CasaGoApp();
}

// ============================================================================
// EXPOR FUNÇÕES GLOBAIS
// ============================================================================

// Expor para uso em onclick nos templates
window.PropertyModal = PropertyModal;
window.BookingModal = BookingModal;
window.PaymentModal = PaymentModal;
window.HostModal = HostModal;
window.Toast = Toast;