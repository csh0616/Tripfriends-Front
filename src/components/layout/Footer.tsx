/**
 * components/layout/Footer.tsx
 * - 화면 하단 고정 영역(카피라이트 등)
 * - Zustand 스토어를 직접 호출하지 않습니다.
 */

export default function Footer() {
  return (
    <footer className="w-full px-6 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} Trip Friends. All rights reserved.
    </footer>
  );
}

