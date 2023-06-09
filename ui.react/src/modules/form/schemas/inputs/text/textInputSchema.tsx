import StringSchema from "../../primitives/stringSchema";
import {ITextInputSchema} from "../../schemas.ints";

const ALPHANUMERIC_MESSAGE = 'Este campo solamente acepta carácteres alfanuméricos.';

export const textInputSchema = () => new TextFieldSchema({});

export default class TextFieldSchema extends StringSchema {
	isAlphanumeric: boolean;
	alphanumericMessage: string;

	constructor({value = '', ...props}: ITextInputSchema) {
		super({...props});
		this.isAlphanumeric = false;
		this.alphanumericMessage = ALPHANUMERIC_MESSAGE;
	}

	alphanumeric(message = ALPHANUMERIC_MESSAGE) {
		this.isAlphanumeric = true;
		this.alphanumericMessage = message;
		return this;
	}

	isAlphanumericValid(value: string): boolean {
		const regex = /^[a-zA-Z0-9]*$/;
		return value.match(regex) !== null;
	}

	validate(value: string): string {
		let errorMessage = '';

		if (this.isMin && this.minLength > value.length) {
			errorMessage = this.minLengthMessage;
		}

		if (this.isMax && this.maxLength < value.length) {
			errorMessage = this.maxLengthMessage;
		}

		if (this.isAlphanumeric && !this.isAlphanumericValid(value)) {
			errorMessage = this.alphanumericMessage;
		}

		if (this.isRequired && value.trim().length === 0) {
			errorMessage = this.requiredMessage;
		}

		return errorMessage;
	}
}