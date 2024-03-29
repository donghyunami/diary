export type TEmotion = {
  id: number;
  desc: "좋음" | "행복" | "보통" | "나쁨" | "최악";
  img: string;
};

export const emotionList: TEmotion[] = [
  {
    id: 1,
    img: "/assets/images/emtion_1.png",
    desc: "최악",
  },
  {
    id: 2,
    img: "/assets/images/emtion_2.png",
    desc: "나쁨",
  },
  {
    id: 3,
    img: "/assets/images/emtion_3.png",
    desc: "보통",
  },
  {
    id: 4,
    img: "/assets/images/emtion_4.png",
    desc: "좋음",
  },
  {
    id: 5,
    img: "/assets/images/emtion_5.png",
    desc: "행복",
  },
];
