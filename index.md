---
layout: default
title: Homepage
navbar_title: Home
i18n_title: home.page_title
---
{% include widgets/profile_card.html %}

<div class="row mt-4 home-section">
    <div class="col-lg-6 mb-3 mb-lg-0">
        <div class="card border-0 shadow-sm bg-white h-100">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-trophy"></i> <span data-i18n="home.milestones">Milestones</span>
                </h4>
                <p class="text-muted mb-3" data-i18n="home.milestones_intro">Key progress in research and academic activities.</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                        <span><i class="fas fa-book text-primary mr-2"></i><span data-i18n="home.publications">Publications</span></span>
                        <span class="badge badge-pill badge-primary">{{ site.publications.size }}</span>
                    </li>
                    <li class="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                        <span><i class="fas fa-quote-right text-success mr-2"></i><span data-i18n="home.citations">Citations</span></span>
                        <span class="badge badge-pill badge-success">100+</span>
                    </li>
                    <li class="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                        <span><i class="fas fa-medal text-warning mr-2"></i><span data-i18n="home.awards">Awards</span></span>
                        <span class="badge badge-pill badge-warning">20+</span>
                    </li>
                    <li class="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                        <span><i class="fas fa-pen-nib text-info mr-2"></i><span data-i18n="home.blog_followers">Blog followers</span></span>
                        <span class="badge badge-pill badge-info">3600+</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="card border-0 shadow-sm bg-white h-100">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-heart"></i> <span data-i18n="home.interests">Interests</span>
                </h4>
                <p class="text-muted mb-3" data-i18n="home.interests_intro">Beyond research, I enjoy these activities in daily life.</p>
                <div>
                    <span class="badge badge-light interest-pill"><i class="fas fa-gamepad mr-1"></i><span data-i18n="home.video_games">Video games</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-table-tennis-paddle-ball mr-1"></i><span data-i18n="home.badminton">Badminton</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-mountain mr-1"></i><span data-i18n="home.hiking">Hiking</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-film mr-1"></i><span data-i18n="home.movies">Movies</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-car-side mr-1"></i><span data-i18n="home.cars">Cars</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-plane-departure mr-1"></i><span data-i18n="home.travel">Travel</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-camera mr-1"></i><span data-i18n="home.photography">Photography</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-music mr-1"></i><span data-i18n="home.music">Music</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-code mr-1"></i><span data-i18n="home.indie_games">Indie game development</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-paw mr-1"></i><span data-i18n="home.pets">Pets</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-chess mr-1"></i><span data-i18n="home.chess">Chess</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-dice mr-1"></i><span data-i18n="home.board_games">Board games</span></span>
                    <span class="badge badge-light interest-pill"><i class="fas fa-book-open mr-1"></i><span data-i18n="home.web_novels">Web novels</span></span>
                </div>
                <div class="mt-3">
                    <a href="{{ '/hobbies' | relative_url }}" class="btn btn-sm btn-outline-primary">
                        <span data-i18n="home.more_hobbies">View more hobbies</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

{% if site.data.display.homepage.show_education %}
<div class="row mt-4 home-section">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-user-graduate"></i> <span data-i18n="home.education">Education</span>
                </h4>
                <ul class="list-group list-group-flush education-list">
                    <li class="list-group-item border-0 education-entry">
                        <img src="{{ '/images/cuhk_logo.png' | relative_url }}" alt="CUHK logo" class="education-logo">
                        <div class="education-copy">
                            <div data-lang-content="en"><strong>The Chinese University of Hong Kong</strong> - Computer Science and Engineering</div>
                            <div data-lang-content="zh"><strong>香港中文大学</strong> - 计算机科学与工程系</div>
                            <small class="text-muted" data-lang-content="en">Supervised by <a href="https://www.cse.cuhk.edu.hk/~jcheng/" target="_blank" rel="noopener noreferrer">Prof. James Cheng</a> | Joint training with <a href="https://knowin.ai" target="_blank" rel="noopener noreferrer">Knowin AI</a></small>
                            <small class="text-muted" data-lang-content="zh">导师：<a href="https://www.cse.cuhk.edu.hk/~jcheng/" target="_blank" rel="noopener noreferrer">Prof. James Cheng</a>｜与<a href="https://knowin.ai" target="_blank" rel="noopener noreferrer">知见智能</a>联合培养</small>
                        </div>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="en">Aug 2026 - Present</span>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="zh">2026年8月 - 至今</span>
                    </li>
                    <li class="list-group-item border-0 education-entry">
                        <img src="{{ '/images/hkust_logo.png' | relative_url }}" alt="HKUST(GZ) logo" class="education-logo">
                        <div class="education-copy">
                            <div data-lang-content="en"><strong>HKUST(GZ)</strong> - Information Hub - Data Science and Analysis</div>
                            <div data-lang-content="zh"><strong>香港科技大学（广州）</strong> - 信息枢纽 - 数据科学与分析</div>
                            <small class="text-muted" data-lang-content="en">Supervised by <a href="https://yuxuanliang.com/" target="_blank" rel="noopener noreferrer">Prof. Yuxuan Liang</a> @ <a href="https://citymind.top/about-us/" target="_blank" rel="noopener noreferrer">CityMind Lab</a></small>
                            <small class="text-muted" data-lang-content="zh">导师：<a href="https://yuxuanliang.com/" target="_blank" rel="noopener noreferrer">梁宇轩教授</a>｜<a href="https://citymind.top/about-us/" target="_blank" rel="noopener noreferrer">CityMind Lab</a></small>
                        </div>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="en">Sep 2024 - Jun 2026</span>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="zh">2024年9月 - 2026年6月</span>
                    </li>
                    <li class="list-group-item border-0 education-entry">
                        <img src="{{ '/images/jnu_logo.png' | relative_url }}" alt="Jinan University logo" class="education-logo">
                        <div class="education-copy">
                            <div data-lang-content="en"><strong>Jinan University</strong> - Computer Science Department - Network Engineering</div>
                            <div data-lang-content="zh"><strong>暨南大学</strong> - 计算机科学系 - 网络工程</div>
                        </div>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="en">Sep 2020 - Jun 2024</span>
                        <span class="badge badge-pill badge-secondary education-date" data-lang-content="zh">2020年9月 - 2024年6月</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
{% endif %}

