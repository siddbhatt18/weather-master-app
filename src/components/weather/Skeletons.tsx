"use client";

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const CurrentWeatherSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    <div className="lg:col-span-3">
        <Card className="glass-card">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <Skeleton className="h-8 w-48 mb-2" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-6 w-24" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center">
                        <Skeleton className="h-32 w-32" />
                        <div className="ml-4">
                            <Skeleton className="h-20 w-32 mb-2" />
                            <Skeleton className="h-6 w-40" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6 sm:mt-0">
                        {[...Array(6)].map((_, i) => (
                             <div key={i} className="flex items-center gap-2">
                                <Skeleton className="h-6 w-6" />
                                <div>
                                    <Skeleton className="h-4 w-16 mb-1" />
                                    <Skeleton className="h-4 w-12" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
    <div className="lg:col-span-2">
        <Card className="glass-card mb-6">
            <CardHeader><Skeleton className="h-6 w-32" /></CardHeader>
            <CardContent className="flex gap-4">
                 {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <Skeleton className="h-4 w-10" />
                        <Skeleton className="h-10 w-10" />
                        <Skeleton className="h-5 w-8" />
                    </div>
                 ))}
            </CardContent>
        </Card>
        <Card className="glass-card">
            <CardHeader><Skeleton className="h-6 w-32" /></CardHeader>
            <CardContent className="space-y-4">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-8 w-8" />
                        <Skeleton className="h-5 w-24" />
                    </div>
                 ))}
            </CardContent>
        </Card>
    </div>
     <div className="lg:col-span-1">
        <Card className="glass-card">
            <CardHeader><Skeleton className="h-6 w-40" /></CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-between">
                    <Skeleton className="h-12 w-20" />
                    <Skeleton className="h-12 w-20" />
                </div>
                 <div className="flex justify-between">
                    <Skeleton className="h-12 w-20" />
                    <Skeleton className="h-12 w-20" />
                </div>
            </CardContent>
        </Card>
    </div>
  </div>
);
