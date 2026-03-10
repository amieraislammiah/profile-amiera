"use client";

import { useState } from "react";

// ── Icon Components ──────────────────────────────────────────────
const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);
const Trash2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    <line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────

interface ProofUploaderProps {
  projectId: string;
}

export default function ProofUploader({ projectId }: ProofUploaderProps) {
  const [uploads, setUploads] = useState<string[]>(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem(`proofs:${projectId}`) : null;
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const persist = (items: string[]) => {
    setUploads(items);
    try {
      localStorage.setItem(`proofs:${projectId}`, JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const onFilesSelected = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const readers = Array.from(files).map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );
    const results = await Promise.all(readers);
    persist([...uploads, ...results]);
  };

  const removeAt = (idx: number) => {
    const next = uploads.filter((_: string, i: number) => i !== idx);
    persist(next);
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-maroon-900 mb-3 border-b border-maroon-200 pb-2">
        Add Evidence (Local Preview)
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Use this to quickly preview images locally. To make evidence visible to everyone,
        add images to public/ and list them under this project&apos;s proofs in the data file.
      </p>
      <label className="inline-flex items-center px-4 py-2 bg-maroon-800 text-white rounded-lg cursor-pointer hover:bg-maroon-700 transition-colors">
        <span className="mr-2"><UploadIcon /></span>
        Select Images
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e: { target: { files: FileList | null; }; }) => onFilesSelected(e.target.files)}
        />
      </label>

      {uploads.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {uploads.map((src: string, idx: number) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-maroon-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Uploaded proof ${idx + 1}`} className="w-full h-auto object-contain" />
              <div className="flex items-center justify-between p-2 bg-maroon-50 border-t border-maroon-100">
                <span className="text-xs text-maroon-800 font-medium">Uploaded proof {idx + 1}</span>
                <button
                  className="inline-flex items-center text-maroon-700 hover:text-maroon-900 text-xs font-semibold"
                  onClick={() => removeAt(idx)}
                  aria-label="Remove proof"
                >
                  <span className="mr-1"><Trash2Icon /></span> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}