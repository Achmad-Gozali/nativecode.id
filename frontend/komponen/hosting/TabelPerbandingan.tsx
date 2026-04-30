'use client';
import React from 'react';
import { CellValue } from './CellValue';

type DetailItem = {
  label: string;
  values: (boolean | string)[];
};

type DetailKategori = {
  kategori: string;
  items: DetailItem[];
};

type Paket = {
  nama: string;
  href: string;
};

type Props = {
  paketHeaders: string[];
  detailFitur: DetailKategori[];
  paket: Paket[];
  tombolLabel?: string;
};

export function TabelPerbandingan({
  paketHeaders,
  detailFitur,
  paket,
  tombolLabel = 'Beli',
}: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm min-w-[650px]">
        <thead className="sticky top-0 z-10">
          <tr className="bg-[#5BAAD0]">
            <th className="text-left px-4 py-3 font-semibold text-white w-[280px]"></th>
            {paketHeaders.map(h => (
              <th key={h} className="text-center px-4 py-3 font-bold text-white">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {detailFitur.map((kat, ki) => (
            <React.Fragment key={`kat-${ki}`}>
              <tr className="bg-gray-100">
                <td colSpan={paketHeaders.length + 1} className="px-4 py-2.5 font-bold text-gray-700 text-sm">
                  {kat.kategori}
                </td>
              </tr>
              {kat.items.map((item, ii) => (
                <tr key={`item-${ki}-${ii}`} className={`border-b border-gray-100 ${ii % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-4 py-3 text-gray-600 text-sm align-top">{item.label}</td>
                  {item.values.map((val, vi) => (
                    <td key={vi} className="px-4 py-3 text-center align-middle">
                      <CellValue val={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
          <tr className="bg-white border-t-2 border-gray-200">
            <td className="px-4 py-4"></td>
            {paket.map((p, i) => (
              <td key={i} className="px-4 py-4 text-center">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
                >
                  {tombolLabel}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}