const menuData = [
  {
    title: "menu.common", // JSON의 "menu.common"에 연결
    items: [
      { name: "menu.commonUsers", link: "/common/users" },
      { name: "menu.commonPermissions", link: "/common/permissions" },
    ],
  },
  {
    title: "menu.dexlab",
    items: [
      { name: "menu.dexlabWallet", link: "/dexlab/wallet" },
      { name: "menu.dexlabTransactions", link: "/dexlab/transactions" },
    ],
  },
  {
    title: "menu.mome",
    items: [
      { name: "menu.momeTokens", link: "/mome/tokens" },
      { name: "menu.momeStats", link: "/mome/stats" },
    ],
  },
];

export default menuData;
