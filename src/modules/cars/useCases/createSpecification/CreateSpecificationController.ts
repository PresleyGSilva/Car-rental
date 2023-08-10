import { Request, Response } from 'express';
import { SpecificationRepository } from '../../model/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
	constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
	handle(request: Request, response: Response): Response {
		const { name, description } = request.body;

		this.createSpecificationUseCase.execute({ name, description });

		return response.status(201).send();
	}
}
export { CreateSpecificationController };