{% if site.data.display.homepage.show_news %}
<div class="row mt-4 home-section">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-newspaper"></i> <span data-i18n="home.latest_news">Latest News</span>
                </h4>
                <ul class="list-group list-group-flush news-list">
                    {% for news in site.data.news %}
                    <li class="list-group-item border-0 news-entry">
                        <div class="news-copy">
                            <span data-lang-content="en"><strong>{{ news.label_en }}</strong> - {{ news.content_en }}</span>
                            <span data-lang-content="zh"><strong>{{ news.label_zh }}</strong> - {{ news.content_zh }}</span>
                        </div>
                        <span class="badge badge-pill badge-secondary news-date" data-lang-content="en">{{ news.date_en }}</span>
                        <span class="badge badge-pill badge-secondary news-date" data-lang-content="zh">{{ news.date_zh }}</span>
                    </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</div>
{% endif %}

{% if site.data.display.homepage.show_publications %}
{% assign pinned_publications = site.publications | where: "pinned", true | sort: "pub_date" | reverse %}
{% assign other_publications = site.publications | where_exp: "item", "item.pinned != true" | sort: "pub_date" | reverse %}
{% assign all_publications = pinned_publications | concat: other_publications %}
{% if all_publications.size > 0 %}
<div class="row mt-4 home-section">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-book"></i> <span data-i18n="home.pinned_publications">Pinned Publications</span>
                </h4>
                {% for item in all_publications limit:5 %}
                <article class="row mb-4 publication-row {% unless forloop.last %}border-bottom pb-3{% endunless %}">
                    {% if item.cover %}
                    <div class="col-md-3 mb-3 mb-md-0">
                        <img src="{{ item.cover | relative_url }}" alt="Cover image for {{ item.title }}" class="img-fluid rounded publication-cover">
                    </div>
                    <div class="col-md-9">
                    {% else %}
                    <div class="col-md-12">
                    {% endif %}
                        <h5 class="mb-1">
                            {{ item.title }}
                            {% if item.pinned %}<span class="badge badge-warning ml-2" data-i18n="publication.pinned">Pinned</span>{% endif %}
                            {% if item.status %}<span class="badge badge-info ml-2"{% if item.status == "Under Review" %} data-i18n="publication.under_review"{% endif %}>{{ item.status }}</span>{% endif %}
                        </h5>
                        <p class="mb-1 small">{% include widgets/author_list.html authors=item.authors %}</p>
                        <p class="mb-1 small"><i>{{ item.pub }}</i>. {{ item.pub_date }}</p>
                        <p class="mb-2 small text-muted">{{ item.abstract }}</p>
                        <p class="small mb-0 publication-links">
                            {% for link in item.links %}
                            {% if link[1].url and link[1].url != "" %}
                            <a target="{{ link[1]['target'] }}" rel="noopener noreferrer" href="{{ link[1]['url'] }}" class="btn btn-sm btn-outline-primary mr-1">
                                {% if link[0] == "Paper" %}<span data-i18n="publication.paper">Paper</span>{% elsif link[0] == "Code" %}<span data-i18n="publication.code">Code</span>{% else %}{{ link[0] }}{% endif %}
                            </a>
                            {% endif %}
                            {% endfor %}
                        </p>
                    </div>
                </article>
                {% endfor %}
                {% if all_publications.size > 5 %}
                <div class="text-center mt-3">
                    <a href="{{ '/research' | relative_url }}#publications" class="btn btn-outline-primary" data-i18n="home.view_all_publications">View all publications</a>
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
{% endif %}
{% endif %}

{% if site.data.display.homepage.show_awards %}
<div class="row mt-4 home-section">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-award"></i> <span data-i18n="home.selected_awards">Selected Awards</span>
                </h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0 news-entry">
                        <span data-lang-content="en"><strong>Outstanding Graduate</strong> - Jinan University</span>
                        <span data-lang-content="zh"><strong>优秀毕业生</strong> - 暨南大学</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="en">2024</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="zh">2024年</span>
                    </li>
                    <li class="list-group-item border-0 news-entry">
                        <span data-lang-content="en"><strong>Golden Arowana Scholarship</strong> - Jinan University</span>
                        <span data-lang-content="zh"><strong>金龙鱼奖学金</strong> - 暨南大学</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="en">2023</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="zh">2023年</span>
                    </li>
                    <li class="list-group-item border-0 news-entry">
                        <span data-lang-content="en"><strong>Bronze Medal</strong> - ICPC International Collegiate Programming Contest</span>
                        <span data-lang-content="zh"><strong>铜牌</strong> - ICPC 国际大学生程序设计竞赛</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="en">2022</span>
                        <span class="badge badge-pill badge-secondary" data-lang-content="zh">2022年</span>
                    </li>
                </ul>
                <div class="text-center mt-3">
                    <a href="{{ '/awards' | relative_url }}" class="btn btn-outline-primary" data-i18n="home.view_all_awards">View all awards</a>
                </div>
            </div>
        </div>
    </div>
</div>
{% endif %}
