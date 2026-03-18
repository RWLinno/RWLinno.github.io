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

                {% if site.giscus.enabled and site.giscus.repo_id and site.giscus.category_id %}
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
                    <div class="mt-2">
                        Please set `giscus.repo_id` and `giscus.category_id` in `_config.yml` after enabling GitHub Discussions for your repository.
                    </div>
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
