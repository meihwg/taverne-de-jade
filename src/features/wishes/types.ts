export interface Wish {
  id: string;
  characterName: string;
  totalWishes: number;
  date: string; // Format: YYYY-MM-DD
  banner: string; // Ex: "5.0", "4.8", "Perma"
}

export type WishFormData = Omit<Wish, 'id'>;
