---
layout: default
title: Publications
navbar_title: Publications
---

<div class="row">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-book"></i> Publications
                </h4>
                
                {% assign publications = site.publications | sort: "pub_date" | reverse %}
                {% for item in publications %}
                <div class="row mb-4 border-bottom pb-3">
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
                        <p class="mb-1 small">{{item.pub_pre}}<i>{{ item.pub }}</i>{{ item.pub_post }} {{ item.pub_date }} {{ item.pub_last }}</p>
                        <p class="mb-2 small text-muted">{{ item.abstract }}</p>
                        
                        <p class="small mb-0">
                            {% for link in item.links %}
                            {% if link[1].url %}
                            <a target="{{ link[1]['target'] }}" href="{{ link[1]['url'] }}" class="btn btn-sm btn-outline-primary mr-1">{{ link[0] }}</a>
                            {% else %}
                            <a target="_blank" href="{{ link[1] }}" class="btn btn-sm btn-outline-primary mr-1">{{ link[0] }}</a>
                            {% endif %}
                            {% endfor %}
                        </p>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</div> 