'use client';

import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      password: userData.password, // required
      image: userData.photoUrl,

      callbackURL: '/',
    });
    if (error) {
      alert(error.message);
    }

    if (data) {
      alert('Signup successful');
      router.push('login');
    }
  };
  // const { data, error } = await authClient.signUp.email({
  //     name: "John Doe", // required
  //     email: "john.doe@example.com", // required
  //     password: "password1234", // required
  //     image: "https://example.com/image.png",
  //     callbackURL: "https://example.com/callback",
  // });
  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };
  return (
    <div className="flex justify-center items-center my-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl text-gray-800 font-bold text-center">Create Your Account 🚀</h2>

          <p className="text-sm text-gray-500 text-center mt-1">Join and start learning today</p>

          <Form onSubmit={handleSubmit} className=" flex  flex-col gap-4">
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="text-gray-800">Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField isRequired name="photoUrl" type="text">
              <Label className="text-gray-800">Photo URL</Label>
              <Input placeholder="Enter your photo URL" />
              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return 'Please enter a valid email address';
                }
                return null;
              }}
            >
              <Label className="text-gray-800">Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) return 'Minimum 8 characters';
                return null;
              }}
            >
              <Label className="text-gray-800">Password</Label>
              <Input placeholder="Enter your password" />
              <FieldError />
            </TextField>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-2">
              Register
            </Button>

            {/* Google Button */}
            <Button
              onClick={handlGoogleSignIn}
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 border hover:bg-gray-50 transition"
            >
              Continue with Google
            </Button>

            {/* Redirect */}
            <p className="text-sm text-gray-800 text-center mt-2">
              Already have an account?{' '}
              <Link href="/login">
                <span className="text-blue-600 cursor-pointer hover:underline">Login</span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
