export type Member = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const MemoryDatabase = (() => {
  const members: Member[] = [
    {
      id: 1,
      name: 'J',
      email: 'j@gmail.com',
      phone: '010-3333-4444',
    },
  ];

  return {
    findMembers: () => Promise.resolve(members),
  };
})();
