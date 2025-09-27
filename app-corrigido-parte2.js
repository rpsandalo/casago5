
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
    }
};

// ============================================================================
// MODAL DE PAGAMENTO CORRIGIDO - PIX COM QR CODE REAL
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

    selectPix() {
        Loading.show();

        setTimeout(() => {
            Loading.hide();
            this.showPixPayment();
        }, 1000);
    },

    showPixPayment() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const nightTypes = Utils.calculateWeekendNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);

        let totalPrice = 0;
        if (nightTypes.weekdays > 0) {
            totalPrice += nightTypes.weekdays * property.price;
        }
        if (nightTypes.weekends > 0) {
            totalPrice += nightTypes.weekends * property.weekendPrice;
        }

        const serviceFee = totalPrice * 0.1;
        const total = (totalPrice + serviceFee).toFixed(2);

        // Gerar código PIX realista
        const pixCode = `00020126580014BR.GOV.BCB.PIX0136${Utils.generateId().substring(0, 32)}5204000053039865802BR5925CASAGO PAGAMENTOS LTDA6009SAO PAULO62070503***6304${Math.random().toString().substring(2, 6)}`;

        const content = document.getElementById('payment-modal-content');
        content.innerHTML = `
            <div style="max-width: 400px; margin: 0 auto; text-align: center;">
                <div style="background: var(--success); color: white; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <i class="fas fa-qrcode" style="font-size: 24px; margin-bottom: 8px;"></i>
                    <h4 style="margin-bottom: 4px;">Pagamento PIX</h4>
                    <div style="font-size: 24px; font-weight: 600;">${Utils.formatCurrency(parseFloat(total))}</div>
                </div>

                <div style="background: white; border: 2px solid var(--gray-200); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <div id="qr-code" style="margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                        ${Utils.generateQRCodeSVG(pixCode, 200)}
                    </div>
                    <p style="font-size: 14px; color: var(--gray-600); margin-bottom: 16px;">Escaneie o código QR com o app do seu banco</p>

                    <div style="background: var(--gray-50); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
                        <div style="font-size: 12px; color: var(--gray-600); margin-bottom: 4px;">Código PIX Copia e Cola:</div>
                        <div style="font-family: monospace; font-size: 10px; word-break: break-all; background: white; padding: 8px; border-radius: 4px; border: 1px solid var(--gray-200); max-height: 60px; overflow-y: auto;">${pixCode}</div>
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

                <button onclick="PaymentModal.simulateManualConfirmation()" 
                        style="width: 100%; background: var(--brasil-azul); color: white; border: none; border-radius: 8px; padding: 12px; font-weight: 600; cursor: pointer; margin-top: 16px; font-size: 14px;">
                    ⚡ Simular Confirmação (Para Teste)
                </button>
            </div>
        `;

        this.startPixTimer();
        // Remover confirmação automática - usuário deve simular manualmente
    },

    simulateManualConfirmation() {
        const statusElement = document.getElementById('pix-status');
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Pagamento confirmado!';
            statusElement.style.background = 'var(--success)';

            Toast.show('✅ Pagamento PIX confirmado!', 'success');

            setTimeout(() => {
                this.showPaymentSuccess();
            }, 1500);
        }
    },

    copyPixCode(code) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(code).then(() => {
                Toast.show('✅ Código PIX copiado!', 'success');
            }).catch(() => {
                Toast.show('❌ Erro ao copiar código', 'error');
            });
        } else {
            // Fallback para navegadores sem clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                Toast.show('✅ Código PIX copiado!', 'success');
            } catch (err) {
                Toast.show('❌ Erro ao copiar código', 'error');
            }
            document.body.removeChild(textArea);
        }
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

    showPixExpired() {
        const statusElement = document.getElementById('pix-status');
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-times-circle"></i> PIX expirado';
            statusElement.style.background = 'var(--error)';

            Toast.show('⏰ PIX expirado! Gere um novo código.', 'error');
        }
    },

    showPaymentSuccess() {
        const property = APP_DATA.state.currentBooking;
        const nights = Utils.calculateNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);
        const nightTypes = Utils.calculateWeekendNights(APP_DATA.state.checkinDate, APP_DATA.state.checkoutDate);

        let totalPrice = 0;
        if (nightTypes.weekdays > 0) {
            totalPrice += nightTypes.weekdays * property.price;
        }
        if (nightTypes.weekends > 0) {
            totalPrice += nightTypes.weekends * property.weekendPrice;
        }

        const serviceFee = totalPrice * 0.1;
        const total = (totalPrice + serviceFee).toFixed(2);
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
                        ${nightTypes.weekdays > 0 ? `
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Noites (Semana):</span>
                            <span>${nightTypes.weekdays}x ${Utils.formatCurrency(property.price)}</span>
                        </div>
                        ` : ''}
                        ${nightTypes.weekends > 0 ? `
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--gray-600);">Noites (Fim de Semana):</span>
                            <span>${nightTypes.weekends}x ${Utils.formatCurrency(property.weekendPrice)}</span>
                        </div>
                        ` : ''}
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

    downloadVoucher() {
        Toast.show('📱 Em breve: Download de voucher via WhatsApp', 'info');
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
// MODAL DE HOST CORRIGIDO - COM TODAS AS FUNCIONALIDADES
// ============================================================================

const HostModal = {
    currentStep: 1,
    totalSteps: 6, // Aumentado para incluir fotos e preços
    propertyData: {},
    uploadedPhotos: [],

    show() {
        const modal = document.getElementById('host-modal');
        const content = document.getElementById('host-modal-content');

        this.currentStep = 1;
        this.propertyData = {};
        this.uploadedPhotos = [];

        content.innerHTML = this.createStepContent();
        modal.classList.add('active');

        this.setupListeners();
    },

    createStepContent() {
        const steps = [
            this.createStep1(), // Informações básicas
            this.createStep2(), // Localização com CEP
            this.createStep3(), // Detalhes da propriedade
            this.createStep4(), // Comodidades completas
            this.createStep5(), // Upload de fotos
            this.createStep6()  // Preços e descrição
        ];

        return `
            <div style="max-width: 700px; margin: 0 auto;">
                <div style="display: flex; justify-content: center; margin-bottom: 32px;">
                    ${Array.from({length: this.totalSteps}, (_, i) => `
                        <div style="display: flex; align-items: center;">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${i + 1 <= this.currentStep ? 'var(--brasil-verde)' : 'var(--gray-300)'}; color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">
                                ${i + 1}
                            </div>
                            ${i < this.totalSteps - 1 ? `<div style="width: 30px; height: 2px; background: ${i + 1 < this.currentStep ? 'var(--brasil-verde)' : 'var(--gray-300)'};"></div>` : ''}
                        </div>
                    `).join('')}
                </div>

                ${steps[this.currentStep - 1]}

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

    createStep5() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Fotos da propriedade</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Adicione pelo menos 5 fotos de alta qualidade</p>

                <div id="photo-upload-area" 
                     style="border: 2px dashed var(--gray-300); border-radius: 12px; padding: 40px; text-align: center; cursor: pointer; transition: all 0.2s;"
                     onclick="document.getElementById('photo-input').click()"
                     ondragover="HostModal.handleDragOver(event)"
                     ondrop="HostModal.handleDrop(event)">
                    <i class="fas fa-camera" style="font-size: 48px; color: var(--gray-400); margin-bottom: 16px;"></i>
                    <h4 style="font-weight: 600; margin-bottom: 8px;">Adicionar fotos</h4>
                    <p style="color: var(--gray-600); margin-bottom: 8px;">Clique para selecionar ou arraste as fotos aqui</p>
                    <small style="color: var(--gray-500);">JPG, PNG até 5MB cada • Mínimo 5 fotos</small>

                    <input type="file" id="photo-input" accept="image/*" multiple style="display: none;" 
                           onchange="HostModal.handleFileSelect(event)">
                </div>

                <div id="photos-preview" style="margin-top: 24px;">
                    ${this.uploadedPhotos.length > 0 ? `
                        <h5 style="font-weight: 600; margin-bottom: 12px;">Fotos selecionadas (${this.uploadedPhotos.length})</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px;">
                            ${this.uploadedPhotos.map((photo, index) => `
                                <div style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; border: 2px solid var(--gray-200);">
                                    <img src="${photo.url}" alt="Foto ${index + 1}" 
                                         style="width: 100%; height: 100%; object-fit: cover;">
                                    <button onclick="HostModal.removePhoto(${index})"
                                            style="position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-times" style="font-size: 10px;"></i>
                                    </button>
                                    ${index === 0 ? '<div style="position: absolute; bottom: 4px; left: 4px; background: var(--brasil-verde); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;">CAPA</div>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    ` : '<p style="color: var(--gray-500); text-align: center; padding: 20px;">Nenhuma foto selecionada</p>'}
                </div>
            </div>
        `;
    },

    handleFileSelect(event) {
        const files = Array.from(event.target.files);
        this.processFiles(files);
    },

    handleDragOver(event) {
        event.preventDefault();
        const uploadArea = document.getElementById('photo-upload-area');
        uploadArea.style.borderColor = 'var(--brasil-verde)';
        uploadArea.style.background = 'rgba(0, 150, 57, 0.05)';
    },

    handleDrop(event) {
        event.preventDefault();
        const uploadArea = document.getElementById('photo-upload-area');
        uploadArea.style.borderColor = 'var(--gray-300)';
        uploadArea.style.background = 'transparent';

        const files = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'));
        this.processFiles(files);
    },

    processFiles(files) {
        files.forEach(file => {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                Toast.show(`Arquivo ${file.name} muito grande (máximo 5MB)`, 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedPhotos.push({
                    file: file,
                    url: e.target.result,
                    name: file.name
                });
                this.updatePhotosPreview();
            };
            reader.readAsDataURL(file);
        });
    },

    removePhoto(index) {
        this.uploadedPhotos.splice(index, 1);
        this.updatePhotosPreview();
    },

    updatePhotosPreview() {
        const content = document.getElementById('host-modal-content');
        content.innerHTML = this.createStepContent();
        this.setupListeners();
    },

    createStep6() {
        return `
            <div>
                <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Preços e descrição</h3>
                <p style="color: var(--gray-600); margin-bottom: 24px;">Defina seus preços e descreva sua propriedade</p>

                <div style="display: grid; gap: 20px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Preço por noite (Segunda à Quinta) *</label>
                            <div style="position: relative;">
                                <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--gray-600);">R$</span>
                                <input type="number" id="property-price" placeholder="280" min="1" value="${this.propertyData.price || ''}"
                                       style="width: 100%; padding: 12px 12px 12px 35px; border: 1px solid var(--gray-300); border-radius: 8px;">
                            </div>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px;">Preço fim de semana (Sexta e Sábado) *</label>
                            <div style="position: relative;">
                                <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--gray-600);">R$</span>
                                <input type="number" id="property-weekend-price" placeholder="350" min="1" value="${this.propertyData.weekendPrice || ''}"
                                       style="width: 100%; padding: 12px 12px 12px 35px; border: 1px solid var(--gray-300); border-radius: 8px;">
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Título da propriedade *</label>
                        <input type="text" id="property-title-final" placeholder="Ex: Apartamento aconchegante em Copacabana" value="${this.propertyData.title || ''}"
                               style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px;">
                        <small style="color: var(--gray-500);">Máximo 60 caracteres</small>
                    </div>

                    <div>
                        <label style="display: block; font-weight: 500; margin-bottom: 6px;">Descrição da propriedade *</label>
                        <textarea id="property-description" rows="6" placeholder="Descreva sua propriedade, o que a torna especial, a localização, comodidades próximas..."
                                  style="width: 100%; padding: 12px; border: 1px solid var(--gray-300); border-radius: 8px; resize: vertical;">${this.propertyData.description || ''}</textarea>
                        <small style="color: var(--gray-500);">Mínimo 100 caracteres</small>
                    </div>

                    <div style="background: var(--gray-50); border-radius: 12px; padding: 20px;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--brasil-verde);">
                            <i class="fas fa-calculator"></i> Simulação de Ganhos
                        </h4>
                        <div id="earnings-simulation" style="font-size: 14px; color: var(--gray-600);">
                            ${this.calculateEarnings()}
                        </div>
                    </div>

                    <div style="background: var(--info); color: white; border-radius: 12px; padding: 20px;">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                            <i class="fas fa-info-circle"></i> Resumo da Propriedade
                        </h4>
                        <div id="property-summary" style="font-size: 14px; line-height: 1.6;">
                            ${this.generatePropertySummary()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    calculateEarnings() {
        const price = parseInt(document.getElementById('property-price')?.value || this.propertyData.price || 0);
        const weekendPrice = parseInt(document.getElementById('property-weekend-price')?.value || this.propertyData.weekendPrice || 0);

        if (price === 0 || weekendPrice === 0) {
            return 'Preencha os preços para ver a simulação de ganhos';
        }

        const monthlyWeekdays = 20; // Aproximadamente 20 dias úteis por mês
        const monthlyWeekends = 8; // Aproximadamente 8 finais de semana por mês

        const occupancyRate = 0.7; // 70% de ocupação média

        const monthlyRevenue = (monthlyWeekdays * price + monthlyWeekends * weekendPrice) * occupancyRate;
        const casagoFee = monthlyRevenue * 0.15; // Taxa CasaGo 15%
        const netRevenue = monthlyRevenue - casagoFee;

        return `
            <div style="display: grid; gap: 8px;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Receita bruta mensal (70% ocupação):</span>
                    <strong>${Utils.formatCurrency(monthlyRevenue)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Taxa CasaGo (15%):</span>
                    <span>- ${Utils.formatCurrency(casagoFee)}</span>
                </div>
                <hr style="border-color: rgba(255,255,255,0.3);">
                <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--success);">
                    <span>Receita líquida mensal:</span>
                    <strong>${Utils.formatCurrency(netRevenue)}</strong>
                </div>
            </div>
        `;
    },

    generatePropertySummary() {
        const photos = this.uploadedPhotos.length;

        return `
            <strong>${this.propertyData.title || 'Título não definido'}</strong><br>
            ${this.propertyData.type || 'Tipo não definido'}<br>
            ${this.propertyData.address || 'Endereço não definido'}, ${this.propertyData.neighborhood || ''}<br>
            ${this.propertyData.city || 'Cidade não definida'}<br>
            ${this.propertyData.guests || 0} hóspedes • ${this.propertyData.bedrooms || 0} quartos • ${this.propertyData.bathrooms || 0} banheiros<br>
            ${(this.propertyData.amenities || []).length} comodidades selecionadas<br>
            ${photos} foto${photos !== 1 ? 's' : ''} carregada${photos !== 1 ? 's' : ''}<br>
            Preços: ${Utils.formatCurrency(this.propertyData.price || 0)}/noite (semana) • ${Utils.formatCurrency(this.propertyData.weekendPrice || 0)}/noite (fim de semana)
        `;
    },

    hide() {
        const modal = document.getElementById('host-modal');
        modal?.classList.remove('active');

        // Reset
        this.currentStep = 1;
        this.propertyData = {};
        this.uploadedPhotos = [];
    }
};

// ============================================================================
// EXPOR FUNÇÕES GLOBAIS
// ============================================================================

// Expor para uso em onclick nos templates
window.PropertyModal = PropertyModal;
window.BookingModal = BookingModal;
window.PaymentModal = PaymentModal;
window.HostModal = HostModal;
window.AuthManager = AuthManager;
window.ProfileMenu = ProfileMenu;
window.Toast = Toast;

console.log("✅ CasaGo App.js CORRIGIDO - PARTE 2 carregado com sucesso!");
