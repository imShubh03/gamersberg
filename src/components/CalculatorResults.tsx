import React from 'react';
import { useAtom } from 'jotai';
import { Info, ChevronDown } from 'lucide-react';
import { yourTotalValueAtom, theirTotalValueAtom, valueDifferenceAtom } from '@/store/atoms';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const CalculatorResults = () => {
    const [yourTotal] = useAtom(yourTotalValueAtom);
    const [theirTotal] = useAtom(theirTotalValueAtom);
    const [difference] = useAtom(valueDifferenceAtom);
    const valueProviders = ["Gamersberg", "fruityblox", "bloxfruit"];

    return (
        <div className="w-full flex flex-col items-center px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8 w-full max-w-3xl">
                <div className="bg-gray-900/50 rounded-lg p-6 w-full max-w-xs text-center">
                    <div className="text-white">
                        <div className="text-2xl mb-4">Price: {yourTotal.toLocaleString()}</div>
                        <div className="text-2xl">Value: {yourTotal.toLocaleString()}</div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span>Value Difference: {difference.toLocaleString()}</span>
                        <Info size={20} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div>Value Provider:</div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="bg-gray-800 rounded-full px-4 py-2 flex items-center gap-2">
                                Gamersberg <ChevronDown size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-800 border-gray-700">
                                {valueProviders.map((provider) => (
                                    <DropdownMenuItem key={provider} className="text-white hover:bg-gray-700 cursor-pointer">
                                        {provider}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 w-full max-w-xs text-center">
                    <div className="text-white">
                        <div className="text-2xl mb-4">Price: {theirTotal.toLocaleString()}</div>
                        <div className="text-2xl">Value: {theirTotal.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorResults;
