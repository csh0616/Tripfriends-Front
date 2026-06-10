<div align="center">

<img src="./public/images/logo.png" alt="TripFriends Logo" width="260" />

# TripFriends

친구들과 함께 떠나는 여행을 더 쉽고 똑똑하게 계획하는 AI 여행 플래너

<br />

<a href="https://tripfriends-front.vercel.app">
  <img src="https://img.shields.io/badge/Live%20Demo-TripFriends-FF5A00?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>

<br />
<br />

<img src="https://img.shields.io/badge/Next.js-16.2.1-000000?style=flat-square&logo=nextdotjs" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=000" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=fff" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS" />

</div>

<br />

## Overview

**TripFriends**는 여행을 함께 떠나는 사람들의 일정, 예산, 취향을 기반으로 맞춤형 여행 코스를 추천하는 웹 애플리케이션입니다.

사용자는 출발지, 목적지, 여행 날짜, 인원, 예산, 여행 스타일을 입력하고, 생성된 여행 일정을 지도와 함께 확인할 수 있습니다.

<br />

## Live Demo

👉 [https://tripfriends-front.vercel.app](https://tripfriends-front.vercel.app)

<br />

## Key Features

- 여행 출발지, 목적지, 날짜, 인원, 관계, 예산 입력
- 여행 카테고리 선택
- 음식, 자연, 문화, 쇼핑, 야간활동 등 취향 기반 스타일 선택
- 백엔드 API와 연동한 여행 일정 생성
- 일자별 추천 장소 및 일정 확인
- Kakao Maps 기반 장소 마커와 경로 표시
- React Query 기반 생성 결과 관리
- Zustand 기반 단계별 플래너 상태 관리
- Glassmorphism 스타일의 여행 서비스 UI

<br />

## User Flow

```text
여행 정보 입력
  → 여행 카테고리 선택
  → 선호 스타일 선택
  → 추천 일정 생성
  → 지도에서 일자별 코스 확인
  → 예약 및 상세 정보 확인
```

<br />

## Tech Stack

| Area | Stack |
| --- | --- |
| Framework | Next.js |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Server State | TanStack React Query |
| Map | Kakao Maps SDK |
| Deployment | Vercel |

<br />

## Project Structure

```text
src
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components
│   └── layout
│       ├── Header.tsx
│       └── Footer.tsx
├── features
│   └── trip-planner
│       ├── api
│       ├── components
│       ├── map
│       ├── steps
│       └── utils
└── store
    └── useTripStore.ts
```

<br />

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 값을 설정합니다.

```env
NEXT_PUBLIC_API_BASE_URL=your_backend_api_url
NEXT_PUBLIC_KAKAO_MAP_CLIENT_KEY=your_kakao_map_javascript_key
```

### Run Development Server

```bash
npm run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000
```

<br />

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |

<br />

## API Integration

여행 일정 생성은 백엔드 API와 연동되어 동작합니다.

```text
POST /api/v1/plans/generate
```

생성된 일정 데이터는 React Query 캐시에 저장되며, 이후 일정 미리보기 화면에서 지도와 함께 렌더링됩니다.

<br />

## Roadmap

- [ ] 다국어 전환 기능 연결
- [ ] 예약 확인 화면 완성
- [ ] 추천 일정 후보 비교 기능 개선
- [ ] 지도 경로 표시 예외 처리 개선
- [ ] 반응형 UI 디테일 보강
- [ ] 테스트 코드 추가

<br />

## Author

**Seunghyun**

<br />

## License

이 프로젝트는 개인 학습 및 포트폴리오 목적으로 제작되었습니다.
