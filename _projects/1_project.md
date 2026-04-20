---
layout: page
title: 한국 여행지 추천 서비스
description: Multi-Agent RAG · LangGraph · Qdrant · AWS · 1위 수상
img: projects/1_project.png
importance: 1
category: AI
---

<span class="badge bg-primary">SK 네트웍스 FAMILY AI 캠프</span> <span class="badge bg-success">🏆 1위 수상</span>

**5명 (팀장/AI&Backend)** · **2개월** · Python · DBML · React

아키텍처 설계와 AWS 구축, 데이터 전처리 및 LangGraph 챗봇 담당

---

### 오픈소스

LangGraph · FastAPI · MySQL · Qdrant · GoogleSignIn

---

### LangGraph 설계

| 노드               | 역할                                              |
| ------------------ | ------------------------------------------------- |
| **Intent Agent**   | 사용자 질의 의도 분석, 다음 노드 결정             |
| **Planner Agent**  | 여행 일정 수립                                    |
| **Retriever Node** | SparseDB, 이미지·텍스트 하이브리드 검색, Reranker |
| **Executor Node**  | 최종 답변 출력                                    |

### 데이터 전처리

- 결측치 제거
- JSON 데이터를 LLM으로 정서적 데이터 보강
- 이미지는 photos Collection에 별도 저장

### Embedding Model

| 모델       | 용도             | 특징                                        |
| ---------- | ---------------- | ------------------------------------------- |
| **CLIP**   | Vision Embedding | 이미지·텍스트 교차 검색, 추상적 문장 검색   |
| **BGE-M3** | Text Embedding   | 다국어 지원, Sparse DB, CLIP 영어 한계 보완 |

### 아키텍처

- HTTPS + Route 53 / DB: RDS + Qdrant + S3 / CI/CD: GitHub Actions
