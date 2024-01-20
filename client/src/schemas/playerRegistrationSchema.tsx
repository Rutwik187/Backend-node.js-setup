import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const playerRegistrationSchema = z.object({
    fullName: z.string().min(3, "Full Name should be at least 3 characters").max(100, "Full Name should be at most 100 characters").refine((data) => data.trim() !== "", {
        message: "Full Name is required",
    }),
    birthDate: z.date().refine((data) => !isNaN(data.getTime()), {
        message: "Valid Date of Birth is required",
    }),
    teamName: z.string().min(3, "Team Name should be at least 3 characters").max(100, "Team Name should be at most 100 characters").refine((data) => data.trim() !== "", {
        message: "Team Name is required",
    }),
    ageGroup: z.string().min(3, "Age Group should be at least 3 characters").max(50, "Age Group should be at most 50 characters").refine((data) => data.trim() !== "", {
        message: "Age Group is required",
    }),
    address: z.string().min(5, "Address should be at least 5 characters").max(255, "Address should be at most 255 characters").refine((data) => data.trim() !== "", {
        message: "Address is required",
    }),
    adharCard: z.string().refine((data) => data.trim() !== "", {
        message: "Adhar Card is required",
    }),
    birthCertificate: z.string().refine((data) => data.trim() !== "", {
        message: "Birth Certificate is required",
    }),
    achievements: z.string().min(5, "Achievements should be at least 5 characters").max(500, "Achievements should be at most 500 characters").refine((data) => data.trim() !== "", {
        message: "Achievements are required",
    }),
    achievementDocument: z.string().refine((data) => data.trim() !== "", {
        message: "Document of Biggest achievement is required",
    }),
});


export const playerRegistrationForm = useForm<z.infer<typeof playerRegistrationSchema>>({
    resolver: zodResolver(playerRegistrationSchema),
    defaultValues: {
        fullName: '',
        birthDate: new Date(),
        teamName: '',
        ageGroup: '',
        address: '',
        adharCard: '',
        birthCertificate: '',
        achievements: '',
        achievementDocument: '',
    },
});