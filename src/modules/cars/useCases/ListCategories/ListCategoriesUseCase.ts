import { Category } from '../../model/Category';
import { CategoriesRepository } from '../../model/repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}
	execute(): Category[] {
		const categories = this.categoriesRepository.list();

		return categories;
	}
}

export { ListCategoriesUseCase };
