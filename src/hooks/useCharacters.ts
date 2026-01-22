import { useState, useEffect } from 'react';

import { Character, CharactersApiService } from '../services/genshin/charactersApi.ts';

/**
 * Hook pour gérer les personnages 5☆ depuis l'API
 */
export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadCharacters = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const fiveStarChars = await CharactersApiService.get5StarCharacters();
				setCharacters(fiveStarChars);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
				setError(errorMessage);
				console.error('Erreur lors du chargement des personnages:', err);
			} finally {
				setIsLoading(false);
			}
		};

		loadCharacters();
	}, []);

	return {
		characters,
		isLoading,
		error,
	};
};
