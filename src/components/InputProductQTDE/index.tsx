import { InputContainer } from './Styles';
import { Minus, Plus } from "@phosphor-icons/react";

type InputProductQTDEProps = {
    value: number,
    onAddClick: () => void
    onMinusClick: () => void
}

export function InputProductQTDE(
    { value, onAddClick, onMinusClick }: InputProductQTDEProps
) {
    

    return (
        <>
            <InputContainer>
                <button onClick={onMinusClick}>
                    <Minus size={14} weight="bold" />
                </button>
                <input
                    readOnly={true}
                    type="text"
                    autoComplete="off"
                    value={value}
                />
                <button onClick={onAddClick}>
                    <Plus size={14} weight="bold" />
                </button>
            </InputContainer>
        </>
    );
}