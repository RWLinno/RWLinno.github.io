---
layout: default
title: Guestbook
navbar_title: Guestbook
---

<div class="row mt-4">
    <div class="col">
        <div class="card border-0 shadow-sm bg-white">
            <div class="card-body">
                <h4 class="card-title">
                    <i class="fas fa-comments"></i> Guestbook
                </h4>
                <p class="text-muted">
                    Welcome to leave your thoughts, suggestions, or collaboration ideas.
                </p>

                {% assign giscus_ready = site.giscus.enabled and site.giscus.installed and site.giscus.repo_id != "" and site.giscus.category_id != "" %}
                {% if giscus_ready %}
                <script src="https://giscus.app/client.js"
                        data-repo="{{ site.giscus.repo }}"
                        data-repo-id="{{ site.giscus.repo_id }}"
                        data-category="{{ site.giscus.category }}"
                        data-category-id="{{ site.giscus.category_id }}"
                        data-mapping="{{ site.giscus.mapping }}"
                        data-strict="{{ site.giscus.strict }}"
                        data-reactions-enabled="{{ site.giscus.reactions_enabled }}"
                        data-emit-metadata="{{ site.giscus.emit_metadata }}"
                        data-input-position="{{ site.giscus.input_position }}"
                        data-theme="{{ site.giscus.theme }}"
                        data-lang="{{ site.giscus.lang }}"
                        crossorigin="anonymous"
                        async>
                </script>
                {% else %}
                <div class="alert alert-warning mb-0" role="alert">
                    <strong>Guestbook is not fully configured yet.</strong>
                    <div class="mt-2 mb-2">
                        Current issue: <code>giscus is not installed on this repository</code>.
                    </div>
                    <div>
                        1) Enable GitHub Discussions for this repository.<br>
                        2) Install the Giscus GitHub App to <code>RWLinno.github.io</code>.<br>
                        3) Fill <code>giscus.repo_id</code> and <code>giscus.category_id</code> in <code>_config.yml</code>.<br>
                        4) Set <code>giscus.installed: true</code> and redeploy.
                    </div>
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
