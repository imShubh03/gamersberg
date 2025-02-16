import { useAtom } from 'jotai';
import { X } from 'lucide-react';
import { Fruit } from '@/types/fruit';
import { Button } from './ui/button';

interface FruitGridProps {
    selectedFruitsAtom: any;
    onAddClick: () => void;
}

export const FruitGrid = ({ selectedFruitsAtom, onAddClick }: FruitGridProps) => {
    const [selectedFruits, setSelectedFruits] = useAtom<Fruit[]>(selectedFruitsAtom);

    const removeFruit = (fruitId: string) => {
        setSelectedFruits(selectedFruits.filter((f: Fruit) => f.id !== fruitId));
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => {
                const fruit = selectedFruits[index];
                if (fruit) {
                    return (
                        <div key={fruit.id} className="relative bg-gray-900 p-4 rounded-lg">
                            <Button
                                onClick={() => removeFruit(fruit.id)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            >
                                <X size={16} />
                            </Button>
                            <img
                                src={fruit.image}
                                alt={fruit.name}
                                className="w-16 h-16 mx-auto"
                            />
                            <div className="text-center mt-2">
                                <div className="text-white">{fruit.name}</div>
                                <div className="text-green-500">
                                    ${(fruit.value / 1000).toFixed(1)}k
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <Button
                        key={`empty-${index}`}
                        onClick={onAddClick}
                        className="h-32 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center hover:border-gray-500 transition-colors"
                    >
                        <div className="text-4xl text-gray-500">+</div>
                    </Button>
                );
            })}
        </div>
    );
};