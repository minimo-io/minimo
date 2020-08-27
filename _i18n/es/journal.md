<div class="container">
  {% for post in site.posts %}
    {% if post.categories contains "article" %}

      {% unless post.next %}
        <h2 class="category-title basic-mono">{{ post.date | date: '%Y' }}</h2>
      {% else %}
        {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
        {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
        {% if year != nyear %}
          <h2 class="category-title basic-mono">{{ post.date | date: '%Y' }}</h2>
        {% endif %}
      {% endunless %}
      <article class="post-item">
        <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
        <div class="article-title">
          <a class="post-link" href="{{ post.url | prepend: site.url }}">

            {% if post.categories contains "proyectos" %}<span class="aaa">[proyecto]</span>{% endif %}
            {{ post.title }}
          </a>
        </div>
      </article>
    {% endif %}
  {% endfor %}
</div>
