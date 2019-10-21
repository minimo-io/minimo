<div class="container">
  {% for post in site.posts %}
      {% if post.categories contains "projects" %}

        {% if post.categories contains "code" %}

        {% else %}

          <article class="post-item">
            <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
            <div class="article-title">

                <a class="post-link project-{{ post.id_slug }}" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">
                  {{ post.title }}
                </a>

            </div>
          </article>

        {% endif %}

      {% endif %}
  {% endfor %}

  <br>

  {% for post in site.posts %}
      {% if post.categories contains "projects" %}

        {% if post.categories contains "code" %}

          <article class="post-item">
            <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
            <div class="article-title">
              <a class="post-link" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">

                {% if post.categories contains "code" %}<span class="aaa">[libraría]</span>{% endif %}
                {{ post.title }}
              </a>
            </div>
          </article>

        {% endif %}

      {% endif %}
  {% endfor %}



</div>
