(() => {
    // =========================================================================
    // 1. INYECCIÓN DE FUENTES CORPORATIVAS Y ESTILOS CSS ULTRA PREMIUM
    // =========================================================================
    
    // Importar fuentes tipográficas de alta gama (Cinzel para títulos y Inter para lectura)
    const fontImport = document.createElement("style");
    fontImport.textContent = `@import url('https://googleapis.com');`;
    document.head.appendChild(fontImport);

    const styleElement = document.createElement("style");
    styleElement.textContent = `
        :root {
            --gold-primary: #C5A059;     /* Oro Satinado */
            --gold-dark: #A37F3E;        /* Oro Obscuro */
            --green-corporate: #042E1F;  /* Verde Esmeralda Institucional */
            --bg-dark: #0D0F12;          /* Negro Corporativo Profundo */
            --bg-card: #15191E;          /* Gris de Contraste Obscuro */
            --text-light: #F3F4F6;       /* Blanco Hueso */
            --text-muted: #9CA3AF;      /* Gris Atenuado */
            --font-title: 'Cinzel', serif;
            --font-body: 'Inter', sans-serif;
            --transition-smooth: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* --- HEADER CORPORATIVO (GLASSMORPHISM) --- */
        #site-header {
            background: rgba(13, 15, 18, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(197, 160, 89, 0.2);
            position: sticky;
            top: 0;
            z-index: 1000;
            width: 100%;
        }
        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 10px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
    flex-wrap: wrap;
        }
        
        /* Logo de Alta Gama */
        .corporate-logo {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            letter-spacing: 3px;
        }
        .logo-top {
            font-family: var(--font-title);
            color: var(--text-light);
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1;
        }
        .logo-top span { color: var(--gold-primary); }
        .logo-bottom {
            font-size: 0.65rem;
            color: var(--text-muted);
            font-weight: 600;
            margin-top: 4px;
            border-top: 1px solid rgba(197, 160, 89, 0.3);
            padding-top: 2px;
        }

        /* Menú de Navegación */
        .nav-menu { display: flex; align-items: center; gap: 35px; }
        .nav-link {
            color: var(--text-light);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
            padding: 5px 0;
            transition: var(--transition-smooth);
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: var(--gold-primary);
            transition: var(--transition-smooth);
        }
        .nav-link:hover { color: var(--gold-primary); }
        .nav-link:hover::after { width: 100%; }
        
        /* Botón de Intranet / Contacto */
        .btn-header-action {
            border: 1px solid var(--gold-primary);
            color: var(--gold-primary);
            padding: 8px 20px;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            text-decoration: none;
            border-radius: 2px;
            transition: var(--transition-smooth);
        }
        .btn-header-action:hover {
            background-color: var(--gold-primary);
            color: var(--bg-dark);
            box-shadow: 0px 4px 20px rgba(197, 160, 89, 0.3);
        }

        /* Menú Hamburguesa Móvil */
        .menu-toggle { display: none; flex-direction: column; gap: 6px; cursor: pointer; }
        .menu-toggle span { width: 28px; height: 2px; background-color: var(--text-light); transition: var(--transition-smooth); }

        /* --- SECCIÓN PRINCIPAL (MAIN - HERO) --- */
        .main-content { flex: 1; display: flex; align-items: center; justify-content: center; padding: 100px 20px; position: relative; }
        .main-content::before {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            background: var(--green-corporate);
            filter: blur(150px);
            opacity: 0.4;
            top: 10%, left: 20%;
            z-index: -1;
        }
        .hero-premium { text-align: center; max-width: 900px; }
        .hero-tagline {
            font-size: 0.85rem;
            color: var(--gold-primary);
            letter-spacing: 4px;
            font-weight: 600;
            display: block;
            margin-bottom: 20px;
        }
        .hero-premium h1 {
            font-family: var(--font-title);
            font-size: 3.2rem;
            line-height: 1.2;
            font-weight: 500;
            margin-bottom: 25px;
            background: linear-gradient(180deg, #FFFFFF 30%, #A3A3A3 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-premium p { font-size: 1.15rem; color: var(--text-muted); line-height: 1.8; font-weight: 300; margin-bottom: 40px; }
        
        .hero-actions { display: flex; justify-content: center; gap: 20px; }
        .btn-primary-gold {
            background-color: var(--gold-primary);
            color: var(--bg-dark);
            padding: 15px 35px;
            font-size: 0.85rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-decoration: none;
            border-radius: 2px;
            transition: var(--transition-smooth);
        }
        .btn-primary-gold:hover { background-color: var(--gold-dark); transform: translateY(-3px); }
        .btn-secondary-white {
            border: 1px solid rgba(255,255,255,0.2);
            color: var(--text-light);
            padding: 15px 35px;
            font-size: 0.85rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-decoration: none;
            border-radius: 2px;
            transition: var(--transition-smooth);
        }
        .btn-secondary-white:hover { border-color: var(--text-light); background: rgba(255,255,255,0.05); transform: translateY(-3px); }

        /* --- FOOTER CORPORATIVO --- */
        #site-footer {
            background-color: var(--bg-card);
            color: var(--text-muted);
            padding-top: 80px;
            border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px 60px 40px;
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 50px;
        }
        .footer-brand h3 { font-family: var(--font-title); color: var(--text-light); font-size: 1.3rem; margin-bottom: 20px; letter-spacing: 2px; }
        .footer-brand p { font-size: 0.95rem; line-height: 1.7; max-width: 320px; }
        
        .footer-section h4 {
            font-family: var(--font-body);
            color: var(--text-light);
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 2px;
            margin-bottom: 25px;
            position: relative;
        }
        .footer-section h4::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 30px;
            height: 1px;
            background-color: var(--gold-primary);
        }
        .footer-section ul { list-style: none; }
        .footer-section ul li { margin-bottom: 12px; }
        .footer-section ul li a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; transition: var(--transition-smooth); }
        .footer-section ul li a:hover { color: var(--gold-primary); padding-left: 5px; }
        
        .contact-info p { font-size: 0.9rem; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
        .contact-info i { color: var(--gold-primary); font-size: 0.85rem; }

        .footer-bottom {
            background-color: var(--bg-dark);
            padding: 25px 40px;
            font-size: 0.8rem;
            border-top: 1px solid rgba(255,255,255,0.02);
        }
        .footer-bottom-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255,255,255,0.4);
        }
        .footer-socials { display: flex; gap: 20px; }
        .footer-socials a { color: rgba(255,255,255,0.4); font-size: 1.1rem; transition: var(--transition-smooth); }
        .footer-socials a:hover { color: var(--gold-primary); }

        /* --- DISEÑO RESPONSIVO (TABLETS Y MÓVILES) --- */
        @media (max-width: 1024px) {
            .footer-container { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }

              @media (max-width: 768px) {
            .menu-toggle { display: flex; }
            .header-container { padding: 15px 25px; }
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--bg-dark);
                flex-direction: column;
                align-items: flex-start;
                padding: 40px;
                gap: 25px;
                border-top: 1px solid rgba(197, 160, 89, 0.2);
                transform: translateY(-150%);
                opacity: 0;
                transition: transform 0.5s ease, opacity 0.5s ease;
                pointer-events: none;
                z-index: 999;
            }
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }
            .btn-header-action { width: 100%; text-align: center; margin-top: 10px; }
            .hero-premium h1 { font-size: 2.1rem; }
            .hero-actions { flex-direction: column; gap: 15px; }
            .footer-container { grid-template-columns: 1fr; padding: 0 25px 40px 25px; }
            .footer-bottom-container { flex-direction: column; gap: 15px; text-align: center; }
            
            /* Animación Icono Hamburguesa */
            .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
            .menu-toggle.open span:nth-child(2) { opacity: 0; }
            .menu-toggle.open span:nth-child(3) { transform: rotate(-44deg) translate(5px, -5px); }
        }
    `;
    document.head.appendChild(styleElement);

    // =========================================================================
    // 2. LOGICA INTERNA E INYECCIÓN DE COMPONENTES HTML
    // =========================================================================
    const renderLayout = () => {
        
        // Inyectar Estructura del Header
        const headerContainer = document.getElementById("site-header");
        if (headerContainer) {
            headerContainer.innerHTML = `
                <div class="header-container">
                    <a href="#inicio" class="corporate-logo">
                        <span class="logo-top">OIREPMI<span></span></span>
                        <span class="logo-bottom">MEXICANO</span>
                    </a>
                    <nav class="nav-menu" id="nav-menu">
                        <a href="/Cartelera" class="nav-link">Cartelera</a>
                        <a href="/Destinos" class="nav-link">Destinos</a>
                        <a href="/Noticias" class="nav-link">Noticias</a>
                        <a href="/Documentos" class="nav-link">Doc.</a>
                        <a href="/Pueblos_magicos" class="btn-header-action">Pueblos magicos</a>
                    </nav>
                    <div class="menu-toggle" id="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
        }

        // Inyectar Estructura del Footer
        const footerContainer = document.getElementById("site-footer");
        if (footerContainer) {
            const dynamicYear = new Date().getFullYear();
            footerContainer.innerHTML = `
                <div class="footer-container">
                    <div class="footer-brand">
                        <h3>IMPERIO<span>MEXICANO</span></h3>
                        <p>Conoce todos los lugares de la republica mexicana.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Explorar</h4>
                        <ul>
                            <li><a href="/Acerca_de">Acerca de nosotros</a></li>
                            <li><a href="/Contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Sostenibilidad</h4>
                        <ul>
                            <li><a href="/Privacidad_terminos">Privacidad de terminos</a></li>
                            <li><a href="/Aviso_privacidad">Aviso de Privacidad</a></li>
                            <li><a href="/Cookies">Cookies</a></li>

                        </ul>
                    </div>
                    <div class="footer-section contact-info">
                        <h4>Oficinas Centrales</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
  <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> México, Ciudad de México</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +52 (55) 51-57-01-60</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg> contacto@gieovannyfrias.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-container">
                        <p>&copy; ${dynamicYear} Oirepmi Mexicano. Todos los derechos reservados.</p>
                        <div class="footer-socials">
                            <a href="https://www.facebook.com/oirepmimexicano" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a>
 <a href="https://www.instagram.com/oirepmimexicano" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
                            <a href="https://x.com/oirepmimexicano" aria-label="Twitter / X"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a>
 <a href="https://www.tiktok.com/@oirepmimexicano" aria-label="Tiktok"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg></a>
 <a href="https://www.youtube.com/@oirepmimexicano" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
                        </div>
                    </div>
                </div>
            `;
        }

        // CONTROLADOR DE MENÚ RESPONSIVO INTERACTIVO
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        if (menuToggle && navMenu) {
            menuToggle.addEventListener("click", (e) => {
                e.stopPropagation();
                navMenu.classList.toggle("active");
                menuToggle.classList.toggle("open");
            });

            // Cerrar menú automáticamente al hacer clic en un enlace móvil
            document.querySelectorAll(".nav-link").forEach(link => {
                link.addEventListener("click", () => {
                    navMenu.classList.remove("active");
                    menuToggle.classList.remove("open");
                });
            });
        }
    };

    // Lanzar renderizado seguro sin importar el orden de carga del script
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderLayout);
    } else {
        renderLayout();
    }
})();

