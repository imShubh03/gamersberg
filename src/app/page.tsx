'use client';

import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { FruitGrid } from '@/components/FruitGrid';
import { SearchModal } from '@/components/SearchModal';
import { CalculatorResults } from '@/components/CalculatorResults';
import { yourSelectedFruitsAtom, theirSelectedFruitsAtom } from '@/store/atoms';

export default function Home() {
  const [isYourModalOpen, setIsYourModalOpen] = useState(false);
  const [isTheirModalOpen, setIsTheirModalOpen] = useState(false);
  const setYourSelectedFruits = useSetAtom(yourSelectedFruitsAtom);
  const setTheirSelectedFruits = useSetAtom(theirSelectedFruitsAtom);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Calculator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">Offer (You)</h2>
          <FruitGrid
            selectedFruitsAtom={yourSelectedFruitsAtom}
            onAddClick={() => setIsYourModalOpen(true)}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">Request (Them)</h2>
          <FruitGrid
            selectedFruitsAtom={theirSelectedFruitsAtom}
            onAddClick={() => setIsTheirModalOpen(true)}
          />
        </div>
      </div>

      <div className="mt-8">
        <CalculatorResults />
      </div>

      <SearchModal
        isOpen={isYourModalOpen}
        onSelect={(fruit) => {
          setYourSelectedFruits((currentSelected) => {
            if (currentSelected.length < 4) {
              return [...currentSelected, fruit];
            }
            return currentSelected;
          });
          setIsYourModalOpen(false);
        }} onClose={function (): void {
          throw new Error('Function not implemented.');
        }} />

      <SearchModal
        isOpen={isTheirModalOpen}
        onSelect={(fruit) => {
          setTheirSelectedFruits((currentSelected) => {
            if (currentSelected.length < 4) {
              return [...currentSelected, fruit];
            }
            return currentSelected;
          });
          setIsTheirModalOpen(false);
        }} onClose={function (): void {
          throw new Error('Function not implemented.');
        }} />
    </main>
  );
}
