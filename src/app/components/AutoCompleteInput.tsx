import { AutoComplete } from "antd";
import { IAutoCompleteOption } from "../../types/components/AutoComplete";

export default function AutoCompleteInput({
  options,
}: {
  options: Array<IAutoCompleteOption>;
}) {
  const filterOption = (input: string, option: IAutoCompleteOption) => {
    return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
  };
  return (
    <div className="w-full h-14">
      <AutoComplete
        options={options}
        style={{ width: "100%" }}
        placeholder="input here"
        filterOption={(inputValue: string, option: any) =>
          filterOption(inputValue, option)
        }
      />
    </div>
  );
}
