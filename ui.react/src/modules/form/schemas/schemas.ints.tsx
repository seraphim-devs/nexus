import {TInputValue, TStringInput} from "./schemas.types";

export interface IInputSchema {
	value?: TInputValue;
}

export interface IStringSchema {
	value?: TStringInput;
}

export interface ITextInputSchema extends IStringSchema {
}
