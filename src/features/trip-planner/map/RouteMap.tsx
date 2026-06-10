'use client';

import { useEffect, useRef } from 'react';
import type { TripRoute } from '../api/tripPlanner.types';
import { buildRoutablePlaces } from './buildRoutablePlaces';
import { createKakaoMarkerContent } from './createKakaoMarker';
import { fetchKakaoDirectionsPath } from './fetchKakaoDirections';

declare global {
  interface Window {
    kakao?: KakaoSdk;
  }
}

interface KakaoMapInstance {
  setBounds: (bounds: KakaoLatLngBounds, top: number, right: number, bottom: number, left: number) => void;
}

interface KakaoOverlay {
  setMap: (map: KakaoMapInstance | null) => void;
}

interface KakaoPolyline {
  setMap: (map: KakaoMapInstance | null) => void;
}

interface KakaoLatLngBounds {
  extend: (position: unknown) => void;
}

interface KakaoSdk {
  maps: {
    load: (callback: () => void) => void;
    LatLng: new (lat: number, lng: number) => unknown;
    LatLngBounds: new () => KakaoLatLngBounds;
    Map: new (container: HTMLDivElement, options: { center: unknown; level: number }) => KakaoMapInstance;
    CustomOverlay: new (options: { position: unknown; content: string; yAnchor: number }) => KakaoOverlay;
    Polyline: new (options: {
      path: unknown[];
      strokeWeight: number;
      strokeColor: string;
      strokeOpacity: number;
      strokeStyle: string;
    }) => KakaoPolyline;
  };
}

interface Props {
  route: TripRoute;
  selectedDay: number;
}

export default function RouteMap({ route, selectedDay }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<KakaoMapInstance | null>(null);
  const markersRef = useRef<KakaoOverlay[]>([]);
  const polylineRef = useRef<KakaoPolyline | null>(null);

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    let isCancelled = false;
    const kakao = window.kakao;

    kakao.maps.load(async () => {
      if (!mapInstance.current && mapContainer.current) {
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 7,
        };
        mapInstance.current = new kakao.maps.Map(mapContainer.current, options);
      }

      const map = mapInstance.current;
      if (!map) return;

      if (!route || !route.schedule) return;
      const currentDaySchedule = route.schedule.find((schedule) => schedule.day === selectedDay);
      if (!currentDaySchedule || !currentDaySchedule.places || currentDaySchedule.places.length === 0) return;

      const bounds = new kakao.maps.LatLngBounds();
      const places = currentDaySchedule.places;

      const tempMarkers: KakaoOverlay[] = [];
      let tempPolyline: KakaoPolyline | null = null;

      places.forEach((place, index) => {
        const position = new kakao.maps.LatLng(place.lat, place.lng);
        bounds.extend(position);

        const customOverlay = new kakao.maps.CustomOverlay({
          position,
          content: createKakaoMarkerContent(place, index),
          yAnchor: 1,
        });

        tempMarkers.push(customOverlay);
      });

      const routablePlaces = buildRoutablePlaces(places);

      console.log(`[Day ${selectedDay}] 전체 스팟: ${places.length}개 / 선으로 이을 메인 스팟: ${routablePlaces.length}개`, routablePlaces);

      if (routablePlaces.length > 1) {
        try {
          const linePath = isCancelled ? [] : await fetchKakaoDirectionsPath(routablePlaces, kakao);

          if (linePath.length > 0) {
            tempPolyline = new kakao.maps.Polyline({
              path: linePath,
              strokeWeight: 5,
              strokeColor: '#FF5A5F',
              strokeOpacity: 0.9,
              strokeStyle: 'solid',
            });
          }
        } catch (error) {
          console.error('카카오 내비 경로 생성 실패, 직선으로 대체합니다.', error);
          const fallbackPath = routablePlaces.map((place) => new kakao.maps.LatLng(place.lat, place.lng));
          tempPolyline = new kakao.maps.Polyline({
            path: fallbackPath,
            strokeWeight: 4,
            strokeColor: '#FF5A5F',
            strokeOpacity: 0.6,
            strokeStyle: 'shortdash',
          });
        }
      }

      if (isCancelled) return;

      tempMarkers.forEach((marker) => marker.setMap(map));
      markersRef.current = tempMarkers;

      if (tempPolyline) {
        tempPolyline.setMap(map);
        polylineRef.current = tempPolyline;
      }

      map.setBounds(bounds, 50, 50, 50, 50);
    });

    return () => {
      isCancelled = true;
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }
    };
  }, [route, selectedDay]);

  return <div ref={mapContainer} className="w-full h-full bg-gray-50 rounded-[24px]" />;
}
