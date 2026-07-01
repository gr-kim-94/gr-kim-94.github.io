---
layout: page
title: 월드컵 내기
description: 2026 FIFA 월드컵 캐주얼 내기 · 친목 도모 · 커피내기 · Next.js · Postgres · Vercel · Neon
img: projects/14_project.png
website: https://betting-worldcup.vercel.app
importance: 0
category: 사이드 프로젝트
purpose: "2026 FIFA 월드컵 경기 일정 기반 캐주얼 내기(betting pool) 웹 앱 개발"
highlights:
  - "닉네임 + 비밀번호 인증(bcrypt 해시, jose JWT httpOnly 쿠키 세션)으로 개인정보 없이 참여"
  - "football-data.org 피드 미러링 동기화 + Vercel Cron 적응형 스케줄링(핫 윈도우 5분, 스마트 스킵)"
  - "나라 필터 일정 리스트, 내기 생성(판돈·승자 규칙 선택), 초대 링크 참여, 승자 정산·결과 공유"
outcomes:
  - "스코어를 예측해 승자를 가리는 서비스로 직장·친구 사이 친목 도모"
  - "무료 API 티어 한도 내에서 대진 확정 시점 즉시 반영하는 동기화 체계 구축"
---

<span class="badge bg-secondary">사이드 프로젝트</span> <span class="badge bg-info">친목 도모</span> <span class="badge bg-info">커피내기</span>

**Next.js · Postgres · Vercel · Neon**

2026 FIFA 월드컵 경기 일정을 기반으로 직장·친구끼리 스코어를 예측해 승자를 가리는 캐주얼 내기(betting pool) 웹 앱

---

### 핵심 구현

- 닉네임 + 비밀번호 인증으로 개인정보 없이 참여할 수 있고, bcrypt 해시와 jose JWT httpOnly 쿠키 세션으로 인증 상태를 관리
- football-data.org 피드를 미러링해 사용자 접근 시 동기화하고, Vercel Cron 적응형 스케줄링(핫 윈도우 5분 주기, 스마트 스킵)으로 무료 API 티어 한도 내에서 대진 확정 시점을 즉시 반영
- 나라 필터 일정 리스트, 내기 생성(판돈·승자 규칙 선택), 초대 링크 참여, 승자 정산·결과 공유 기능을 제공
- 연장 포함·승부차기 제외(120분) 정산 규칙과 미확정 녹아웃 자동 게이트 처리를 완성

---

### 운영 및 품질

- 무료 API 티어 한도 내에서 대진 확정 시점을 즉시 반영하는 동기화 체계를 구축
- 스코어를 예측해 승자를 가리는 서비스로 직장·친구 사이 친목 도모에 활용

---

### Website

[월드컵 내기 바로가기](https://betting-worldcup.vercel.app)
