---
layout: page
title: 마이홈플러스 스토리 개발
description: 비디오 스트리밍 최적화 · 재생 딜레이 3~5s→0.5s · Objective-C · AVPlayer
img: projects/8_project.png
importance: 8
category: iOS
---

<span class="badge bg-warning text-dark">포커스원</span> <span class="badge bg-info text-dark">80% 기여</span>

**10명 (iOS 2명/리더)** · **6개월** · Objective-C

유지보수 · 스토리(리뷰) 게시판 추가 개발 담당 (관리자 메뉴 · 이벤트 보조)

---

### 오픈소스

AFNetworking · Firebase · KakaoLink · TOCropViewController · SDWebImage

---

### 비디오 스트리밍 최적화

**문제**: 스크롤 시 버벅임, 비디오 자동 재생 딜레이 3~5초

**해결**:
1. 서버로부터 비디오 데이터를 Chunk 단위로 요청
2. AVPlayer에 실시간으로 전달하여 Streaming 로직 구축 → 초기 재생 대기 시간 축소
3. NSURLSession을 직접 관리하면서 Cell 재사용 메모리 관리 로직 구축

**결과**: 재생 딜레이 **3~5s → 0.5s**, 스크롤 버벅임 제거

---

### 기타 개발

**첨부파일 비동기 직렬화**
- n개 첨부파일 서버로 병렬 업로드 진행
- 순서 보장 업로드 직렬화 파이프라인 구축

**이벤트 및 관리자 모드**
- 관리자 타임세일 이벤트 등록
- 룰렛 이벤트 구현 (파이 개수별 랜덤 360도 × 도착 위치 범위 계산)

**유지보수**
- UIWebView → WKWebView 전환
- TAS 대용량 푸시 전체 프로세스 개발
- AppSolid 보안 솔루션 적용
