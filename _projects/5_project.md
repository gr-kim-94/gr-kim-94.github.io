---
layout: page
title: RFICE 가상오피스 서비스
description: SwiftUI · Combine · Unity 연동 · WebRTC · Stomp WebSocket
img: projects/5_project.png
importance: 5
category: iOS
---

<span class="badge bg-danger">알서포트</span> <span class="badge bg-info text-dark">50% 기여</span>

**30명 (iOS 2명/팀원)** · **1년 6개월** · Swift · SwiftUI · Combine

Unity 연동과 채팅 개발 담당

---

### 오픈소스

Alamofire · StompClientLib (WebSocket) · GoogleSignIn · Firebase

---

### Server ↔ Native 구조

| 컴포넌트 | 역할 |
|----------|------|
| **WebSocketManager** | 서버 실시간 연결 유지 및 메시지 수신 |
| **ChatClient** | Space(팀)/DM(개인) 수신 메시지 분석 후 라우팅 처리 |

### Native ↔ Unity 구조

| 컴포넌트 | 역할 |
|----------|------|
| **UnityBridge** | Unity Engine 생명주기 관리, 프로토콜 인터페이스 구현 |
| **ChatListManager** | 최근/jump/new 3가지 메시지 로드 지원 |
| **Published 프로퍼티** | Native View, Unity View → ZStack 구조로 딜레이 없이 화면 즉시 전환 |

### 성과

- SwiftUI, Combine 도입
- Unity 엔진의 메모리 이슈 저하
- 사내 협업 도구로 베타 배포 성공
