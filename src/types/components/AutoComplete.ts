export interface IAutoCompleteOption {
    value: string;
    id: string|number
}

export interface IAutoComplete {
    value?: string,
    options: () => Array<IAutoCompleteOption>
}
