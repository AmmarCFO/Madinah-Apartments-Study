
import { Scenario, ScenarioType, MarketingVideo, Branch, ComparisonLink } from './types';

// Estimated average furnishing cost per unit (Average of Studio ~30k and 3BR ~70k)
export const FURNISHING_COST_PER_UNIT = 50000;

export const SCENARIOS: Scenario[] = [
  {
    id: 'study_madinah',
    type: ScenarioType.SHORT_TERM,
    name: 'Short Term Rental',
    color: '#2A5B64', // Teal
    description: 'Short term rental model for Al Madinah property consisting of 1 Studio and 1 3-Bedroom Apartment.',
    
    financials: {
        worst: {
            // Studio: 170 * 365 = 62,050
            // 3BR: 471 * 365 = 171,915
            // Total: 233,965
            revenue: 233965, 
            mabaatShare: 46793, // 20%
            netIncome: 187172, 
            roi: 0
        },
        base: {
            // Studio: 187 * 365 = 68,255
            // 3BR: 551 * 365 = 201,115
            // Total: 269,370
            revenue: 269370, 
            mabaatShare: 53874, // 20%
            netIncome: 215496, 
            roi: 0
        },
        best: {
            // Studio: 204 * 365 = 74,460
            // 3BR: 630 * 365 = 229,950
            // Total: 304,410
            revenue: 304410, 
            mabaatShare: 60882, // 20%
            netIncome: 243528, 
            roi: 0
        }
    },

    propertyValue: 0, 
    
    unitCount: 2,
    unitLabel: 'Units',
    occupancyDurationLabel: 'Daily Rentals',
    
    unitMix: [
        { 
            name: 'Studio', 
            count: 1, 
            avgPrice: 68255, // 187 * 365
            priceRange: { 
                min: 62050, // 170 * 365
                avg: 68255, // 187 * 365
                max: 74460  // 204 * 365
            }, 
        },
        { 
            name: '3 Bedroom Apartment', 
            count: 1, 
            avgPrice: 201115, // 551 * 365
            priceRange: { 
                min: 171915, // 471 * 365
                avg: 201115, // 551 * 365
                max: 229950  // 630 * 365
            }, 
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1u6i_7MN74iogQP0qwdS9o2GYOHtWTZA4/view?usp=sharing',
    },
    {
        id: 'v2',
        title: 'Interior Walkthrough',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1dO3W-8IX8JultVN768H1hyxVVmxC4F2I/view?usp=sharing',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  study_madinah: []
};

export const MABAAT_SHARE_PERCENTAGE = 0.20;
export const BRANCHES: Branch[] = [];
