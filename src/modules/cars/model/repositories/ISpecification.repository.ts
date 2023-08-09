import { Specification } from '../Specification';

interface ICreateSpecificatioinDTO {
	name: string;
	description: string;
}

interface ISpecificationRepository {
	create({ description, name }: ICreateSpecificatioinDTO): void;
	findByname(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificatioinDTO };
