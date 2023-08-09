import { Router } from 'express';
import { createCategoryController } from 'src/modules/cars/useCases/createCategory';
import { listCategoriesController } from 'src/modules/cars/useCases/ListCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
	return createCategoryController.handle(request, response);
});
categoriesRoutes.get('/', (request, response) => {
	return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
