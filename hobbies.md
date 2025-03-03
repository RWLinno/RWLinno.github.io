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
                <!-- Daily NowCoder Problem -->
                <div class="row">
                    <div class="col-md-12">
                        <h5><i class="fas fa-code"></i> 每日牛客竞赛题</h5>
                        <div id="nowcoder-challenge" class="p-3 bg-light rounded">
                            <div id="problem-container">
                                <p class="mb-2">每天一道算法题，提升你的竞赛编程能力：</p>
                                <div id="nowcoder-problem" class="mt-3">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <span id="problem-date" class="text-muted"></span>
                                            <span id="problem-difficulty" class="badge badge-primary"></span>
                                </div>
                                        <div class="card-body">
                                            <h5 id="problem-title" class="card-title"></h5>
                                            <p id="problem-tags" class="card-text"></p>
                                            <div class="text-right">
                                                <a id="problem-link" href="#" target="_blank" class="btn btn-sm btn-primary">
                                                    <i class="fas fa-external-link-alt"></i> 查看完整题目
                                                </a>
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
                                            id: "NC23483",
                                            title: "小A的位运算",
                                            difficulty: 1300,
                                            tags: ["枚举"],
                                            link: "https://ac.nowcoder.com/acm/problem/23483"
                                        },
                                        {
                                            id: "NC15425",
                                            title: "gcd来了",
                                            difficulty: 1200,
                                            tags: ["数学", "GCD"],
                                            link: "https://ac.nowcoder.com/acm/problem/15425"
                                        },
                                        {
                                            id: "NC16429",
                                            title: "[NOIP2016]组合数问题",
                                            difficulty: 1500,
                                            tags: ["排列组合", "组合数学", "递推"],
                                            link: "https://ac.nowcoder.com/acm/problem/16429"
                                        },
                                        {
                                            id: "NC16596",
                                            title: "[NOIP2011]计算系数",
                                            difficulty: 1400,
                                            tags: ["排列组合", "组合数学", "二项式定理"],
                                            link: "https://ac.nowcoder.com/acm/problem/16596"
                                        },
                                        {
                                            id: "NC21302",
                                            title: "被3整除的子序列",
                                            difficulty: 1100,
                                            tags: ["动态规划", "过关题目"],
                                            link: "https://ac.nowcoder.com/acm/problem/21302"
                                        },
                                        {
                                            id: "NC22164",
                                            title: "更相减损术",
                                            difficulty: 900,
                                            tags: ["递归", "数学"],
                                            link: "https://ac.nowcoder.com/acm/problem/22164"
                                        },
                                        {
                                            id: "NC14583",
                                            title: "矩阵快速幂",
                                            difficulty: 1600,
                                            tags: ["快速幂", "矩阵"],
                                            link: "https://ac.nowcoder.com/acm/problem/14583"
                                        },
                                        {
                                            id: "NC20953",
                                            title: "01串的变换",
                                            difficulty: 1000,
                                            tags: ["模拟", "字符串"],
                                            link: "https://ac.nowcoder.com/acm/problem/20953"
                                        },
                                        {
                                            id: "NC17241",
                                            title: "NOIP2009 分数线划定",
                                            difficulty: 800,
                                            tags: ["排序", "模拟"],
                                            link: "https://ac.nowcoder.com/acm/problem/17241"
                                        },
                                        {
                                            id: "NC16618",
                                            title: "NOI2011 兔农",
                                            difficulty: 1700,
                                            tags: ["贪心", "数学"],
                                            link: "https://ac.nowcoder.com/acm/problem/16618"
                                        },
                                        {
                                            id: "NC16696",
                                            title: "铺地毯",
                                            difficulty: 900,
                                            tags: ["模拟", "暴力"],
                                            link: "https://ac.nowcoder.com/acm/problem/16696"
                                        },
                                        {
                                            id: "NC17716",
                                            title: "A+B问题（升级版）",
                                            difficulty: 1000,
                                            tags: ["高精度", "大数"],
                                            link: "https://ac.nowcoder.com/acm/problem/17716"
                                        },
                                        {
                                            id: "NC14579",
                                            title: "序列中删除数",
                                            difficulty: 1200,
                                            tags: ["贪心", "排序"],
                                            link: "https://ac.nowcoder.com/acm/problem/14579"
                                        },
                                        {
                                            id: "NC50246",
                                            title: "牛牛的背包问题",
                                            difficulty: 1100,
                                            tags: ["背包问题", "动态规划"],
                                            link: "https://ac.nowcoder.com/acm/problem/50246"
                                        },
                                        {
                                            id: "NC17258",
                                            title: "NOIP2010 数字统计",
                                            difficulty: 800,
                                            tags: ["模拟", "数学"],
                                            link: "https://ac.nowcoder.com/acm/problem/17258"
                                        },
                                        {
                                            id: "NC14638",
                                            title: "牛牛的排列",
                                            difficulty: 1300,
                                            tags: ["排列", "数学"],
                                            link: "https://ac.nowcoder.com/acm/problem/14638"
                                        },
                                        {
                                            id: "NC50256",
                                            title: "牛牛与数组",
                                            difficulty: 1200,
                                            tags: ["前缀和", "数组"],
                                            link: "https://ac.nowcoder.com/acm/problem/50256"
                                        },
                                        {
                                            id: "NC20123",
                                            title: "数组操作",
                                            difficulty: 900,
                                            tags: ["模拟", "数组"],
                                            link: "https://ac.nowcoder.com/acm/problem/20123"
                                        },
                                        {
                                            id: "NC50008",
                                            title: "回文子串",
                                            difficulty: 1400,
                                            tags: ["字符串", "回文", "动态规划"],
                                            link: "https://ac.nowcoder.com/acm/problem/50008"
                                        },
                                        {
                                            id: "NC51122",
                                            title: "二叉树的最大深度",
                                            difficulty: 900,
                                            tags: ["二叉树", "深度优先搜索"],
                                            link: "https://ac.nowcoder.com/acm/problem/51122"
                                        },
                                        {
                                            id: "NC51112",
                                            title: "链表的中间结点",
                                            difficulty: 800,
                                            tags: ["链表", "双指针"],
                                            link: "https://ac.nowcoder.com/acm/problem/51112"
                                        },
                                        {
                                            id: "NC51116",
                                            title: "最长递增子序列",
                                            difficulty: 1300,
                                            tags: ["动态规划", "二分查找"],
                                            link: "https://ac.nowcoder.com/acm/problem/51116"
                                        },
                                        {
                                            id: "NC51562",
                                            title: "最长公共子序列",
                                            difficulty: 1400,
                                            tags: ["动态规划", "字符串"],
                                            link: "https://ac.nowcoder.com/acm/problem/51562"
                                        },
                                        {
                                            id: "NC51455",
                                            title: "合并两个有序链表",
                                            difficulty: 800,
                                            tags: ["链表", "排序"],
                                            link: "https://ac.nowcoder.com/acm/problem/51455"
                                        },
                                        {
                                            id: "NC52545",
                                            title: "二叉树的层序遍历",
                                            difficulty: 1000,
                                            tags: ["二叉树", "广度优先搜索"],
                                            link: "https://ac.nowcoder.com/acm/problem/52545"
                                        },
                                        {
                                            id: "NC53458",
                                            title: "最小路径和",
                                            difficulty: 1200,
                                            tags: ["动态规划", "矩阵"],
                                            link: "https://ac.nowcoder.com/acm/problem/53458"
                                        },
                                        {
                                            id: "NC53862",
                                            title: "两数之和",
                                            difficulty: 800,
                                            tags: ["哈希表", "数组"],
                                            link: "https://ac.nowcoder.com/acm/problem/53862"
                                        },
                                        {
                                            id: "NC53785",
                                            title: "最长回文子串",
                                            difficulty: 1300,
                                            tags: ["字符串", "动态规划"],
                                            link: "https://ac.nowcoder.com/acm/problem/53785"
                                        },
                                        {
                                            id: "NC54512",
                                            title: "接雨水",
                                            difficulty: 1600,
                                            tags: ["栈", "双指针"],
                                            link: "https://ac.nowcoder.com/acm/problem/54512"
                                        },
                                        {
                                            id: "NC54786",
                                            title: "爬楼梯",
                                            difficulty: 900,
                                            tags: ["动态规划", "递归"],
                                            link: "https://ac.nowcoder.com/acm/problem/54786"
                                        },
                                        {
                                            id: "NC55452",
                                            title: "有效的括号",
                                            difficulty: 800,
                                            tags: ["栈", "字符串"],
                                            link: "https://ac.nowcoder.com/acm/problem/55452"
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
                                        return tags.map(tag => `<span class="badge badge-secondary mr-1">${tag}</span>`).join(' ');
                                    }
                                    
                                    // 显示今天的问题
                                    function displayTodayProblem() {
                                        const problem = getTodayProblem();
                                        const today = new Date();
                                        const dateStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
                                        
                                        document.getElementById('problem-date').textContent = `今日日期: ${dateStr}`;
                                        document.getElementById('problem-title').textContent = `${problem.id}: ${problem.title}`;
                                        document.getElementById('problem-difficulty').innerHTML = formatDifficulty(problem.difficulty);
                                        document.getElementById('problem-tags').innerHTML = `知识点: ${formatTags(problem.tags)}`;
                                        document.getElementById('problem-link').href = problem.link;
                                    }
                                    
                                    // 页面加载时显示今天的问题
                                    displayTodayProblem();
                            });
                        </script>
                        </div>
                    </div>
                </div>
                
                <!-- Daily Killer Sudoku -->
                <div class="row mt-4">
                    <div class="col-md-12">
                        <h5><i class="fas fa-puzzle-piece"></i> Daily Killer Sudoku</h5>
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

