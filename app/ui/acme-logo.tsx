"use client";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      // use inline fontFamily as a safe fallback to avoid importing a module that may access localStorage on the server
      className="flex flex-row items-center leading-none text-white"
      style={{ fontFamily: 'Lusitana, serif' }}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
