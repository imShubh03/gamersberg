import React from 'react';
import { useAtom } from 'jotai';
import { Info, ChevronDown } from 'lucide-react';
import { yourTotalValueAtom, theirTotalValueAtom, valueDifferenceAtom } from '@/store/atoms';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CalculatorResults = () => {
    const [yourTotal] = useAtom(yourTotalValueAtom);
    const [theirTotal] = useAtom(theirTotalValueAtom);
    const [difference] = useAtom(valueDifferenceAtom);

    const valueProviders = [
        "Gamersberg",
        "fruityblox",
        "bloxfruit",
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Top Section */}
            <div className="flex justify-center items-center gap-x-20 mb-8">
                {/* Left Price/Value Box */}
                <div className="bg-gray-900/50 rounded-lg p-6 w-64 text-center">
                    <div className="text-white">
                        <div className="text-2xl mb-4">Price: {yourTotal.toLocaleString()}</div>
                        <div className="text-2xl">Value: {yourTotal.toLocaleString()}</div>
                    </div>
                </div>

                {/* Center Section */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-white mb-4">
                        <span>Value Difference: {difference.toLocaleString()} </span>
                        <Info size={20} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="text-white">Value Provider:</div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="bg-gray-800 rounded-full px-4 py-2 text-white flex items-center gap-2">
                                Gamersberg
                                <ChevronDown size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-800 border-gray-700">
                                {valueProviders.map((provider) => (
                                    <DropdownMenuItem
                                        key={provider}
                                        className="text-white hover:bg-gray-700 cursor-pointer"
                                    >
                                        {provider}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Right Price/Value Box */}
                <div className="bg-gray-900/50 rounded-lg p-6 w-64 text-center">
                    <div className="text-white">
                        <div className="text-2xl mb-4">Price: {theirTotal.toLocaleString()}</div>
                        <div className="text-2xl">Value: {theirTotal.toLocaleString()}</div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-center">
                <div className="bg-gray-900/30 rounded-lg px-6 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-white text-lg">No items selected</span>
                </div>
            </div>
        </div>
    );
};

export default CalculatorResults;
