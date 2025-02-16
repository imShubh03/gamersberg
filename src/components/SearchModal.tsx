import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { fruits } from '@/data/fruits';
import { useState } from 'react';
import { Fruit } from '@/types/fruit';
import { Button } from './ui/button';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (fruit: Fruit) => void;
}

export const SearchModal = ({ isOpen, onClose, onSelect }: SearchModalProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Simplified open change handler
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
            setSearchTerm(''); // Reset search when closing
        }
    };

    // Simple close handler that calls onClose directly
    const handleClose = () => {
        onClose();
        setSearchTerm(''); // Reset search when closing
    };

    return (
        <Dialog 
            open={isOpen} 
            onOpenChange={handleOpenChange}
        >
            <DialogContent className="bg-gray-900 border-gray-800">
                <DialogTitle className="text-white flex justify-between items-center">
                    Add Items to calculate offer value
                    <Button 
                        variant="ghost" 
                        onClick={handleClose}
                        className="text-gray-400 hover:text-white"
                        type="button"
                    >
                        <X size={20} />
                    </Button>
                </DialogTitle>
                <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {filteredFruits.map((fruit) => (
                        <div
                            key={fruit.id}
                            className="bg-black p-4 rounded-lg cursor-pointer hover:bg-gray-900"
                            onClick={() => {
                                onSelect(fruit);
                                handleClose();
                            }}
                        >
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
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchModal;