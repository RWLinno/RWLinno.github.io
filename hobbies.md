---
layout: default
title: Hobbies
navbar_title: Hobbies
---

<div class="container py-4">
    <!-- Header -->
    <div class="row mb-4">
        <div class="col">
            <div class="card border-0 shadow-sm bg-white rounded-lg">
                <div class="card-body text-center p-4">
                    <h2 class="card-title display-4 mb-3">
                        <i class="fas fa-heart text-danger"></i> My Hobbies
                    </h2>
                    <div class="alert alert-danger rounded-lg py-3" role="alert">
                        <strong><i class="fas fa-user-friends mr-2"></i> I hope I can make friends with you all through the following information!!!</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Gaming Section -->
    <div class="row mb-4">
        <div class="col">
            <div class="card border-0 shadow-sm bg-white rounded-lg hover-effect">
                <div class="card-body p-4">
                    <h3 class="card-title mb-3">
                        <i class="fas fa-gamepad text-primary"></i> Play Games
                    </h3>
                    <p class="lead text-muted">Gaming is one of my favorite pastimes. I enjoy a variety of genres and platforms.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Daily Challenges Section -->
    <div class="row mb-4">
        <div class="col">
            <div class="card border-0 shadow-sm bg-white rounded-lg">
                <div class="card-body p-4">
                    <h3 class="card-title mb-4">
                        <i class="fas fa-brain text-success"></i> Daily Challenges
                    </h3>
                    <div class="row">
                        <!-- Daily Chess Puzzle -->
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 border-0 shadow-sm hover-effect">
                                <div class="card-header bg-gradient-primary text-white py-3">
                                    <h5 class="mb-0"><i class="fas fa-chess mr-2"></i> Daily Chess Puzzle</h5>
                                </div>
                                <div class="card-body">
                                    <div class="challenge-container" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                                        <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 100%; height: 400px;" allowtransparency="true" frameborder="0"></iframe>
                                    </div>
                                    <div class="text-center mt-3">
                                        <p class="small text-muted">
                                            <i class="fas fa-info-circle mr-1"></i> Daily chess puzzle - Solve it directly on this page!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Daily Sudoku -->
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 border-0 shadow-sm hover-effect">
                                <div class="card-header bg-gradient-warning text-white py-3">
                                    <h5 class="mb-0"><i class="fas fa-puzzle-piece mr-2"></i> Daily Sudoku Puzzle</h5>
                                </div>
                                <div class="card-body">
                                    <div class="challenge-container" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                                        <iframe src="https://www.websudoku.com/?level=3&embed=true" 
                                                style="width: 100%; height: 400px;" 
                                                allowtransparency="true" 
                                                frameborder="0">
                                        </iframe>
                                    </div>
                                    <div class="text-center mt-3">
                                        <p class="small text-muted">
                                            <i class="fas fa-sync-alt mr-1"></i> Daily Sudoku puzzle - A new challenge each day!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Daily Coding Challenge -->
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 border-0 shadow-sm hover-effect">
                                <div class="card-header bg-gradient-info text-white py-3">
                                    <h5 class="mb-0"><i class="fas fa-code mr-2"></i> Daily Coding Challenge</h5>
                                </div>
                                <div class="card-body">
                                    <div class="challenge-container" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                                        <iframe src="https://karimelghamry.github.io/Codeforces-Randomizer/" 
                                                style="width: 100%; height: 400px; border: none;" 
                                                allowtransparency="true" 
                                                frameborder="0">
                                        </iframe>
                                    </div>
                                    <div class="text-center mt-3">
                                        <p class="small text-muted">
                                            <i class="fas fa-random mr-1"></i> Random Codeforces problem - Challenge yourself with competitive programming!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Game Development Section -->
    <div class="row mb-4">
        <div class="col">
            <div class="card border-0 shadow-sm bg-white rounded-lg">
                <div class="card-body p-4">
                    <h3 class="card-title mb-4">
                        <i class="fas fa-gamepad text-danger"></i> Game Development
                    </h3>

                    <div class="container px-0">
                        {% assign game_projects = site.data.projects | where: "category", "Game Development" %}
                        {% for project in game_projects %}
                        <div class="row mb-5 project-card">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="img-fluid rounded shadow-sm hover-zoom">
                            </div>
                            <div class="col-md-8">
                                <h4 class="font-weight-bold">{{ project.title }}</h4>
                                <p class="text-muted mb-2"><i class="far fa-calendar-alt mr-2"></i> {{ project.status }}</p>
                                <p class="project-description">{{ project.description }}</p>
                                <div class="mt-2 mb-3">
                                    {% for tag in project.tags %}
                                    <span class="badge badge-pill badge-primary mr-1">{{ tag }}</span>
                                    {% endfor %}
                                </div>
                                {% if project.link %}
                                <a href="{{ project.link }}" target="_blank" class="btn btn-primary">
                                    <i class="fas {% if project.link contains 'github' %}fa-github{% elsif project.link contains 'pdf' %}fa-file-pdf{% elsif project.link contains 'steam' %}fa-steam{% else %}fa-external-link-alt{% endif %} mr-1"></i> 
                                    {% if project.link_text %}{{ project.link_text }}{% else %}View Project{% endif %}
                                </a>
                                {% endif %}
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Blog Section -->
    <div class="row mb-4">
        <div class="col">
            <div class="card border-0 shadow-sm bg-white rounded-lg">
                <div class="card-body p-4">
                    <h3 class="card-title mb-4">
                        <i class="fas fa-blog text-info"></i> Blog
                    </h3>
                    <p class="lead">I maintain a CSDN blog where I share my knowledge and experiences, particularly related to ACM.</p>
                    
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="card border-0 shadow-sm hover-effect">
                                <div class="card-body text-center p-4">
                                    <i class="fas fa-rss-square text-warning mb-3" style="font-size: 3rem;"></i>
                                    <h5 class="card-title">CSDN Blog</h5>
                                    <p class="card-text"><span class="badge badge-pill badge-success">3000+ Fans</span></p>
                                    <p class="card-text">Sharing ACM knowledge and programming insights</p>
                                    <a href="https://blog.csdn.net/SC_Linno" target="_blank" class="btn btn-primary btn-block">
                                        <i class="fas fa-external-link-alt mr-1"></i> Visit Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-8">
                            <div class="card border-0 shadow-sm">
                                <div class="card-header bg-light">
                                    <h5 class="mb-0"><i class="fas fa-file-alt mr-2"></i> Random Blog Post</h5>
                                </div>
                                <div class="card-body blog-content">
                                    {% assign blog_posts = site.posts | sample: 1 %}
                                    {% for post in blog_posts %}
                                    <h4 class="font-weight-bold">{{ post.title }}</h4>
                                    <p class="text-muted mb-3">
                                        <i class="far fa-calendar-alt mr-1"></i> {{ post.date | date: "%B %d, %Y" }}
                                        {% if post.categories %}
                                        <span class="mx-2">|</span>
                                        <i class="fas fa-folder-open mr-1"></i> 
                                        {% for category in post.categories %}
                                        <span class="badge badge-secondary mr-1">{{ category }}</span>
                                        {% endfor %}
                                        {% endif %}
                                    </p>
                                    <div class="post-excerpt">
                                        {{ post.excerpt }}
                                    </div>
                                    <a href="{{ post.url | relative_url }}" class="btn btn-sm btn-outline-primary mt-3">
                                        <i class="fas fa-book-open mr-1"></i> Read More
                                    </a>
                                    {% endfor %}
                                    
                                    {% if blog_posts.size == 0 %}
                                    <div class="alert alert-info">
                                        <i class="fas fa-info-circle mr-2"></i> No blog posts available at the moment.
                                    </div>
                                    {% endif %}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Custom Styles -->
<style>
    .hover-effect {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-effect:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
    }
    .hover-zoom {
        transition: transform 0.3s ease;
    }
    .hover-zoom:hover {
        transform: scale(1.03);
    }
    .project-description {
        line-height: 1.6;
    }
    .project-card {
        transition: background-color 0.3s ease;
        padding: 15px;
        border-radius: 8px;
    }
    .project-card:hover {
        background-color: #f8f9fa;
    }
    .bg-gradient-primary {
        background: linear-gradient(45deg, #4e73df, #224abe);
    }
    .bg-gradient-info {
        background: linear-gradient(45deg, #36b9cc, #1a8997);
    }
    .bg-gradient-warning {
        background: linear-gradient(45deg, #f6c23e, #dda20a);
    }
    .badge-pill {
        padding-right: .6em;
        padding-left: .6em;
    }
    .blog-content {
        max-height: 500px;
        overflow-y: auto;
    }
    .post-excerpt {
        border-left: 3px solid #4e73df;
        padding-left: 15px;
        margin: 15px 0;
    }
</style>

