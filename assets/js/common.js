(function () {
    const translationSource = document.getElementById('site-translations');
    if (!translationSource) return;

    let translations;
    try {
        translations = JSON.parse(translationSource.textContent);
    } catch (error) {
        return;
    }

    function lookup(language, key) {
        return key.split('.').reduce(function (value, segment) {
            return value && value[segment];
        }, translations[language]);
    }

    function currentLanguage() {
        return document.documentElement.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }

    function applyLanguage(language, persist) {
        const normalizedLanguage = language === 'zh' ? 'zh' : 'en';
        document.documentElement.lang = normalizedLanguage === 'zh' ? 'zh-CN' : 'en';

        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const value = lookup(normalizedLanguage, element.getAttribute('data-i18n'));
            if (typeof value === 'string') element.textContent = value;
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
            const value = lookup(normalizedLanguage, element.getAttribute('data-i18n-aria-label'));
            if (typeof value === 'string') element.setAttribute('aria-label', value);
        });

        document.querySelectorAll('[data-lang-content]').forEach(function (element) {
            const isVisible = element.getAttribute('data-lang-content') === normalizedLanguage;
            element.hidden = !isVisible;
            element.setAttribute('aria-hidden', String(!isVisible));
        });

        document.querySelectorAll('[data-language]').forEach(function (button) {
            const isActive = button.getAttribute('data-language') === normalizedLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        const titleKey = document.body.getAttribute('data-i18n-title');
        const translatedTitle = titleKey && lookup(normalizedLanguage, titleKey);
        if (translatedTitle) document.title = translatedTitle + ' - Weilin Ruan';

        if (persist !== false) {
            try {
                localStorage.setItem('rwlinno-language', normalizedLanguage);
            } catch (error) {
                // Language switching still works for the current page.
            }
        }

        document.dispatchEvent(new CustomEvent('site-language-change', {
            detail: { language: normalizedLanguage }
        }));
    }

    document.querySelectorAll('[data-language]').forEach(function (button) {
        button.addEventListener('click', function () {
            applyLanguage(button.getAttribute('data-language'));
        });
    });

    applyLanguage(currentLanguage(), false);
    window.siteLanguage = {
        apply: applyLanguage,
        current: currentLanguage,
        translate: function (key) { return lookup(currentLanguage(), key); }
    };
})();

(function () {
    const toggle = document.querySelector('[data-nav-toggle]');
    const menu = document.getElementById('navbarSupportedContent');
    if (!toggle || !menu) return;

    function setOpen(isOpen) {
        menu.classList.toggle('show', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    }

    toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (event) {
        if (event.target.closest('a') && window.innerWidth < 992) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });
})();

(function () {
    const lists = document.querySelectorAll('[data-collapsible-list]');

    lists.forEach(function (list) {
        const button = document.querySelector('[data-collapsible-toggle][aria-controls="' + list.id + '"]');
        const items = Array.from(list.querySelectorAll('[data-collapsible-item]'));
        const initialCount = Number.parseInt(list.getAttribute('data-initial-count'), 10);
        const stateParameter = list.getAttribute('data-state-param');
        if (!button || !Number.isFinite(initialCount) || items.length <= initialCount) return;

        const label = button.querySelector('[data-collapsible-label]');
        const icon = button.querySelector('i');
        const params = new URLSearchParams(window.location.search);
        let expanded = stateParameter && params.get(stateParameter) === 'expanded';

        function render() {
            items.forEach(function (item, index) {
                item.hidden = !expanded && index >= initialCount;
            });

            button.hidden = false;
            button.setAttribute('aria-expanded', String(expanded));
            const labelKey = button.getAttribute(expanded ? 'data-expanded-key' : 'data-collapsed-key');
            label.setAttribute('data-i18n', labelKey);
            label.textContent = window.siteLanguage.translate(labelKey);
            if (icon) {
                icon.classList.toggle('fa-chevron-down', !expanded);
                icon.classList.toggle('fa-chevron-up', expanded);
            }
        }

        function updateUrl() {
            if (!stateParameter) return;
            const url = new URL(window.location.href);
            if (expanded) url.searchParams.set(stateParameter, 'expanded');
            else url.searchParams.delete(stateParameter);
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        }

        button.addEventListener('click', function () {
            expanded = !expanded;
            render();
            updateUrl();
        });

        document.addEventListener('site-language-change', render);
        render();
    });
})();
