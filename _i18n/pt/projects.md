<div class="container">
  <div class="projects-box mt-3">
    {% for post in site.posts %}
        {% if post.categories contains "projects" %}

          {% if post.categories contains "code" %}

          {% else %}
            <article class="post-item">
              <div class="article-title">

                  <a class="post-link text-uppercase project-box project-{{ post.id_slug }}" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">
                    #{{ post.project_number }}&#8901;{{ post.title }}
                  </a>
                  <span>{{ post.description }}</span>
              </div>

            </article>
          {% endif %}

        {% endif %}
    {% endfor %}
  </div>

<br><hr><br>
  <div class="libs-box">
    {% for post in site.posts %}
        {% if post.categories contains "projects" %}

          {% if post.categories contains "code" %}

            <article class="post-item pt-2">
              <!-- <span class="post-meta date-label">{{ post.date | date: "%m/%Y" }}</span> -->
              <div class="article-title">
                <a class="post-link" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">

                  {% if post.categories contains "code" %}<span class="badge badge-light aaa">livraria</span>{% endif %}
                  {{ post.title }}
                </a>
                <span>{{ post.description }}</span>
              </div>
            </article>

          {% endif %}

        {% endif %}
    {% endfor %}
  </div>
</div>
