# DexLab Admin

DexLab Admin 프로젝트에 오신 것을 환영해요. 지금의 프로젝트는 DexLab 서비스 관리를 위한 통합 어드민 프로젝트로써 프런트엔드를 담당하고 있습니다.

## 개발 환경
- Node.js 18 version
- TypeScript
- Next JS with the pnpm
- Tailwind CSS

## 🛠️ 설치 및 실행 방법

```
pnpm install
pnpm dev
```

## 📁 디렉토리 구조

프로젝트는 직관적이고 유지보수가 용이하도록 구성

```
root
├── public/               # 정적 파일 (이미지, 아이콘 등)
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── contexts/         # React Context API로 전역 상태 관리
│   ├── hooks/            # 커스텀 React Hooks
│   ├── layouts/          # 페이지에서 공통적으로 사용하는 레이아웃 관리
│   ├── utils/            # 유틸리티 함수 및 상수
│   ├── pages/            # Next.js 라우트 및 페이지 구성
│   └── styles/           # 글로벌 스타일 및 Tailwind 설정
├── .env.local            # 환경 변수 파일
├── tailwind.config.js    # TailwindCSS 설정 파일
├── next.config.js        # Next.js 설정 파일
├── tsconfig.json         # TypeScript 설정 파일
└── package.json          # 프로젝트 메타데이터
```

## 디렉토리 설명

- public/: 정적 자원을 관리합니다. (이미지, 폰트 등)
- src/components/: 재사용 가능한 UI 컴포넌트를 작성합니다.
- src/contexts/: 프로젝트에서 전역 상태를 공유할 때 작성합니다.
- src/hooks/: 커스텀 React Hooks를 작성합니다.
- src/layouts/: 페이지별로 사용하는 레이아웃을 작성합니다.
- src/utils/: API 요청, 상수, 헬퍼 함수 등을 포함합니다.
- src/pages/: Next.js의 라우트와 페이지를 정의합니다.
- src/styles/: 글로벌 CSS 및 Tailwind 관련 스타일을 관리합니다.


## 🌟 기타 참고 사항

이 프로젝트는 Next.js와 TailwindCSS를 기반으로 구축되었습니다.

프로젝트를 확장하거나 커스터마이징하려면, 각 디렉토리의 역할에 맞는 파일을 수정해주세요.

자세한 내용은 프로젝트 문서를 참고하거나 관리자에게 문의하세요.
