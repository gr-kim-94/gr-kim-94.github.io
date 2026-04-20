---
layout: page
title: 주식 시장 예측 (S&P500)
description: LightGBM · GARCH · Optuna · Kaggle Bronze · 평가 진행 중
importance: 4
category: AI
purpose: "S&P 500 일별 수익률 예측 및 리스크 조절 기반 안정적인 투자 전략 개발"
highlights:
  - "LightGBM 수익률 예측 + EWMA·GARCH 앙상블 리스크 예측 2트랙 모델 설계"
  - "Purge K-Fold 전략으로 시계열 Data Leakage 방지, Optuna 하이퍼파라미터 튜닝"
  - "Winsorization·Rank-Gauss·Robust Scaling 전처리 및 리스크 기반 투자 비중 결정"
outcomes:
  - "안정적인 시계열 모델 검증 구조 구축"
  - "S&P500 실제 주가 기반 성능 평가 진행 중 (~2026년 6월)"
---

<span class="badge bg-secondary">Kaggle</span> <span class="badge bg-secondary">🥈 Silver (진행 중 ~2026.06)</span>

**Hull Tactical - Market Prediction**

S&P 500 일별 수익률 예측 및 리스크 조절 기반 안정적인 투자 전략 개발

---

### 최종 모델

- **수익 예측 모델**: LightGBM
- **리스크 예측 모델**: LGBM + EWMA + GARCH 앙상블

주요 기술: Python · LightGBM · GARCH(arch) · Optuna · pandas · numpy · pytest

---

### 파이프라인

1. **수익률 예측**: 시장 방향성 예측 (LightGBM)
2. **리스크 대비 수익 정규화**
3. **리스크 예측**: 시장 불확실성 추정 (LGBM + EWMA + GARCH)
4. **안정적인 투자 비중 결정**

S&P500 실제 주가로 평가 진행 중 (~2026년 6월 16일)
