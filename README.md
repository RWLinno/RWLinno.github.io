# Weilin Ruan's Personal Website

Personal academic website for **Weilin Ruan (阮炜霖)**, built with Jekyll and deployed through GitHub Pages.

- Website: [rwlinno.github.io](https://rwlinno.github.io)
- Main content: profile, news, research, publications, academic service, awards, experiences, hobbies, and CVs
- Default language: English
- Bilingual interface: English / 中文, with the choice saved in the browser

## 本次更新

- [x] 将个人身份从 `Incoming PhD Student @ CUHK CSE` 更新为 `PhD Student @ CUHK CSE`。
- [x] 在 HKUST(GZ) 教育经历中补充 Yuxuan Liang 教授和 CityMind Lab。
- [x] 将 ViST 更新为 ACM MM 2026 录用论文，补齐 7 位作者的 OpenReview 链接及论文链接。
- [x] 在 Latest News 顶部加入 ViST 录用动态，并按时间重新排序新闻。
- [x] 将 Publications 页面升级为 Research，加入 Publications 与 Academic Service。
- [x] 保留 `/publications/` 旧地址并自动跳转到 `/research/`，避免旧链接失效。
- [x] 加入人工维护的中英文切换，不使用第三方机器翻译；目前覆盖全站导航、个人卡片、主页核心内容、Research 页面和页脚。

## 当前数据基线

以下数字来自仓库内容或主页现有公开口径，后续更新时应同时更新“数值”和“核验日期”。

| 指标 | 当前值 | 数据来源 / 说明 |
| --- | ---: | --- |
| Publication records | 15 | `_publications/` 中的记录数 |
| 已录用 / 已发表论文记录 | 11 | 排除 4 条 Under Review 记录 |
| Pinned publications | 10 | publication front matter 中的 `pinned: true` |
| Latest News | 20 | `_data/news.yml` 中的动态数 |
| Academic service venues | 8 | 2 项 Program Committee + 6 项 Reviewer |
| Google Scholar citations | 100+ | 主页人工维护值，建议定期核验 |
| Awards | 20+ | 主页人工维护值，建议与 Awards 页统一口径 |
| CSDN followers | 3600+ | 主页人工维护值，建议定期核验 |
| 双语核心页面 | 2 / 8 | Home、Research；其余内容页尚未完整翻译 |
| Jekyll build | Pass | Jekyll 3.9.5 / GitHub Pages 231 本地构建通过 |

## 待审批改善建议

这些项目**尚未执行**。请按编号逐条审批，例如回复：`批准 I18N-01 和 SEO-01`。

| 编号 | 优先级 | 建议 | 预期收益 | 验收方式 |
| --- | --- | --- | --- | --- |
| I18N-01 | P0 | 为 Awards、Hobbies、Experiences、Links、Biography、Guestbook 补齐人工中文内容 | 实现真正的全站双语，而不是只翻译导航 | 8 / 8 内容页可一键完整切换 |
| DATA-01 | P0 | 为论文统一补充 `venue_full`、`accepted_date`、DOI、BibTeX、项目主页和代码状态字段 | 避免空链接、简称不一致和年份歧义 | 所有已录用论文字段完整率 100% |
| METRIC-01 | P0 | 把 citations、awards、followers 等统计集中到 `_data/metrics.yml`，加入 `last_verified` | 防止主页、README、CV 数字不一致 | 同一指标只有一个数据源，过期值有提示 |
| SEO-01 | P1 | 加入 Person、ScholarlyArticle、BreadcrumbList 的 JSON-LD 和统一 Open Graph 图片 | 改善搜索引擎与社交分享展示 | Rich Results 无结构化数据错误 |
| PERF-01 | P1 | 清理未使用的旧模板 CSS/JS，并评估自托管关键字体和图标 | 减少第三方请求、阻塞资源和历史包袱 | Lighthouse Performance ≥ 95，LCP ≤ 2.5 s |
| A11Y-01 | P1 | 做一次 WCAG 2.2 AA 审计，重点检查色彩对比、键盘导航、图片替代文本和 iframe 标题 | 提升可访问性与移动端可用性 | Lighthouse Accessibility ≥ 95，严重错误为 0 |
| PUB-01 | P1 | Research 页增加按年份分组、作者角色标记和 BibTeX 下载 | 方便审稿人、合作者快速浏览和引用 | 论文可按年份定位，每条可复制标准引用 |
| NEWS-01 | P2 | 首页仅展示最近 6–8 条动态，其余进入可展开归档或 News 页面 | 缩短首页、突出最新成果 | 首屏后滚动长度明显下降，旧动态仍可访问 |
| ANALYTICS-01 | P2 | 在明确隐私策略后接入轻量、隐私友好的访问统计 | 获得真实访问量、来源和热门页面 | 可查看 PV、UV、来源、设备和热门页面 |
| GUESTBOOK-01 | P2 | 完成 GitHub Discussions 与 Giscus 配置 | 让 Guestbook 从说明页变为可用留言区 | 无配置告警，可正常发帖与加载评论 |
| CONTENT-01 | P2 | 更新 Biography 和 Experiences 中已经过时的阶段描述 | 保证身份、研究方向与时间线一致 | 与最新 CV 逐项核对，无过期描述 |
| QA-01 | P2 | 在 GitHub Actions 中加入 HTML 校验、内部链接检查和 Lighthouse CI | 防止以后更新引入坏链接或性能回退 | 每次 PR 自动检查，内部坏链接为 0 |

## 建议持续跟踪的质量指标

| 类别 | 指标 | 建议目标 |
| --- | --- | --- |
| Web Vitals | LCP / INP / CLS | ≤ 2.5 s / ≤ 200 ms / ≤ 0.1 |
| Lighthouse | Performance / Accessibility / Best Practices / SEO | 每项 ≥ 95 |
| 内容质量 | 论文元数据完整率 | 100% |
| 链接质量 | 内部坏链接 / 外部失效链接 | 0 / 每月检查 |
| 双语完整度 | 已完整翻译内容页 | 8 / 8 |
| 数据新鲜度 | citations、followers 等人工指标 | 90 天内核验 |
| 稳定性 | 浏览器控制台错误 | 0 |
| 移动端 | 320 px 宽度横向溢出 | 0 |

## 本地开发

```bash
bundle install
bundle exec jekyll serve
```

访问 `http://127.0.0.1:4000/`。生产构建与 GitHub Actions 一致：

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## 内容维护约定

- 新论文：在 `_publications/` 新建 front matter 记录；不要保留空的 Paper 或 Code 按钮。
- 新动态：在 `_data/news.yml` 同时填写英文与人工校对后的中文。
- 新学术服务：更新 `_data/services.yml`；只有来源明确时才写年份。
- 新界面文案：在 `_data/i18n.yml` 同时补充 `en` 与 `zh`，并在页面使用 `data-i18n`。
- 新的长期统计：优先执行 `METRIC-01`，不要继续在多个页面硬编码同一个数字。
