(function () {
    var navHost = document.querySelector('[data-site-nav]');
    if (!navHost) {
        return;
    }

    navHost.innerHTML = [
        '<nav class="navbar navbar-expand-lg fixed-top">',
        '  <div class="container-fluid">',
        '    <a class="navbar-brand" href="index.html">Madhya Pradesh Tourism</a>',
        '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">',
        '      <span class="navbar-toggler-icon"></span>',
        '    </button>',
        '    <div class="collapse navbar-collapse" id="siteNav">',
        '      <ul class="navbar-nav ms-auto">',
        '        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="facts.html">Facts</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="places.html">Places</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="festival.html">Festival</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="arts.html">Art</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>',
        '      </ul>',
        '    </div>',
        '  </div>',
        '</nav>'
    ].join('');

    var current = window.location.pathname.split('/').pop().toLowerCase();
    if (!current) {
        current = 'index.html';
    }

    var links = navHost.querySelectorAll('.nav-link');
    links.forEach(function (link) {
        var href = (link.getAttribute('href') || '').toLowerCase().split('?')[0].split('#')[0];
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        if (href === current || (current === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
})();
