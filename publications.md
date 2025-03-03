---
layout: default
title: Publications
navbar_title: Publications
---

<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title mb-4">
                    <i class="fas fa-book"></i> Publications
                </h4>
                
                <div class="mb-4">
                    <div class="btn-group" role="group" aria-label="Publication filters">
                        <button type="button" class="btn btn-outline-primary active" data-filter="all">All</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="Spatio-temporal">Spatio-temporal</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="Time Series">Time Series</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="Multimodal">Multimodal</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="Computer Vision">Computer Vision</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="Reinforcement Learning">Reinforcement Learning</button>
                    </div>
                </div>
                
                {% assign publications = site.publications | sort: "pub_date" | reverse %}
                {% for item in publications %}
                <div class="row mb-4 border-bottom pb-3 publication-item" 
                     data-categories="{{ item.categories | join: ',' }}">
                    {% if item.cover %}
                    <div class="col-md-3">
                        <img src="{{ item.cover | relative_url }}" alt="{{ item.title }}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-9">
                    {% else %}
                    <div class="col-md-12">
                    {% endif %}
                        <h5 class="mb-1">{{ item.title }}</h5>
                        <p class="mb-1 small">{% include widgets/author_list.html authors=item.authors %}</p>
                        <p class="mb-1 small"><i>{{ item.pub }}</i>. {{ item.pub_date }}</p>
                        <p class="mb-2 small text-muted">{{ item.abstract }}</p>
                        
                        <p class="small mb-0">
                            {% for link in item.links %}
                            {% if link[1].url %}
                            <a target="{{ link[1]['target'] }}" href="{{ link[1]['url'] }}" class="btn btn-sm btn-outline-primary mr-1">{{ link[0] }}</a>
                            {% else %}
                            <a target="_blank" href="{{ link[1] }}" class="btn btn-sm btn-outline-primary mr-1">{{ link[0] }}</a>
                            {% endif %}
                            {% endfor %}
                            
                            {% if item.categories %}
                            <span class="ml-2">
                                {% for category in item.categories %}
                                <span class="badge badge-light">{{ category }}</span>
                                {% endfor %}
                            </span>
                            {% endif %}
                        </p>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const publicationItems = document.querySelectorAll('.publication-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications
            publicationItems.forEach(item => {
                const categories = item.getAttribute('data-categories');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
</script> 