import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/model/repositories/SpecificationsRepository';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {});

export { specificationRoutes };
