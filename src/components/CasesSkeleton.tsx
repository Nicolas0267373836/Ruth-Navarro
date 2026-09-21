import React from 'react';
import { Skeleton } from './Skeleton';

interface CasesSkeletonProps {
  count?: number;
}

export const CasesSkeleton: React.FC<CasesSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden border border-[#D9C9F4]/70 p-0 flex flex-col shadow-sm"
        >
          {/* Square Image Box Skeleton */}
          <div className="relative aspect-square w-full">
            <Skeleton className="w-full h-full rounded-none" />
            <div className="absolute top-3 left-3">
              <Skeleton className="w-16 h-5 rounded-full" />
            </div>
          </div>

          {/* Text Content Skeleton */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <Skeleton className="w-24 h-3.5 rounded-full" />
              <Skeleton className="w-4/5 h-6 rounded-lg" />
              <div className="space-y-1.5 pt-1">
                <Skeleton className="w-full h-3.5 rounded-md" />
                <Skeleton className="w-3/4 h-3.5 rounded-md" />
              </div>
            </div>

            <div className="pt-3 border-t border-[#F6F2FD]">
              <Skeleton className="w-2/3 h-3 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
