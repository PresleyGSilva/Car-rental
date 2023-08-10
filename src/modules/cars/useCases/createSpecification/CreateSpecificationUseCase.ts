import { ISpecificationRepository } from '../../model/repositories/ISpecification.repository';

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationUseCase {
	constructor(private specificationRepsotiroy: ISpecificationRepository) {}
	execute({ name, description }: IRequest): void {
		const specificationAlreadyExist =
			this.specificationRepsotiroy.findByname(name);

		if (specificationAlreadyExist) {
			throw new Error('Specification already exists!');
		}
		this.specificationRepsotiroy.create({
			name,
			description,
		});
	}
}

export { CreateSpecificationUseCase };
