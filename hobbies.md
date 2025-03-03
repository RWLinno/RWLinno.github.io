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
<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-brain"></i> Daily Challenges
                </h4>
                
                <!-- Chess Puzzle (保留现有的) -->
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h5>Daily Chess Puzzle</h5>
                        <div id="chess-board"></div>
                        <div class="text-center mt-3">
                            <button id="showSolution" class="btn btn-sm btn-outline-primary">Show Solution</button>
                            <button id="newPuzzle" class="btn btn-sm btn-outline-primary">New Puzzle</button>
                        </div>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.js"></script>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.css">
                        <script>
                            // 现有的国际象棋脚本保持不变
                            // ...
                        </script>
                    </div>
                    
                    <div class="col-md-6">
                        <h5>Daily Killer Sudoku</h5>
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <p class="text-muted mb-2">Challenge yourself with today's killer sudoku puzzle:</p>
                                <a href="https://www.dailykillersudoku.com/" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-puzzle-piece"></i> Open Daily Killer Sudoku
                                </a>
                                <p class="mt-3 small">
                                    Killer Sudoku combines elements of sudoku, kakuro, and logic puzzles. 
                                    Each cage (group of cells with the same color) must add up to the number shown, 
                                    and no digit can repeat within a cage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Coding Challenge -->
                <div class="row">
                    <div class="col-md-6">
                        <h5>Daily Coding Challenge</h5>
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <p class="text-muted mb-2">Sharpen your programming skills with a daily problem:</p>
                                <a href="https://loj.ac/p/random" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-code"></i> Get a Random Problem
                                </a>
                                <p class="mt-3 small">
                                    LibreOJ (LOJ) offers a variety of algorithmic problems ranging from easy to hard.
                                    Practice implementing algorithms, data structures, and problem-solving techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <h5>Word Puzzle</h5>
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <p class="text-muted mb-2">Test your vocabulary and word-finding skills:</p>
                                <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-font"></i> Try Spelling Bee
                                </a>
                                <p class="mt-3 small">
                                    The New York Times Spelling Bee challenges you to make as many words as possible
                                    from a set of 7 letters, with each word containing the center letter.
                                </p>
                            </div>
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
                
                <div class="container px-0">
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

