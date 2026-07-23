---
layout: default
title: Research
navbar_title: Research
i18n_title: research.page_title
permalink: /research/
---
{% assign service_count = site.data.services.program_committee.size | plus: site.data.services.reviewer.size %}

<header class="research-hero mb-4">
    <div class="research-hero-copy">
        <p class="research-eyebrow" data-i18n="research.eyebrow">Research profile</p>
        <h1 data-i18n="research.heading">Research, publications &amp; service</h1>
        <p class="research-intro" data-i18n="research.intro">My work centers on spatio-temporal intelligence, time-series forecasting, and multimodal learning, with a growing focus on embodied foundation models and AI infrastructure.</p>
    </div>
    <div class="research-signal" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
    <dl class="research-metrics mb-0">
        <div>
            <dt>{{ site.publications.size }}</dt>
            <dd data-i18n="research.publication_records">Publication records</dd>
        </div>
        <div>
            <dt>{{ service_count }}</dt>
            <dd data-i18n="research.service_venues">Service venues</dd>
        </div>
        <div>
            <dt>5</dt>
            <dd data-i18n="research.research_tracks">Research tracks</dd>
        </div>
    </dl>
</header>

<section id="publications" class="card border-0 shadow-sm bg-white research-section" aria-labelledby="publications-heading">
    <div class="card-body">
        <div class="section-heading-row">
            <div>
                <p class="section-kicker" data-i18n="research.output_label">Selected research output</p>
                <h2 id="publications-heading" class="h4 mb-1"><i class="fas fa-book"></i> <span data-i18n="research.publications">Publications</span></h2>
                <p class="text-muted mb-0" data-i18n="research.publication_intro">Peer-reviewed papers and selected preprints, with first-author and featured work prioritized.</p>
            </div>
        </div>

        <div class="publication-filters mt-4 mb-4" role="group" aria-label="Filter publications by research area" data-i18n-aria-label="research.filter_label">
            <button type="button" class="btn btn-outline-primary active" data-filter="all" aria-pressed="true" data-i18n="research.all">All</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Spatio-temporal" aria-pressed="false" data-i18n="research.spatio_temporal">Spatio-temporal</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Time Series" aria-pressed="false" data-i18n="research.time_series">Time Series</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Multimodal" aria-pressed="false" data-i18n="research.multimodal">Multimodal</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Multi-Agent Systems" aria-pressed="false" data-i18n="research.multi_agent">Multi-Agent Systems</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Computer Vision" aria-pressed="false" data-i18n="research.computer_vision">Computer Vision</button>
            <button type="button" class="btn btn-outline-primary" data-filter="Reinforcement Learning" aria-pressed="false" data-i18n="research.reinforcement_learning">Reinforcement Learning</button>
        </div>

        {% assign pinned_publications = site.publications | where: "pinned", true | sort: "pub_date" | reverse %}
        {% assign other_publications = site.publications | where_exp: "item", "item.pinned != true" | sort: "pub_date" | reverse %}
        {% assign all_publications = pinned_publications | concat: other_publications %}
        <div id="publication-list">
            {% for item in all_publications %}
            <article class="row mb-4 border-bottom pb-4 publication-item publication-row" data-categories="{{ item.categories | join: '|' }}">
                {% if item.cover %}
                <div class="col-md-3 mb-3 mb-md-0">
                    <img src="{{ item.cover | relative_url }}" alt="Cover image for {{ item.title }}" class="img-fluid rounded publication-cover" loading="lazy">
                </div>
                <div class="col-md-9">
                {% else %}
                <div class="col-md-12">
                {% endif %}
                    <h3 class="h5 mb-1 publication-title">
                        {{ item.title }}
                        {% if item.pinned %}<span class="badge badge-warning ml-2" data-i18n="publication.pinned">Pinned</span>{% endif %}
                        {% if item.status %}<span class="badge badge-info ml-2"{% if item.status == "Under Review" %} data-i18n="publication.under_review"{% endif %}>{{ item.status }}</span>{% endif %}
                        {% if item.selected %}<span class="badge badge-success ml-2" data-i18n="publication.featured">Featured</span>{% endif %}
                        {% if item.oral %}<span class="badge badge-info ml-2" data-i18n="publication.oral">Oral</span>{% elsif item.spotlight %}<span class="badge badge-primary ml-2" data-i18n="publication.spotlight">Spotlight</span>{% endif %}
                    </h3>
                    <p class="mb-1 small publication-authors">{% include widgets/author_list.html authors=item.authors %}</p>
                    <p class="mb-1 small publication-venue"><i>{{ item.pub }}</i> · {{ item.pub_date }}</p>
                    <p class="mb-2 small text-muted publication-abstract">{{ item.abstract }}</p>
                    <div class="small publication-links">
                        {% for link in item.links %}
                        {% if link[1].url and link[1].url != "" %}
                        <a target="{{ link[1]['target'] | default: '_blank' }}" rel="noopener noreferrer" href="{{ link[1]['url'] }}" class="btn btn-sm btn-outline-primary mr-1 mb-1">
                            {% if link[0] == "Paper" %}<span data-i18n="publication.paper">Paper</span>{% elsif link[0] == "Code" %}<span data-i18n="publication.code">Code</span>{% else %}{{ link[0] }}{% endif %}
                        </a>
                        {% endif %}
                        {% endfor %}

                        {% assign pub_filename = item.slug %}
                        {% assign slide_path = "/publications/slides/" | append: pub_filename | append: ".pdf" %}
                        {% assign poster_path = "/publications/posters/" | append: pub_filename | append: ".pdf" %}
                        {% assign slide_found = false %}
                        {% assign poster_found = false %}
                        {% for static_file in site.static_files %}
                            {% if static_file.path == slide_path %}{% assign slide_found = true %}{% endif %}
                            {% if static_file.path == poster_path %}{% assign poster_found = true %}{% endif %}
                        {% endfor %}
                        {% if slide_found %}<a target="_blank" rel="noopener noreferrer" href="{{ slide_path | relative_url }}" class="btn btn-sm btn-outline-success mr-1 mb-1" data-i18n="publication.slides">Slides</a>{% endif %}
                        {% if poster_found %}<a target="_blank" rel="noopener noreferrer" href="{{ poster_path | relative_url }}" class="btn btn-sm btn-outline-info mr-1 mb-1" data-i18n="publication.poster">Poster</a>{% endif %}

                        {% if item.categories %}
                        <span class="publication-categories ml-md-2">
                            {% for category in item.categories %}<span class="badge badge-light">{{ category }}</span>{% endfor %}
                        </span>
                        {% endif %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
        <p id="publication-empty" class="publication-empty text-muted" hidden data-i18n="research.no_results">No publications match this research area.</p>
    </div>
</section>

<section id="academic-service" class="card border-0 shadow-sm bg-white research-section mt-4" aria-labelledby="service-heading">
    <div class="card-body">
        <div class="section-heading-row">
            <div>
                <p class="section-kicker" data-i18n="research.community_label">Research community</p>
                <h2 id="service-heading" class="h4 mb-1"><i class="fas fa-people-group"></i> <span data-i18n="research.academic_service">Academic Service</span></h2>
                <p class="text-muted mb-0" data-i18n="research.service_intro">Selected reviewing and program committee activities for international conferences and workshops.</p>
            </div>
        </div>

        <div class="row mt-4 service-grid">
            <div class="col-lg-5 mb-3 mb-lg-0">
                <div class="service-card h-100">
                    <div class="service-card-icon"><i class="fas fa-users-gear" aria-hidden="true"></i></div>
                    <h3 class="h5" data-i18n="research.program_committee">Program Committee</h3>
                    <ul class="service-list">
                        {% for item in site.data.services.program_committee %}
                        <li><strong>{{ item.venue }}</strong><span>{{ item.year }}</span></li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="service-card h-100">
                    <div class="service-card-icon"><i class="fas fa-pen-ruler" aria-hidden="true"></i></div>
                    <h3 class="h5" data-i18n="research.reviewer">Reviewer</h3>
                    <div class="service-venue-cloud">
                        {% for item in site.data.services.reviewer %}
                        <span><strong>{{ item.venue }}</strong>{% if item.year %} {{ item.year }}{% endif %}</span>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
        <p class="service-note mb-0 mt-3"><i class="fas fa-circle-info mr-1" aria-hidden="true"></i><span data-i18n="research.service_note">Venue names without a year follow the current CV record; years are shown only when confirmed elsewhere on this site.</span></p>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const publicationItems = document.querySelectorAll('.publication-item');
    const emptyState = document.getElementById('publication-empty');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const filterValue = button.getAttribute('data-filter');
            let visibleCount = 0;

            filterButtons.forEach(function (candidate) {
                const isActive = candidate === button;
                candidate.classList.toggle('active', isActive);
                candidate.setAttribute('aria-pressed', String(isActive));
            });

            publicationItems.forEach(function (item) {
                const categories = item.getAttribute('data-categories').split('|');
                const isVisible = filterValue === 'all' || categories.indexOf(filterValue) !== -1;
                item.hidden = !isVisible;
                if (isVisible) visibleCount += 1;
            });

            emptyState.hidden = visibleCount !== 0;
        });
    });
});
</script>
