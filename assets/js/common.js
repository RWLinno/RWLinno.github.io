$(document).ready(function() {
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Initialize lazy loading for images
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('Error loading ' + element.data('src'));
        }
    });
    
});

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

    const initialLanguage = document.documentElement.lang.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    applyLanguage(initialLanguage, false);
    window.siteLanguage = { apply: applyLanguage, current: function () { return document.documentElement.lang; } };
})();
