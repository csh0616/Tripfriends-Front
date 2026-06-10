// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

// 💡 1. 지원할 언어 목록을 정의합니다. (각자 자신의 언어로 표기)
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
];

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]); // 기본값 English

  // 💡 2. 로고 클릭 시 홈으로 이동 + 상태 확실하게 초기화 (강제 새로고침 효과)
  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 h-20 bg-transparent font-body">
      
      {/* 1. TripFriends 로고 */}
      <div 
        className="flex items-center cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
        onClick={handleHomeClick}
      >
        <Image 
          src="/images/logo.png" 
          alt="TripFriends Logo" 
          width={180} 
          height={100} 
          priority 
          className="object-contain" 
        />
      </div>

      {/* 2. 다국어 선택 드롭다운 */}
      <div className="relative flex items-center">
        {/* 언어 토글 버튼 */}
        <button 
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="group flex items-center gap-2 px-4 py-2 border border-white/50 rounded-full text-sm font-medium text-white bg-glass-white hover:bg-white hover:text-trip-orange transition-colors shadow-sm"
        >
          {/* 지구본 아이콘 */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5 opacity-90 transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          
          {selectedLang.label}
          
          {/* 열림 상태에 따라 회전하는 화살표 */}
          <span className={`text-[10px] ml-1 opacity-80 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>
            ▼
          </span> 
        </button>

        {/* 💡 3. 드롭다운 메뉴 (열렸을 때만 렌더링) */}
        {isLangOpen && (
          <>
            {/* 메뉴 바깥을 클릭하면 닫히게 만드는 투명 배경 */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsLangOpen(false)}
            ></div>

            {/* 실제 드롭다운 박스 */}
            <div className="absolute top-full right-0 mt-3 w-32 bg-white rounded-[16px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                      // 나중에 실제 번역 라이브러리(i18n) 연결 시 여기에 언어 변경 로직을 넣으시면 됩니다!
                    }}
                    className={`px-5 py-2.5 text-sm font-bold text-left transition-colors hover:bg-orange-50 hover:text-trip-orange ${
                      isSelected ? 'text-trip-orange bg-orange-50/50' : 'text-gray-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </header>
  );
}