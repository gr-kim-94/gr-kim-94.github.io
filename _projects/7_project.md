---
layout: page
title: SK C&C 사내 앱 250개 운영
description: iOS 파트 리더 · QA 프로세스 개선 · Firebase Hosting · Objective-C · Swift
importance: 7
category: iOS
---

<span class="badge bg-warning text-dark">포커스원</span> <span class="badge bg-info text-dark">70% 기여</span>

**15명 (iOS 2명/리더)** · **1년** · Objective-C · Swift · AppGroups

유지보수 · 신규 개발 · 자체 개선

---

### 유지보수

- 프로비저닝 인증서 갱신 (연 1회) · 신규 OS 버전 대응 · 코드레이 보안 검사 PASS
- 싱크보드(파일뷰어) 앱: 보안문서 메일 전송 제한, 네트워크 유실 시 로직 개선

### TokTokTV 신규 개발

- 동영상 뷰어 웹앱(WKWebView) 개발
- 파일 비동기 다운로드 로직과 파일 미리보기 화면 개발

### 자체 개선 — QA 배포 프로세스 혁신

**기존 문제**: IPA 파일 직접 전달 → QA 팀이 각 디바이스를 USB로 연결해 iTunes 설치 후 QA 진행, 지연 발생

**해결**: Firebase Hosting 기반 웹 배포로 전환

- QA 팀에서 디바이스 연결 없이 웹으로 접속하여 QA 진행 가능
- 단일 빌드 기반의 서버 전환 기능을 개발하여 재빌드 리소스 제거

**성과**

- 빌드 및 QA 리드타임 단축하여 전체 파이프라인 효율성 극대화
- 개선된 배포 방식을 **타 부서 QA 표준 가이드라인으로 채택 및 도입**
