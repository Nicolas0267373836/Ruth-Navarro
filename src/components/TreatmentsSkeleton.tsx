import React from 'react';
import { Skeleton } from './Skeleton';

interface TreatmentsSkeletonProps {
  count?: number;
}

export const TreatmentsSkeleton: React.FC<TreatmentsSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="space-y-12">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D9C9F4]/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
        >
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-14 h-14 rounded-2xl shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="w-28 h-3 rounded-full" />
                <Skeleton className="w-3/4 h-7 rounded-lg" />
              </div>
            </div>

            <Skeleton className="w-full h-5 rounded-md" />
            
            <div className="space-y-2 pt-1">
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-5/6 h-4 rounded-md" />
            </div>

            <div className="pt-2 space-y-2">
              <Skeleton className="w-36 h-3 rounded-md" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Skeleton className="h-4 rounded-md" />
                <Skeleton className="h-4 rounded-md" />
                <Skeleton className="h-4 rounded-md" />
                <Skeleton className="h-4 rounded-md" />
              </div>
            </div>
          </div>

          {/* Right action column */}
          <div className="lg:col-span-5 bg-[#F6F2FD]/50 rounded-2xl p-6 sm:p-8 border border-[#D9C9F4]/60 space-y-4">
            <Skeleton className="w-28 h-3 rounded-full" />
            <Skeleton className="w-4/5 h-6 rounded-lg" />
            <Skeleton className="w-full h-10 rounded-md" />
            <div className="space-y-2.5 pt-2">
              <Skeleton className="w-full h-11 rounded-full" />
              <Skeleton className="w-full h-9 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
