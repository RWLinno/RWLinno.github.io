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
    
    // Handle email text reversal for spam protection
    $('.email-text').each(function() {
        var email = $(this).text();
        $(this).text(email.split('').reverse().join(''));
        
        // Make it clickable
        $(this).parent().css('cursor', 'pointer').on('click', function() {
            window.location.href = 'mailto:' + email.split('').reverse().join('');
        });
    });
}); 