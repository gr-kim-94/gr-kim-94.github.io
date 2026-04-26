// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-history",
          title: "history",
          description: "경력 및 교육 이력",
          section: "Navigation",
          handler: () => {
            window.location.href = "/history/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "AI 및 iOS 개발 프로젝트 모음",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-activities",
          title: "activities",
          description: "수상, 대회, 봉사활동 및 기타 활동",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "projects-차비서",
          title: '차비서',
          description: "차량 정비 관리 · iOS · SwiftUI · SwiftData · Charts · View-driven 아키텍처",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-삼호건설-s-mbass",
          title: '삼호건설 S-mBASS',
          description: "DB · Objective-C · SQLite",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-서울도시가스-장비-입출고-관리",
          title: '서울도시가스 장비 입출고 관리',
          description: "바코드 인식 · 실시간 장비 입출고 · Objective-C · ZXingObjC · AVFoundation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-펫로그",
          title: '펫로그',
          description: "시니어펫 건강 케어 · Android · iOS · React Native · Expo · Supabase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-한국-여행지-추천-서비스",
          title: '한국 여행지 추천 서비스',
          description: "Multi-Agent RAG · LangGraph · Qdrant · AWS · 1위 수상",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-multi-agent-rag-강의-자료-챗봇",
          title: 'Multi-Agent RAG 강의 자료 챗봇',
          description: "LangGraph · Qdrant · PostgreSQL · Ragas 평가 · PM/팀장",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-딥페이크-이미지-영상-분류",
          title: '딥페이크 이미지/영상 분류',
          description: "PyTorch · SwinV2 · InsightFace · MTCNN · Hecto AI Challenge 상위 11%",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-주식-시장-예측-s-amp-p500",
          title: '주식 시장 예측 (S&amp;amp;P500)',
          description: "LightGBM · GARCH · Optuna · Kaggle Bronze · 평가 진행 중",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-rfice-가상오피스-서비스",
          title: 'RFICE 가상오피스 서비스',
          description: "SwiftUI · Combine · Unity 연동 · WebRTC · Stomp WebSocket",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-remotemeeting-기업용-화상회의",
          title: 'RemoteMeeting 기업용 화상회의',
          description: "Swift 마이그레이션 · AI 회의록 · MQTT · WebRTC · Lottie 애니메이션",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-sk-c-amp-c-사내-앱-150개-운영",
          title: 'SK C&amp;amp;C 사내 앱 150개 운영',
          description: "iOS 파트 리더 · QA 프로세스 개선 · Firebase Hosting · Objective-C · Swift · AppGroups",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-마이홈플러스-스토리-개발",
          title: '마이홈플러스 스토리 개발',
          description: "비디오 스트리밍 최적화 · 재생 딜레이 3~5s→0.5s · Objective-C · AVPlayer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-앞바르여행",
          title: '앞바르여행',
          description: "제주도 해안도로 경로 추천 · iOS · Swift · NMapsMap · Kakao Local API · Firebase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%75%75%6C%6C%6C@%6E%61%76%65%72.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gr-kim-94", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://itstudentstudy.tistory.com", "_blank");
        },
      },];
