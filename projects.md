---
layout: default
title: Projects
navbar_title: Projects
---

<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title mb-4">
                    <i class="fas fa-project-diagram"></i> Projects
                </h4>
                
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> Some project information may be outdated. Please check my <a href="https://github.com/rwlinno" target="_blank">GitHub</a> for the most recent projects.
                </div>
                
                {% assign project_categories = site.data.projects | group_by: "category" %}
                {% for category in project_categories %}
                <h5 class="border-bottom pb-2 mb-4 mt-5">
                    <i class="fas {% if category.name == 'Research' %}fa-microscope{% elsif category.name == 'Data Science' %}fa-chart-line{% elsif category.name == 'Game Development' %}fa-gamepad{% else %}fa-code{% endif %}"></i> {{ category.name }} Projects
                </h5>
                
                {% for project in category.items %}
                <div class="row mb-5">
                    <div class="col-md-4">
                        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="img-fluid rounded shadow-sm">
                    </div>
                    <div class="col-md-8">
                        <h5>{{ project.title }}</h5>
                        <p class="text-muted mb-2"><i class="far fa-calendar-alt"></i> {{ project.status }}</p>
                        <p>{{ project.description }}</p>
                        <div class="mt-2 mb-3">
                            {% for tag in project.tags %}
                            <span class="badge badge-primary">{{ tag }}</span>
                            {% endfor %}
                        </div>
                        {% if project.link %}
                        <a href="{{ project.link }}" target="_blank" class="btn btn-sm btn-outline-primary">
                            <i class="fas {% if project.link contains 'github' %}fa-github{% elsif project.link contains 'pdf' %}fa-file-pdf{% elsif project.link contains 'steam' %}fa-steam{% else %}fa-external-link-alt{% endif %}"></i> 
                            {% if project.link_text %}{{ project.link_text }}{% else %}View Project{% endif %}
                        </a>
                        {% endif %}
                    </div>
                </div>
                {% endfor %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>
