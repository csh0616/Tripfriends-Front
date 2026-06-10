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

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs" alt="Next.js" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel" alt="Vercel" />

</div>

<br />

## Overview

**TripFriends**는 여행을 함께 떠나는 사람들의 일정, 예산, 취향을 바탕으로 맞춤형 여행 코스를 추천하는 웹 애플리케이션입니다.

사용자는 여행 기본 정보를 입력하고, 원하는 여행 카테고리와 선호 스타일을 선택한 뒤, 추천된 일정을 지도와 함께 확인할 수 있습니다.

<br />

## Live Demo

👉 [https://tripfriends-front.vercel.app](https://tripfriends-front.vercel.app)

<br />

## Preview

<img src="./public/images/logo.png" alt="TripFriends Preview" width="100%" />

<br />

## Key Features

- 여행 출발지, 목적지, 날짜, 인원, 관계, 예산 입력
- 여행 카테고리 기반 일정 추천
- 음식, 자연, 문화, 쇼핑, 야간활동 등 취향 기반 스타일 선택
- 일자별 추천 장소 및 일정 확인
- 지도 기반 장소 마커와 이동 경로 시각화
- 단계별 플래너 UI 제공
- 반응형 레이아웃과 glassmorphism 스타일 적용

<br />

## User Flow

```text
여행 정보 입력
  → 여행 카테고리 선택
  → 선호 스타일 선택
  → 추천 일정 확인
  → 지도에서 일자별 코스 확인
```

<br />

## Tech Stack

| Area | Stack |
| --- | --- |
| Framework | Next.js |
| UI Library | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Server State | TanStack React Query |
| Map | Kakao Maps |
| Deployment | Vercel |

<br />

## Project Structure

```text
src
├── app
├── components
│   └── layout
├── features
│   └── trip-planner
│       ├── api
│       ├── components
│       ├── map
│       ├── steps
│       └── utils
└── store
```

<br />

## What I Focused On

- 사용자가 여행 계획을 단계적으로 완성할 수 있는 플로우 설계
- 입력 정보와 취향 선택을 기반으로 한 일정 추천 경험 구현
- 지도와 일정 정보를 함께 보여주는 직관적인 UI 구성
- 전역 상태와 서버 상태를 분리해 관리하는 구조 설계
- 기능 단위로 폴더를 나누어 유지보수하기 쉬운 구조 구성

<br />

## Screens

> 실제 서비스 화면 이미지를 추가하면 더 완성도 높은 README가 됩니다.

```md
<img src="./docs/main-screen.png" alt="TripFriends Main Screen" width="100%" />
```

<br />

## Future Improvements

- 다국어 전환 기능 고도화
- 추천 일정 후보 비교 기능 개선
- 예약 확인 화면 완성
- 지도 경로 표시 안정성 개선
- 모바일 화면 디테일 보강
- 테스트 코드 추가

<br />

## Author

**Seunghyun**

<br />

## License

이 프로젝트는 개인 학습 및 포트폴리오 목적으로 제작되었습니다.


