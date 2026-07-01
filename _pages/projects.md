---
layout: page
title: projects
permalink: /projects/
description: AI 및 iOS 개발 프로젝트 모음
nav: true
nav_order: 3
display_categories: [AI, iOS, 사이드 프로젝트]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 카테고리 점프 네비게이션 -->
  <div class="project-jump-sentinel" aria-hidden="true"></div>
  <nav class="project-jump-nav" aria-label="프로젝트 카테고리 바로가기">
    {% for category in page.display_categories %}
      <a class="project-jump-link" href="#{{ category }}">{{ category }}</a>
    {% endfor %}
  </nav>
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 g-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 g-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<script>
  (function () {
    const sentinel = document.querySelector(".project-jump-sentinel");
    const nav = document.querySelector(".project-jump-nav");

    // 1) 상단 고정(pinned) 상태 감지 → full-bleed 배경 토글
    if (sentinel && nav && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          nav.classList.toggle("is-pinned", !entries[0].isIntersecting);
        },
        { rootMargin: "-57px 0px 0px 0px", threshold: 0 },
      );
      observer.observe(sentinel);
    }

    // 2) 스크롤 위치에 따라 해당 카테고리 pill 버튼 활성화(scrollspy)
    const links = Array.prototype.slice.call(
      document.querySelectorAll(".project-jump-link"),
    );
    if (!links.length) return;

    function safeDecode(value) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return value; // 잘못된 % 시퀀스여도 scrollspy가 중단되지 않도록 방어
      }
    }

    const pairs = [];
    links.forEach(function (link) {
      const raw = (link.getAttribute("href") || "").slice(1);
      const target =
        document.getElementById(safeDecode(raw)) ||
        document.getElementById(raw);
      if (target) pairs.push({ link: link, target: target });
    });
    if (!pairs.length) return;

    const OFFSET = 140; // 고정 네비게이션 바 + pill 바 높이 및 scroll-margin 보정

    function updateActive() {
      let current = pairs[0];
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i].target.getBoundingClientRect().top - OFFSET <= 0) {
          current = pairs[i];
        }
      }
      links.forEach(function (link) {
        link.classList.toggle("is-active", link === current.link);
      });
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
  })();
</script>
