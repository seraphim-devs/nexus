import {TInputValue} from "../schemas.types";
import {IInputSchema} from "../schemas.ints";

const REQUIRED_MESSAGE = 'Este campo es obligatorio.';

export default abstract class InputSchema {
	value?: TInputValue;
	isRequired: boolean;
	requiredMessage: string;

	protected constructor({value}: IInputSchema) {
		this.value = value;
		this.isRequired = false;
		this.requiredMessage = REQUIRED_MESSAGE;
	}

	required(message = REQUIRED_MESSAGE) {
		this.isRequired = true;
		this.requiredMessage = message;
		return this;
	}

	abstract validate(value: TInputValue): string;
}
