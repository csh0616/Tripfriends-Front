import type { TripPlace } from '../api/tripPlanner.types';

const MAX_NODES = 7;

interface KakaoDirectionsSdk {
  maps: {
    LatLng: new (lat: number, lng: number) => unknown;
  };
}

interface KakaoDirectionsResponse {
  routes?: Array<{
    sections?: Array<{
      roads: Array<{
        vertexes: number[];
      }>;
    }>;
  }>;
}

export const fetchKakaoDirectionsPath = async (places: TripPlace[], kakao: KakaoDirectionsSdk) => {
  const linePath: unknown[] = [];

  for (let i = 0; i < places.length - 1; i += MAX_NODES - 1) {
    const chunk = places.slice(i, i + MAX_NODES);
    if (chunk.length < 2) break;

    const origin = `${chunk[0].lng},${chunk[0].lat}`;
    const destination = `${chunk[chunk.length - 1].lng},${chunk[chunk.length - 1].lat}`;
    const waypoints = chunk.slice(1, -1).map((place) => `${place.lng},${place.lat}`).join('|');
    const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${destination}${waypoints ? `&waypoints=${waypoints}` : ''}&priority=RECOMMEND`;

    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
      },
    });

    if (!response.ok) throw new Error('Route API chunk failed');

    const data = (await response.json()) as KakaoDirectionsResponse;

    if (!data.routes || !data.routes[0] || !data.routes[0].sections) {
      throw new Error('카카오 내비가 해당 구간의 자동차 길을 찾지 못했습니다.');
    }

    data.routes[0].sections.forEach((section) => {
      section.roads.forEach((road) => {
        for (let j = 0; j < road.vertexes.length; j += 2) {
          linePath.push(new kakao.maps.LatLng(road.vertexes[j + 1], road.vertexes[j]));
        }
      });
    });
  }

  return linePath;
};
