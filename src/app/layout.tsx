// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Noto_Serif_KR } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Providers from '@/app/providers';
// Header 컴포넌트 임포트 (만약 경로가 다르다면 승현님 프로젝트에 맞게 수정해주세요)
import Header from '@/components/layout/Header'; 

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const notoSerifKR = Noto_Serif_KR({ 
  weight: ['400', '700', '900'], 
  subsets: ['latin'], 
  variable: '--font-noto-serif-kr' 
});

export const metadata: Metadata = {
  title: 'TripFriends',
  description: 'Discover your next adventure with friends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifKR.variable}`}>
      <body>
        
        {/* 💡 전역 배경 이미지 레이어 */}
        <div 
          className="fixed inset-0 z-[-1] pointer-events-none opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1653959747793-c7c3775665f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2UlMjBhZXJpYWx8ZW58MXx8fHwxNzczOTk2NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* 💡 카카오맵 스크립트 추가 */}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />

        {/* 메인 앱 콘텐츠 */}
        <Providers>
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  );
}
