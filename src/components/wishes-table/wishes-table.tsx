import React from 'react';
import { ArrowElbowDownRight, PencilSimple, Trash } from 'phosphor-react';
import { Wish } from '../../features/wishes/types';
import './wishes-table.scss';

interface WishesTableProps {
	wishes: Wish[];
	onEdit: (wish: Wish) => void;
	onDelete: (id: string) => void;
}

/**
 * Composant tableau pour afficher l'historique des vœux
 */
// todo : remplacer 0 par une condition pour check si c'est perdu
const WishesTable: React.FC<WishesTableProps> = ({ wishes, onEdit, onDelete }) => {
	return (
		<table className="wishes-table">
			<thead>
				<tr>
					<th>5☆ name</th>
					<th>Total wishes</th>
					<th>Date</th>
					<th>Banner / patch</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{wishes.length === 0 ? (
					<tr>
						<td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
							No wish recorded
						</td>
					</tr>
				) : (
					wishes.map((wish) => (
						<tr
							key={wish.id}
							className={0 ? 'text-red' : wish.banner === 'Perma' ? 'text-blue' : ''}
						>
							<td>
								{0 ? <ArrowElbowDownRight size={15} /> : <></>}
								{wish.characterName}
							</td>
							<td>{wish.totalWishes}</td>
							<td>{wish.date}</td>
							<td>{wish.banner}</td>
							<td
								className="edit-pull"
								title="Edit this pull"
								onClick={() => onEdit(wish)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										onEdit(wish);
									}
								}}
							>
								<PencilSimple size={15} />
							</td>
							<td
								className="del-pull"
								title="Delete this pull"
								onClick={() => onDelete(wish.id)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										onDelete(wish.id);
									}
								}}
							>
								<Trash size={15} />
							</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
};

export default WishesTable;
