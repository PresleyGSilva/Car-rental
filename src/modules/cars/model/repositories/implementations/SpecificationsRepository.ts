import { Specification } from '../../Specification';
import {
	ISpecificationRepository,
	ICreateSpecificatioinDTO,
} from './../ISpecification.repository';

class SpecificationRepository implements ISpecificationRepository {
	private specification: Specification[];

	constructor() {
		this.specification = [];
	}

	create({ description, name }: ICreateSpecificatioinDTO): void {
		const specification = new Specification();

		Object.assign(specification, {
			description,
			name,
			created_at: new Date(),
		});

		this.specification.push(specification);
	}
	findByname(name: string): Specification {
		const specification = this.specification.find(
			(specification) => specification.name === name,
		);
		return specification;
	}
}

export { SpecificationRepository };
