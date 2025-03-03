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
                
                <!-- Daily Sudoku -->
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h5><i class="fas fa-th"></i> Daily Sudoku</h5>
                        <div class="embed-responsive embed-responsive-1by1" style="max-height: 400px;">
                            <iframe class="embed-responsive-item" src="https://sudoku.com/embed" allowfullscreen></iframe>
                        </div>
                    </div>
                    
                    <!-- Daily Chess Puzzle -->
                    <div class="col-md-6">
                        <h5><i class="fas fa-chess"></i> Daily Chess Puzzle</h5>
                        <div id="chess-puzzle" style="max-width: 400px; margin: 0 auto;">
                            <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 100%; height: 400px;" allowtransparency="true" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
                
                <!-- Daily Coding Challenge -->
                <div class="row">
                    <div class="col-md-12">
                        <h5><i class="fas fa-code"></i> Daily Coding Challenge</h5>
                        <div id="daily-coding-challenge" class="p-3 bg-light rounded">
                            <h6 id="challenge-title">Loading challenge...</h6>
                            <p id="challenge-description" class="mb-2"></p>
                            <div id="challenge-difficulty" class="mb-3"></div>
                            <a id="challenge-link" href="#" target="_blank" class="btn btn-primary btn-sm">Solve on LeetCode</a>
                        </div>
                        
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                // LeetCode problems (simplified list)
                                const problems = [
                                    {
                                        title: "Two Sum",
                                        difficulty: "Easy",
                                        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
                                        link: "https://leetcode.com/problems/two-sum/"
                                    },
                                    {
                                        title: "Add Two Numbers",
                                        difficulty: "Medium",
                                        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
                                        link: "https://leetcode.com/problems/add-two-numbers/"
                                    },
                                    {
                                        title: "Longest Substring Without Repeating Characters",
                                        difficulty: "Medium",
                                        description: "Given a string s, find the length of the longest substring without repeating characters.",
                                        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
                                    },
                                    {
                                        title: "Median of Two Sorted Arrays",
                                        difficulty: "Hard",
                                        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
                                        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
                                    },
                                    {
                                        title: "Longest Palindromic Substring",
                                        difficulty: "Medium",
                                        description: "Given a string s, return the longest palindromic substring in s.",
                                        link: "https://leetcode.com/problems/longest-palindromic-substring/"
                                    }
                                ];
                                
                                // Get date-based index
                                const today = new Date();
                                const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                                const dateHash = Array.from(dateString).reduce((hash, char) => hash + char.charCodeAt(0), 0);
                                const problemIndex = dateHash % problems.length;
                                
                                // Display the problem
                                const problem = problems[problemIndex];
                                document.getElementById('challenge-title').textContent = problem.title;
                                document.getElementById('challenge-description').textContent = problem.description;
                                
                                // Set difficulty badge color
                                let badgeClass = 'badge ';
                                if (problem.difficulty === 'Easy') badgeClass += 'badge-success';
                                else if (problem.difficulty === 'Medium') badgeClass += 'badge-warning';
                                else badgeClass += 'badge-danger';
                                
                                document.getElementById('challenge-difficulty').innerHTML = `<span class="${badgeClass}">${problem.difficulty}</span>`;
                                document.getElementById('challenge-link').href = problem.link;
                                
                                // Try to fetch a random problem from LeetCode API (note: this is for illustration, LeetCode doesn't have a public API)
                                // In a real implementation, you might need to use a proxy service or another coding challenge API
                                fetch('https://leetcode-stats-api.herokuapp.com/problems')
                                    .then(response => response.json())
                                    .then(data => {
                                        // This would be implemented if LeetCode had a public API
                                        console.log("Successfully fetched from API");
                                    })
                                    .catch(error => {
                                        console.log("Using local problem data");
                                    });
                            });
                        </script>
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

