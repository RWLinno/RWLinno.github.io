---
layout: default
title: Hobbies
navbar_title: Hobbies
---

<div class="row">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-heart text-danger"></i> Hobbies
                </h4>
                <div class="alert alert-danger" role="alert">
                    <strong>I hope I can make friends with you all through the following information!!!</strong>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-gamepad"></i> Play Games
                </h4>
            </div>
        </div>
    </div>
</div>

<!-- Daily Challenges Section -->
<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-brain"></i> Daily Challenges
                </h4>
                <div class="row">
                    <!-- Daily Chess Puzzle -->
                    <div class="col-md-4">
                        <h5><i class="fas fa-chess"></i> Daily Chess Puzzle</h5>
                        <div class="challenge-container" style="max-width: 400px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 100%; height: 400px;" allowtransparency="true" frameborder="0"></iframe>
                        </div>
                        <div class="text-center mt-3">
                            <p class="small text-muted">
                                Daily chess puzzle - Solve it directly on this page!
                            </p>
                        </div>
                    </div>
                    
                    <!-- Daily Killer Sudoku -->
                    <div class="col-md-4">
                        <h5><i class="fas fa-puzzle-piece"></i> Daily Killer Sudoku</h5>
                        <div class="challenge-container" style="max-width: 400px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <iframe src="https://sudoku.com/killer/embed" 
                                    style="width: 100%; height: 400px;" 
                                    allowtransparency="true" 
                                    frameborder="0">
                            </iframe>
                        </div>
                        <div class="text-center mt-3">
                            <p class="small text-muted">
                                Daily Killer Sudoku puzzle - Solve it directly on this page!
                            </p>
                        </div>
                    </div>
                    
                    <!-- Daily Programming Challenge -->
                    <div class="col-md-4">
                        <h5><i class="fas fa-code"></i> Daily Coding Challenge</h5>
                        <div class="challenge-container" style="max-width: 400px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <iframe src="https://karimelghamry.github.io/Codeforces-Randomizer/" 
                                    style="width: 100%; height: 400px; border: none;" 
                                    allowtransparency="true" 
                                    frameborder="0">
                            </iframe>
                        </div>
                        <div class="text-center mt-3">
                            <p class="small text-muted">
                                Random Codeforces problem - Challenge yourself with competitive programming!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-gamepad"></i> Game Development
                </h4>

                <div class="container">
                    {% assign game_projects = site.data.projects | where: "category", "Game Development" %}
                    {% for project in game_projects %}
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
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-blog"></i> Blog
                </h4>
                <p>I maintain a CSDN blog where I share my knowledge and experiences, particularly related to ACM.</p>
                
                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">CSDN Blog</h5>
                                <p class="card-text">3000+ Fans</p>
                                <p class="card-text">Sharing ACM knowledge</p>
                                <a href="https://blog.csdn.net/SC_Linno" target="_blank" class="btn btn-primary">Visit Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

