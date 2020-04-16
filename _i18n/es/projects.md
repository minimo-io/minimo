<style>
div.projects-box article{ margin-bottom:2.5%; }
div.libs-box article{ margin-bottom:1%; }
div.projects-box article:last-child, div.libs-box article:last-child{
  margin-bottom:0;
}  
</style>
<div class="container">

  <div class="projects-box mt-3">
    {% for post in site.posts %}
        {% if post.categories contains "projects" %}

          {% if post.categories contains "code" %}

          {% else %}
            <article class="post-item">
              <div class="article-title">

                  <a class="post-link text-uppercase project-{{ post.id_slug }}" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">
                    {{ post.title }}
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
    <!-- <h2 class="over-title mt-4">Librerías</h2> -->

    {% for post in site.posts %}
        {% if post.categories contains "projects" %}

          {% if post.categories contains "code" %}

            <article class="post-item">
              <!-- <span class="post-meta date-label d-none d-lg-block">{{ post.date | date: "%m/%Y" }}</span> -->
              <div class="article-title">
                <a class="post-link" href="{{ post.url | prepend: site.baseurl | prepend: site.url }}" hreflang="{% if post.language %}{{post.language}}{% else %}es{% endif %}">

                  {% if post.categories contains "code" %}<span class="badge badge-light aaa">librería</span>{% endif %}
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
