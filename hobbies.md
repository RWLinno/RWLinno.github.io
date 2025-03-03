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
                    <!-- Daily Chess Puzzle -->
                    <div class="col-md-6">
                        <h5><i class="fas fa-chess"></i> Daily Chess Puzzle</h5>
                        <div id="chess-puzzle" style="max-width: 400px; margin: 0 auto;">
                            <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 100%; height: 400px;" allowtransparency="true" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
                <!-- Daily Killer Sudoku -->
                <div class="row mt-4">
                    <div class="col-md-12">
                        <h5><i class="fas fa-puzzle-piece"></i> Daily Killer Sudoku</h5>
                        <div id="sudoku-puzzle" style="max-width: 450px; margin: 0 auto;">
                            <iframe id="sudokuIframe"
                                src="https://sudoku.com/embed" 
                                style="width: 100%; height: 450px;" 
                                allowtransparency="true" 
                                frameborder="0">
                            </iframe>
                        </div>
                        <div class="text-center mt-2">
                            <p class="small text-muted">
                                每日数独谜题 - 您可以直接在页面上解决它！如果加载失败，请<a href="https://sudoku.com/" target="_blank">访问完整版</a>。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Daily NowCoder Problem -->
                <div class="row">
                    <div class="col-md-12">
                        <h5><i class="fas fa-code"></i> 每日牛客竞赛题</h5>
                        <div id="nowcoder-challenge" class="p-3 bg-light rounded">
                            <div id="problem-container">
                                <div class="card">
                                    <div class="card-header bg-dark text-white">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span>每日牛客竞赛题</span>
                                            <span id="problem-date" class="badge badge-light"></span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-12">
                                                <h5 id="problem-title" class="card-title mb-2"></h5>
                                                <div class="d-flex align-items-center mb-3">
                                                    <span class="me-2">今日日期: </span>
                                                    <span id="today-date"></span>
                                                </div>
                                                <div class="d-flex align-items-center mb-2">
                                                    <span id="problem-difficulty" class="badge badge-primary me-2"></span>
                                                </div>
                                                <div id="problem-tags" class="mb-3"></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div id="problem-description" class="mb-3 p-3 bg-light rounded border"></div>
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h6>输入示例:</h6>
                                                        <pre id="problem-input" class="bg-light p-2 rounded border"></pre>
                                                    </div>
                                                    <div>
                                                        <h6>输出示例:</h6>
                                                        <pre id="problem-output" class="bg-light p-2 rounded border"></pre>
                                                    </div>
                                                </div>
                                                <div class="text-end mt-3">
                                                    <a id="problem-link" href="#" target="_blank" class="btn btn-primary">
                                                        <i class="fas fa-external-link-alt"></i> 完整题目
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                // 牛客竞赛题库
                                const problems = [
                                    {
                                        id: "NC53785",
                                        title: "最长回文子串",
                                        difficulty: 1300,
                                        tags: ["字符串", "动态规划"],
                                        link: "https://ac.nowcoder.com/acm/problem/53785",
                                        description: "给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。",
                                        input_example: "babad",
                                        output_example: "bab\n注意: 'aba'也是一个有效答案"
                                    },
                                    {
                                        id: "NC23483",
                                        title: "小A的位运算",
                                        difficulty: 1300,
                                        tags: ["枚举"],
                                        link: "https://ac.nowcoder.com/acm/problem/23483",
                                        description: "小A有一个长为n的数列{ai}，每个数的范围是[0, 2^30 - 1]。他想要删掉一段连续的子数列，让剩下元素进行按位或运算的值最小。你需要求出最小的按位或运算的值。",
                                        input_example: "5\n1 2 4 8 16",
                                        output_example: "0"
                                    },
                                    {
                                        id: "NC15425",
                                        title: "gcd来了",
                                        difficulty: 1200,
                                        tags: ["数学", "GCD"],
                                        link: "https://ac.nowcoder.com/acm/problem/15425",
                                        description: "给你一个长度为n的序列A，求有多少个三元组(i,j,k)满足：\n1. 1 ≤ i < j < k ≤ n\n2. gcd(A[i], A[j], A[k]) > 1",
                                        input_example: "5\n2 3 4 6 10",
                                        output_example: "4"
                                    },
                                    {
                                        id: "NC16429",
                                        title: "[NOIP2016]组合数问题",
                                        difficulty: 1500,
                                        tags: ["排列组合", "组合数学", "递推"],
                                        link: "https://ac.nowcoder.com/acm/problem/16429",
                                        description: "组合数表示从n个物品中选出m个的方案数，记做C(n,m)。现在给定n、m、p，请你计算组合数C(n,m)的值对p取模的结果。",
                                        input_example: "5 3 10007",
                                        output_example: "10"
                                    },
                                    {
                                        id: "NC16596",
                                        title: "[NOIP2011]计算系数",
                                        difficulty: 1400,
                                        tags: ["排列组合", "组合数学", "二项式定理"],
                                        link: "https://ac.nowcoder.com/acm/problem/16596",
                                        description: "给出一个多项式f(x)=(1+x)^a (1+x^2)^b (1+x^4)^c ...(1+x^{2^k})^{k+1}，请求出x^n项的系数。",
                                        input_example: "2 4\n1 2",
                                        output_example: "4"
                                    },
                                    {
                                        id: "NC21302",
                                        title: "被3整除的子序列",
                                        difficulty: 1100,
                                        tags: ["动态规划", "过关题目"],
                                        link: "https://ac.nowcoder.com/acm/problem/21302",
                                        description: "给定一个正整数序列，请问该序列有多少个非空子序列的和能被3整除？",
                                        input_example: "3\n1 2 3",
                                        output_example: "3"
                                    },
                                    {
                                        id: "NC22164",
                                        title: "更相减损术",
                                        difficulty: 900,
                                        tags: ["递归", "数学"],
                                        link: "https://ac.nowcoder.com/acm/problem/22164",
                                        description: "更相减损术是求最大公约数的一种方法，对于两个正整数a和b，若a>b，则a=a-b；若a<b，则b=b-a；若a=b，则a（或b）即为两数的最大公约数。通过递归实现更相减损术求最大公约数。",
                                        input_example: "36 24",
                                        output_example: "12"
                                    },
                                    {
                                        id: "NC14583",
                                        title: "矩阵快速幂",
                                        difficulty: 1600,
                                        tags: ["快速幂", "矩阵"],
                                        link: "https://ac.nowcoder.com/acm/problem/14583",
                                        description: "给定n×n的矩阵A，求A的k次幂对109+7取模的结果。",
                                        input_example: "2 2\n1 1\n1 0\n2",
                                        output_example: "2 1\n1 1"
                                    },
                                    {
                                        id: "NC20953",
                                        title: "01串的变换",
                                        difficulty: 1000,
                                        tags: ["模拟", "字符串"],
                                        link: "https://ac.nowcoder.com/acm/problem/20953",
                                        description: "给定一个01串S，每次可以选择一个1，把它和相邻的0交换（只能交换一次）。问最多能交换多少次？",
                                        input_example: "10101",
                                        output_example: "2"
                                    },
                                    {
                                        id: "NC17241",
                                        title: "NOIP2009 分数线划定",
                                        difficulty: 800,
                                        tags: ["排序", "模拟"],
                                        link: "https://ac.nowcoder.com/acm/problem/17241",
                                        description: "给出n个考生的成绩和他们的考号，按分数从高到低排序，如果分数相同，则按考号从小到大排序，然后根据给定的分数线，输出分数大于等于分数线的人数和他们的分数。",
                                        input_example: "5 3\n1001 89\n1002 90\n1003 85\n1004 90\n1005 75",
                                        output_example: "4\n1002 90\n1004 90\n1001 89\n1003 85"
                                    }
                                ];
                                
                                // 根据日期选择题目
                                function getTodayProblem() {
                                    const today = new Date();
                                    const day = today.getDate();
                                    const month = today.getMonth() + 1;
                                    const year = today.getFullYear();
                                    
                                    // 使用日期作为索引，确保每天都有新题目
                                    const index = (day + month * 30 + (year - 2020) * 365) % problems.length;
                                    return problems[index];
                                }
                                
                                // 格式化难度标签
                                function formatDifficulty(difficulty) {
                                    let badgeClass = 'badge ';
                                    
                                    if (difficulty <= 900) {
                                        badgeClass += 'badge-success';
                                    } else if (difficulty <= 1200) {
                                        badgeClass += 'badge-info';
                                    } else if (difficulty <= 1500) {
                                        badgeClass += 'badge-primary';
                                    } else if (difficulty <= 1800) {
                                        badgeClass += 'badge-warning';
                                    } else {
                                        badgeClass += 'badge-danger';
                                    }
                                    
                                    return `<span class="${badgeClass}">难度: ${difficulty}</span>`;
                                }
                                
                                // 格式化标签
                                function formatTags(tags) {
                                    return tags.map(tag => `<span class="badge badge-secondary me-1">【${tag}】</span>`).join(' ');
                                }
                                
                                // 显示今天的问题
                                function displayTodayProblem() {
                                    const problem = getTodayProblem();
                                    const today = new Date();
                                    const dateStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
                                    
                                    document.getElementById('problem-title').textContent = `${problem.id}: ${problem.title}`;
                                    document.getElementById('today-date').textContent = dateStr;
                                    document.getElementById('problem-difficulty').innerHTML = formatDifficulty(problem.difficulty);
                                    document.getElementById('problem-tags').innerHTML = `知识点: ${formatTags(problem.tags)}`;
                                    document.getElementById('problem-description').textContent = problem.description;
                                    document.getElementById('problem-input').textContent = problem.input_example;
                                    document.getElementById('problem-output').textContent = problem.output_example;
                                    document.getElementById('problem-link').href = problem.link;
                                }
                                
                                // 页面加载时显示今天的问题
                                displayTodayProblem();
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

