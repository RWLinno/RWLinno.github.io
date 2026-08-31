# Weilin RUAN's Personal Website

Personal academic website for **Weilin RUAN (阮炜霖)**, built with Jekyll and deployed through GitHub Pages.

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
- [x] Academic Service 加入 EMNLP 与 TPAMI Reviewer，当前统一展示 10 个 Reviewer venues。
- [x] 采纳 NEWS-01：主页默认展示 6 条动态和 3 篇精简论文，其余内容可展开。
- [x] 采纳 A11Y-01：加入跳转正文、语义化标题、键盘菜单、44px 移动端触控目标、图片尺寸和 iframe 标题。
- [x] 采纳 PERF-01：移除 5 个第三方运行时脚本，将 Bootstrap 与 Font Awesome 改为本地静态资源，并排除未使用的旧模板资产。
- [x] 采纳 METRIC-01：主页人工统计统一由 `_data/metrics.yml` 提供，并记录 `last_verified`。
- [x] CV 预览版移除独立 Project Experience，将 VQA Cleaner、OnCallAgent 和 ST-LoRA 合并到对应实习/科研经历，并同步中英文引用量为 200+。
- [x] 将 GSTRL 更新为 CIKM 2026 录用论文，并新增 GenRouter 图像生成预印本到 Latest News、Research 与 CV 预览。
- [x] 8 月新增 IEEE TPAMI Reviewer 学术服务，并同步更新中英文 CV 预览源。

## 当前数据基线

以下数字来自仓库内容或主页现有公开口径，后续更新时应同时更新“数值”和“核验日期”。

| 指标 | 当前值 | 数据来源 / 说明 |
| --- | ---: | --- |
| Publication records | 16 | `_publications/` 中的记录数 |
| 已录用 / 已发表论文记录 | 12 | 排除 4 条 Under Review / Preprint 记录 |
| Pinned publications | 12 | publication front matter 中的 `pinned: true` |
| Latest News | 24 | `_data/news.yml` 中的动态数 |
| Academic service venues | 10 | Research 页统一展示为 Reviewer，不标注年份 |
| 人工维护统计 | Canonical data source | citations、awards、followers 与核验日期统一存放在 `_data/metrics.yml` |
| 双语核心页面 | 2 / 8 | Home、Research；其余内容页尚未完整翻译 |
| 默认主页列表 | 6 条动态 / 3 篇论文 | 支持键盘操作的渐进展开，完整论文链接至 Research |
| 首页运行时 JavaScript | 1 个本地脚本 | 不再加载 jQuery、Lazy、Popper、Bootstrap JS、GitHub Buttons |
| Jekyll build | Pass | Jekyll 3.9.5 / GitHub Pages 231 本地构建通过 |

## 待审批改善建议

这些项目**尚未执行**。请按编号逐条审批，例如回复：`批准 I18N-01 和 SEO-01`。

| 编号 | 优先级 | 建议 | 预期收益 | 验收方式 |
| --- | --- | --- | --- | --- |
| I18N-01 | P0 | 为 Awards、Hobbies、Experiences、Links、Biography、Guestbook 补齐人工中文内容 | 实现真正的全站双语，而不是只翻译导航 | 8 / 8 内容页可一键完整切换 |
| DATA-01 | P0 | 为论文统一补充 `venue_full`、`accepted_date`、DOI、BibTeX、项目主页和代码状态字段 | 避免空链接、简称不一致和年份歧义 | 所有已录用论文字段完整率 100% |
| SEO-01 | P1 | 加入 Person、ScholarlyArticle、BreadcrumbList 的 JSON-LD 和统一 Open Graph 图片 | 改善搜索引擎与社交分享展示 | Rich Results 无结构化数据错误 |
| PUB-01 | P1 | Research 页增加按年份分组、作者角色标记和 BibTeX 下载 | 方便审稿人、合作者快速浏览和引用 | 论文可按年份定位，每条可复制标准引用 |
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
- 新学术服务：更新 `_data/services.yml`；统一按 Reviewer 维护，不展示年份。
- 新界面文案：在 `_data/i18n.yml` 同时补充 `en` 与 `zh`，并在页面使用 `data-i18n`。
- 新的长期统计：只更新 `_data/metrics.yml`，并在需要时同步重新生成 CV，避免在页面和 README 中重复硬编码。

## CV 维护

- 仓库中的 `CV/` 是唯一维护源；Downloads 目录中的旧副本不再同步。
- `CV/cv.tex` 是面向基础模型研究实习的英文两页预览源，按教育、实习/科研、论文、竞赛、荣誉、技术能力、学术服务与本科经历的优先级展示；论文条目应保持统一字体与条目格式，独立项目章节默认不编译。
- `CV/CV_zh.tex` 是中文两页预览源，结构和关键信息应与英文版同步更新。
- `file/CV_en_preview.pdf` 和 `file/CV_zh_preview.pdf` 仅供审批，不替换网站当前链接的正式 CV；审批通过后再发布为正式版。

```bash
cd CV
latexmk -xelatex cv.tex
latexmk -xelatex CV_zh.tex
```
