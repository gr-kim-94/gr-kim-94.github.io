---
layout: page
title: 딥페이크 이미지/영상 분류
description: PyTorch · SwinV2 · InsightFace · MTCNN · Hecto AI Challenge 상위 11%
importance: 3
category: AI
---

<span class="badge bg-secondary">Dacon</span> <span class="badge bg-warning text-dark">🏅 상위 11%</span>

**Hecto AI Challenge** · 단일 모델 필수 · 앙상블 불가 · TTA 불가

---

### 최종 모델

**Microsoft SwinV2-Small-Patch4-Window16-256** (ViT 아키텍처)

주요 기술: PyTorch · HuggingFace · InsightFace · MTCNN · OpenCV · scikit-image

---

### 전처리

1. 이미지/영상 분기 처리
2. 영상 균등 간격 프레임 추출 → SSIM 기반 중복 프레임 제거
3. InsightFace 1차 원거리 얼굴 검출
4. MTCNN 2차 근거리 얼굴 검출
5. 눈 좌표 기준 회전 보정

### 모델 선정 과정

| 모델            | 아키텍처 | 결과                                |
| --------------- | -------- | ----------------------------------- |
| Xception        | CNN      | ❌ 새로운 데이터 분포에 일반화 부족 |
| EfficientNet-B4 | CNN      | ❌ Xception 대비 성능 개선 없음     |
| SwinV2-Small    | ViT      | ✅ 최종 선택                        |

### AUC 성능 향상

| 모델             | 전략                   | AUC                 |
| ---------------- | ---------------------- | ------------------- |
| Xception         | FF++ Fine-tuning       | 0.6064              |
| Xception         | 전처리만 개선          | 0.6234 → 0.6528     |
| Xception         | 전처리 2단계 + GAP     | 0.7048 → 0.7480     |
| **SwinV2-Small** | **Power Mean Pooling** | **0.8317 → 0.8363** |

Power Mean Pooling: 가짜 확률 프레임에 가중치를 부여하는 영상 프레임 집계 전략
