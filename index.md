---
layout: default
title: Homepage
navbar_title: Home
---
{% include widgets/profile_card.html %}

{% if site.data.display.homepage.show_education %}
<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-user-graduate"></i> Education
                </h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0">
                        <div class="d-flex align-items-center">
                            <img src="{{ '/images/hkust_logo.png' | relative_url }}" alt="HKUST(GZ) Logo" class="mr-3" style="height: 50px;">
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <strong>HKUST(GZ)</strong> - Information Hub - Data Science and Analysis
                                    </div>
                                    <div>
                                        <span class="badge badge-pill badge-secondary">Sep 2024 - June 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex align-items-center">
                            <img src="{{ '/images/jnu_logo.png' | relative_url }}" alt="Jinan University Logo" class="mr-3" style="height: 50px;">
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <strong>Jinan University</strong> - Computer Science Department - Network Engineering
                                    </div>
                                    <div>
                                        <span class="badge badge-pill badge-secondary">Sep 2020 - June 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
{% endif %}

{% if site.data.display.homepage.show_news %}
<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-newspaper"></i> Latest News
                </h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Program Committee Member</strong> - Invited to serve as a Program Committee member for AAAI 2026.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">July 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper accepted to ICCV 2025 Workshop.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">July 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper on Traffic Flow Forecasting accepted to IEEE TITS 2025.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">Aug 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper on Multimodal Building Electricity Loads Forecasting accepted to ACM MM 2025.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">July 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper on Urban Heat Island Effect Forecasting accepted to KDD 2025.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">May 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper on spatio-temporal forecasting accepted to ECML-PKDD 2025.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">May 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Paper Acceptance</strong> - Paper on Multimodal Time Series Forecasting accepted to ICML 2025.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">May 2025</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Reviewer Appointment</strong> - Appointed as a reviewer for IJCNN and ICASSP conferences.
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">Dec 2024</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
{% endif %}

{% if site.data.display.homepage.show_publications %}
{% assign publications = site.publications | sort: "pub_date" | reverse %}
{% if publications.size > 0 %}
<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-book"></i> Publications
                </h4>
                
                {% for item in publications limit:4 %}
                <div class="row mb-4 {% unless forloop.last %}border-bottom pb-3{% endunless %}">
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
                        </p>
                    </div>
                </div>
                {% endfor %}
                
                {% if publications.size > 4 %}
                <div class="text-center mt-3">
                    <a href="{{ '/publications' | relative_url }}" class="btn btn-outline-primary">View All Publications</a>
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
{% endif %}
{% endif %}

{% if site.data.display.homepage.show_awards %}
<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-award"></i> Selected Awards
                </h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Outstanding Graduates</strong> - Jinan University
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">Fall 2024</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Golden Arowana Scholarship</strong> - Jinan University
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">Fall 2023</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Bronze Medal</strong> - ICPC International Collegiate Programming Contest
                            </div>
                            <div>
                                <span class="badge badge-pill badge-secondary">Fall 2022</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="text-center mt-3">
                    <a href="{{ '/awards' | relative_url }}" class="btn btn-outline-primary">View All Awards</a>
                </div>
            </div>
        </div>
    </div>
</div>
{% endif %}


