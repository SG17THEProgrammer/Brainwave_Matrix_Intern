const z = require("zod");

// creating a schema for strings
const signupSchema = z.object({
    name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" })
    .trim(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, { message: "Email must be less than 100 characters long" })
    .trim(),
  phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits" })
    .max(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[5-9]\d[0-9]*$/, { message: "Phone number must start with 5, 6, 7, 8, or 9 and be exactly 10 digits" }),
    age: z
    .string()
    .transform((val) => {
      const numVal = parseInt(val, 10);
      if (isNaN(numVal)) {
        throw new Error("Age must be a valid number");
      }
      return numVal;
    }) 
    .refine((val) => val >= 10 && val <= 100, { 
      message: "Age should be between 10 and 100",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be less than 100 characters long" })
    .trim(),
});

module.exports = signupSchema