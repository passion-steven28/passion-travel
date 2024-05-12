import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Option = {
    value: string;
    label: string;
};

type Props = {
    title: string;
    selects: {
        placeholder: string;
        option: Option[];
    }[];
};

export default function SelectDropDown({ title, selects }: Props) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div className='flex items-center'>
                {selects.map((select, index) => (
                    <Select key={index}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={select.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {select.option.map((o, idx) => (
                                <SelectItem
                                    key={idx}
                                    value={o.value}
                                >
                                    {o.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ))}
            </div>
        </div>
    );
}
