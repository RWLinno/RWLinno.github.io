---
layout: default
title: Daily Challenges
navbar_title: Daily Challenges
---

<div class="row mb-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title mb-4">
                    <i class="fas fa-brain"></i> Daily Challenges
                </h4>
                
                <p class="lead">Challenge yourself daily with puzzles and coding problems!</p>
                
                <!-- Daily Killer Sudoku -->
                <div class="row mt-5">
                    <div class="col-12">
                        <h5 class="border-bottom pb-2 mb-4">
                            <i class="fas fa-puzzle-piece"></i> Daily Killer Sudoku
                        </h5>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h6 class="card-title">Today's Puzzle</h6>
                                <div id="killer-sudoku-frame">
                                    <iframe src="https://www.dailykillersudoku.com/" width="100%" height="500" frameborder="0"></iframe>
                                </div>
                                <a href="https://www.dailykillersudoku.com/" target="_blank" class="btn btn-primary mt-3">
                                    <i class="fas fa-external-link-alt"></i> Visit Daily Killer Sudoku
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h6 class="card-title">What is Killer Sudoku?</h6>
                                <p>Killer Sudoku combines elements of sudoku, kakuro, and logic puzzles. In addition to standard sudoku rules, cells are grouped with a sum that they must add up to. This creates an engaging challenge that requires both logical deduction and arithmetic.</p>
                                <h6 class="mt-4">Rules:</h6>
                                <ul>
                                    <li>Each row, column, and 3x3 box must contain digits 1-9 without repetition</li>
                                    <li>Cells with the same color or outline form a cage</li>
                                    <li>The sum of all numbers in a cage must equal the small number printed in the corner</li>
                                    <li>No digit can repeat within a cage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Daily Coding Challenge -->
                <div class="row mt-5">
                    <div class="col-12">
                        <h5 class="border-bottom pb-2 mb-4">
                            <i class="fas fa-code"></i> Daily Coding Challenge
                        </h5>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h6 class="card-title">Today's Problem</h6>
                                <div id="coding-challenge-frame">
                                    <iframe src="https://loj.ac/p/random" width="100%" height="500" frameborder="0"></iframe>
                                </div>
                                <a href="https://loj.ac/" target="_blank" class="btn btn-primary mt-3">
                                    <i class="fas fa-external-link-alt"></i> Visit LibreOJ
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h6 class="card-title">What are Coding Challenges?</h6>
                                <p>Coding challenges are algorithmic problems that test your programming logic, efficiency, and problem-solving skills. They're great for sharpening your computer science fundamentals and preparing for technical interviews.</p>
                                <h6 class="mt-4">Challenge Types:</h6>
                                <ul>
                                    <li><strong>Algorithm Implementation</strong> - Implement classic algorithms like sorting, searching, etc.</li>
                                    <li><strong>Data Structures</strong> - Problems requiring specific data structures like trees, graphs, hash tables</li>
                                    <li><strong>Dynamic Programming</strong> - Problems requiring optimal substructure and overlapping subproblems</li>
                                    <li><strong>Graph Theory</strong> - Problems involving connectivity, paths, and network flows</li>
                                    <li><strong>Mathematical Problems</strong> - Number theory, combinatorics, and probability problems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- JavaScript for iframe fallback -->
                <script>
                    // Handle iframe loading errors
                    function handleIframeError(iframeId, fallbackMessage, fallbackLink) {
                        var iframe = document.getElementById(iframeId);
                        iframe.onerror = function() {
                            var container = iframe.parentNode;
                            container.innerHTML = '<div class="alert alert-warning">' + fallbackMessage + 
                                                 '<br><a href="' + fallbackLink + '" target="_blank">Visit website directly</a></div>';
                        };
                    }
                    
                    // Set up error handlers
                    document.addEventListener('DOMContentLoaded', function() {
                        handleIframeError('killer-sudoku-frame', 
                                         'Unable to load Daily Killer Sudoku. This might be due to iframe restrictions.', 
                                         'https://www.dailykillersudoku.com/');
                        
                        handleIframeError('coding-challenge-frame', 
                                         'Unable to load LibreOJ. This might be due to iframe restrictions.', 
                                         'https://loj.ac/');
                    });
                </script>
            </div>
        </div>
    </div>
</div> 