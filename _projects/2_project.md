---
layout: page
title: Multi-Agent RAG 강의 자료 챗봇
description: LangGraph · Qdrant · PostgreSQL · Ragas 평가 · PM/팀장
img: projects/2_project.png
importance: 2
category: AI
---

<span class="badge bg-primary">SK 네트웍스 FAMILY AI 캠프</span> <span class="badge bg-warning text-dark">60% 기여</span>

**4명 (PM/팀장)** · **4일** · Python · LangGraph · FastAPI · PostgreSQL · Qdrant

프로젝트 설계와 생성 Agent, 후반 고도화 담당

---

### 주요 구현

| 영역 | 내용 | 성과 |
|------|------|------|
| **LangGraph 설계** | Route Node 분기 (Score 0.3~0.5)<br/>Long-Term Memory → Summary → 검색, 쿼리 재작성 | 정확한 출처 기반 답변, 모호한 질문에도 답변 |
| **VectorDB 고도화** | Markdown Cell + Code Cell 병합 | 예제 코드 포함 답변으로 정확도 향상 |
| **RAG 고도화** | Heuristic Ranking → ReRanker Model 도입 | No data 응답 감소 |
| **생성 Agent** | RAG 문서 강한 제약 해제 | 정성평가에서 다양한 답변 제공 |

---

### Ragas 정량 평가 성과

| 지표 | 기존 | 고도화 후 |
|------|------|----------|
| Recall | 1.0 | 0.86 |
| Relevancy | 0.69 | **0.84** |

고도화 ver. 정성평가에서도 성능 향상 확인
