import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.post('/pinecone/strategy', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          requestId: '14a4f2a1-d997-4d08-a0d0-c3aba4d940ea',
        },
      },
      { status: 200 },
    );
  }),

  http.get('/pinecone/strategy/*', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        비법1: {
          제목: '썸네일과 제목의 마법: 유튜브 동영상의 첫인상을 강화하세요',
          본문: '썸네일과 제목은 유튜브 동영상의 첫인상을 결정짓는 중요한 요소입니다. 매력적인 썸네일과 흥미로운 제목은 더 많은 클릭을 유도하고, 이는 곧 더 많은 조회수와 좋아요로 이어집니다. 패션 콘텐츠에서는 시각적 매력이 특히 중요하며, 이를 통해 시청자의 관심을 끌 수 있습니다.',
          '실행 방법': [
            '가족 사진 공유 이벤트: 구독자들에게 가족 사진을 보내달라고 하고, 이 중에서 특별한 사진을 갖고 영상을 만들어보세요.',
            "아이들의 그림 대회 개최: '우리 아이의 그림 자랑' 이벤트를 열어 구독자들의 참여를 이끌어내세요.",
            "라이브 Q&A 세션: '육아 Q&A' 라이브 세션을 정기적으로 진행하여 시청자들의 질문에 직접 답변해 주세요.",
          ],
          출처: '유튜브 공식 가이드',
        },
        비법2: {
          제목: '시청자 데이터 분석을 통한 콘텐츠 최적화',
          본문: '유튜브 분석 도구는 시청자의 선호와 행동을 이해하는 데 큰 도움이 됩니다. 이 데이터를 활용하여 더 많은 공유와 좋아요를 받을 수 있는 콘텐츠 전략을 수립할 수 있습니다. 특히 패션 분야에서는 트렌드에 민감한 시청자의 반응을 빠르게 파악하는 것이 중요합니다.',
          '실행 방법': [
            '가족 사진 공유 이벤트: 구독자들에게 가족 사진을 보내달라고 하고, 이 중에서 특별한 사진을 갖고 영상을 만들어보세요.',
            "아이들의 그림 대회 개최: '우리 아이의 그림 자랑' 이벤트를 열어 구독자들의 참여를 이끌어내세요.",
            "라이브 Q&A 세션: '육아 Q&A' 라이브 세션을 정기적으로 진행하여 시청자들의 질문에 직접 답변해 주세요.",
          ],
          출처: '유튜브 공식 가이드',
        },
        비법3: {
          제목: '동영상의 첫 3초: 시청자의 마음을 사로잡는 방법',
          본문: '유튜브 쇼츠나 일반 동영상 모두에서 첫 3초는 시청자의 관심을 끌기 위해 매우 중요합니다. 이 시간 동안 시청자를 사로잡지 못하면, 그들이 동영상을 계속 시청할 가능성은 낮아집니다. 특히 패션 콘텐츠에서는 비주얼이 중요하므로 첫 장면의 선택이 중요합니다.',
          '실행 방법': [
            "댓글 대화 시작하기: 영상을 보고 난 구독자들의 의견을 묻는 질문을 던지세요. 예를 들어, '이번 영상에서 가장 공감되는 순간은 언제였나요?'",
            '최고의 댓글 선정해서 소개: 매 영상에서 가장 인상 깊은 댓글을 골라 다음 영상에서 소개해 주세요.',
            "댓글 미션 제공: '이번 영상을 보고 가족과 함께 해볼 수 있는 활동을 댓글로 공유해 주세요!'와 같은 미션을 제공하면 좋아요.",
          ],
          출처: '유튜브 공식 가이드',
        },
      },

      { status: 200 },
    );
  }),
];
