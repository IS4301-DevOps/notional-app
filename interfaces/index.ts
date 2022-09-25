export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  carbonTarget: number;
  imageUrl?: string;
};
