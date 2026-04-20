---
layout: page
title: RemoteMeeting 기업용 화상회의
description: Swift 마이그레이션 · AI 회의록 · MQTT · WebRTC · Lottie 애니메이션
img: projects/6_project.png
importance: 6
category: iOS
purpose: "화상회의 품질·보안·UX 개선 및 Objective-C 코드베이스의 Swift 전환"
highlights:
  - "Objective-C → Swift 100% 전환, TDD 기반 Unit Test 선행으로 사이드 이슈 최소화"
  - "STT 회의록을 LLM에 전달하는 AI 요약 기능, MQTT 하이브리드 스트리밍 수신 구조 설계"
  - "Lottie 벚꽃 리액션 애니메이션, 회의실 잠금 비밀번호 기반 접근 제어 구현"
outcomes:
  - "Swift 100% 전환으로 코드 가독성·개발 생산성 향상, 복잡한 레이아웃 제약 제거로 크래시 감소"
  - "신규 참가자 회의 맥락 파악 경험 개선, 전 클라이언트 일관된 리액션 애니메이션 제공"
---

<span class="badge bg-danger">알서포트</span> <span class="badge bg-info text-dark">40% 기여</span>

**25명 (iOS 2명/팀원)** · **2년** · Objective-C · Swift

Swift 마이그레이션 · 회의록 AI 요약 · 화상회의 리액션 기능 담당

---

### 오픈소스

AFNetworking · SRWebSocket · MQTTClient · GoogleMLKit · Firebase · SDWebImage

---

### 주요 구현

**Swift 마이그레이션**

- 기존 80% Objective-C 코드를 TDD 기반 Unit Test 선행으로 사이드 이슈 최소화
- UIStackView 리팩토링을 통해 복잡한 layout constraints 제거
- 결과: 100% Swift 전환, 유지보수 용이, UI 사이드 이슈 감소

**회의록 AI 요약**

- Server API ↔ MQTT 하이브리드 통신으로 실시간 Streaming 수신
- AI 응답 완료 시점을 [DONE] 시그널로 UI 상태 전환
- Cell 높이 캐싱을 활용해 스크롤 성능 최적화

**화상회의 리액션**

- Lottie 이미지 플로팅 애니메이션 (아래에서 위로 벚꽃이 살랑 올라가는 효과)
- 사이즈 · 속도 · 회전 · 방향 등 랜덤 값들의 범위를 디자이너와 커스터마이징
- 디자인 알고리즘 문서화 후 Android 파트에 전달하여 **UI 일관성 확보**
