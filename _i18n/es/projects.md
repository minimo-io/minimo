<div class="container">
  {% for post in site.posts %}
      {% if post.categories contains "projects" %}
        <article class="post-item">
          <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
          <div class="article-title">
            <a class="post-link" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">

              {% if post.language == "en" %}<span class="aaa">[{{post.language}}]</span>{% endif %}
              {% if post.categories contains "code" %}<span class="aaa">[código]</span>{% endif %}
              {{ post.title }}
            </a>
          </div>
        </article>
      {% endif %}
  {% endfor %}
</div>
