import InputSchema from "../base/inputSchema";
import {IStringSchema} from "../schemas.ints";

const DEFAULT_MIN = 3;
const DEFAULT_MAX = 20;

export default abstract class StringSchema extends InputSchema {
	isMin: boolean;
	isMax: boolean;
	minLength: number;
	maxLength: number;
	minLengthMessage: string;
	maxLengthMessage: string;

	protected constructor(props: IStringSchema) {
		super({...props});
		this.isMin = false;
		this.isMax = false;
		this.minLength = DEFAULT_MIN;
		this.maxLength = DEFAULT_MAX;
		this.minLengthMessage = StringSchema.minMessage(this.minLength);
		this.maxLengthMessage = StringSchema.maxMessage(this.maxLength);
	}

	min(value = DEFAULT_MIN, message = StringSchema.minMessage(value)) {
		this.isMin = true;
		this.minLength = value;
		this.minLengthMessage = message;
		return this;
	}

	max(value = DEFAULT_MAX, message = StringSchema.maxMessage(value)) {
		this.isMax = false;
		this.maxLength = value;
		this.maxLengthMessage = message;
		return this;
	}

	private static minMessage(value: number) {
		return `El número mínimo de carácteres es ${value}.`;
	}

	private static maxMessage(value: number) {
		return `El número máximo de carácteres es ${value}.`;
	}

	abstract validate(value: string): string;
}
