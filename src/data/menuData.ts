const menuData = [
  {
    title: "공통",
    items: [
      { name: "사용자 관리", link: "/common/users" },
      { name: "권한 설정", link: "/common/permissions" },
    ],
  },
  {
    title: "DexLab",
    items: [
      { name: "지갑 관리", link: "/dexlab/wallet" },
      { name: "거래 내역", link: "/dexlab/transactions" },
    ],
  },
  {
    title: "Mome",
    items: [
      { name: "토큰 관리", link: "/mome/tokens" },
      { name: "통계", link: "/mome/stats" },
    ],
  },
];

export default menuData;
