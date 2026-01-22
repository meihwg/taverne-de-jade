import { useState, useEffect, useCallback } from 'react';
import { Wish, WishFormData } from '../features/wishes/types.ts';
import { WishesStorageService } from '../services/wishes/wishesStorage.ts';

/**
 * Hook personnalisé pour gérer la logique métier des vœux
 * Encapsule toute la logique d'état et les opérations CRUD
 */
export const useWishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Chargement initial depuis le localStorage
  useEffect(() => {
    const loadWishes = () => {
      try {
        const loadedWishes = WishesStorageService.getAll();
        setWishes(loadedWishes);
      } catch (error) {
        console.error('Erreur lors du chargement des vœux:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadWishes();
  }, []);

  /**
   * Ajoute un nouveau vœu
   */
  const addWish = useCallback((wishData: WishFormData) => {
    const newWish: Wish = {
      ...wishData,
      id: `wish-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    try {
      WishesStorageService.add(newWish);
      setWishes((prev) => [...prev, newWish]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du vœu:', error);
      throw error;
    }
  }, []);

  /**
   * Met à jour un vœu existant
   */
  const updateWish = useCallback((id: string, wishData: WishFormData) => {
    try {
      WishesStorageService.update(id, wishData);
      setWishes((prev) =>
        prev.map((wish) => (wish.id === id ? { ...wishData, id } : wish))
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour du vœu:', error);
      throw error;
    }
  }, []);

  /**
   * Supprime un vœu
   */
  const deleteWish = useCallback((id: string) => {
    try {
      WishesStorageService.delete(id);
      setWishes((prev) => prev.filter((wish) => wish.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du vœu:', error);
      throw error;
    }
  }, []);

  return {
    wishes,
    isLoading,
    addWish,
    updateWish,
    deleteWish,
  };
};
