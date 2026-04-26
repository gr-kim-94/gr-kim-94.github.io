---
layout: page
title: 펫로그
description: 시니어펫 건강 케어 · Android · iOS · React Native · Expo · Supabase
img: projects/13_project.png
importance: 1
category: 사이드 프로젝트
purpose: "시니어펫 일일 건강 기록과 추이 확인을 위한 모바일 앱 개발 및 출시"
highlights:
  - "Expo Router와 Supabase를 조합해 인증, 온보딩, 탭 기반 사용자 흐름을 구현"
  - "이메일 · Google OAuth · Apple 로그인"
  - "10개 체크인 카테고리, 캘린더 기록 조회, 펫별 데이터 관리 기능"
outcomes:
  - "안드로이드 Play Store · iOS App Store 출시 완료"
  - "시니어펫 보호자 건강 체크리스트 관리 부담 완화"
---

<span class="badge bg-success">Play Store 출시</span> <span class="badge bg-success">App Store 출시</span> <span class="badge bg-secondary">사이드 프로젝트</span>

**React Native · Expo Router · Supabase**

반려견·반려묘의 식사량, 물 섭취, 배변, 호흡수, 활동성, 수면, 약 복용, 메모를 일 단위로 기록하고 최근 추이를 확인할 수 있는 모바일 앱
Expo Router 기반으로 iOS/Android/Web 라우팅을 구성

---

### 핵심 구현

- 이메일 로그인, 회원가입, 비밀번호 재설정, Google OAuth, Apple 로그인(iOS)
- 체크인은 `meal`, `water`, `stool`, `urine`, `breathing`, `cough`, `activity`, `sleep`, `medicine`, `memo` 10개 카테고리를 멀티 선택으로 기록할 수 있고, 기록 화면에서 날짜별 조회 및 수정이 가능
- 추이 화면은 최근 7·14·30일 데이터를 기준으로 식사량, 물 섭취, 호흡수를 시각화하며, 종/품종/나이/체중/기저질환을 반영한 개인화 기준을 계산
- 설정 화면에서 반려동물 추가·수정·삭제, 로그아웃, 계정 삭제를 지원하고, 계정 삭제는 Supabase Edge Function `delete-user`로 실제 사용자와 연관 데이터를 정리

---

### 운영 및 품질

- Supabase 테이블은 `profiles`, `pets`, `daily_records`로 구성되며 RLS를 적용해 사용자별 데이터 접근을 제한
- Supabase Management API 기반 SQL 마이그레이션을 실행
- 단위 테스트와 E2E 테스트를 구성

---

### App Store

[펫로그 다운로드](https://apps.apple.com/kr/app/%ED%8E%AB%EB%A1%9C%EA%B7%B8-%EC%8B%9C%EB%8B%88%EC%96%B4%ED%8E%AB-%EB%8D%B0%EC%9D%BC%EB%A6%AC-%EC%BC%80%EC%96%B4/id6762546544)