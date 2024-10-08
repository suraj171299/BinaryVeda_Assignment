import { z } from 'zod';

export const signupValidationSchema = z.object({
    username: z.string({ required_error: 'Username is required' })
        .trim()
        .min(3,{ message: 'Username must be at least 3 characters long' })
        .max(50, { message: 'Username must be less than 50 characters long' }),
    email: z.string({ required_error: 'Email is required' })
        .trim()
        .email({ message: 'Email is not valid' })
        .min(3, { message: 'Email must be at least 3 characters long' })
        .max(50, { message: 'Email must be less than 50 characters long' }),
    password: z.string({ required_error: 'Password is required' })
        .min(6, { message: 'Password must be at least 6 characters long' })
        .max(15, { message: 'Password must be less than 15 characters long' }),
    age: z.number({ required_error: 'Age is required' })
        .min(0, { message: 'Age must be greater than or equal to 0' })
        .max(120, { message: 'Age must be less than or equal to 120' }),
    address: z.string({ required_error: 'Address is required' })
        .min(3, { message: 'Address must be at least 3 characters long' })
        .max(50, { message: 'Address must be less than 50 characters long' })
})

export const loginValidationSchema = z.object({
    email: z.string({ required_error: 'Email is required' })
        .trim()
        .email({ message: 'Email is not valid' }),
    password: z.string({ required_error: 'Password is required' })
})