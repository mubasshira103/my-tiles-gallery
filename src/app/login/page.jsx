'use client';
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const LoginPage = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
        email: userData.email, // required
        password: userData.password, // required

        callbackURL: '/',
      });
      if (error) {
        alert(error.message);
      }

      if (data) {
        alert('Signup successful');
      }
    };

     const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }


  return (
    <div className="flex justify-center items-center my-5">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl text-gray-900 font-bold text-center">Sign in your account 👋</h2>
          <p className="text-sm text-gray-500 text-center mt-1">
            Login to continue your tiles gallery
          </p>
          <Form onSubmit={handleSubmit } className="mt-1 flex text-gray-900 flex-col gap-4 ">
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
              <Input className="input" placeholder="john@example.com" name="email" />
              <FieldError />
            </TextField>

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
              <Input placeholder="Enter your password" name="password" />
              <FieldError />
            </TextField>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Remember me
              </label>
              <button type="button" className="text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-2">
              login
            </Button>

            <Button
            onClick={handlGoogleSignIn }
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 border hover:bg-gray-50 transition"
            >
              {/* <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              width={60}
              height={40}
              className="w-5 h-5"
            /> */}
              Continue with Google
            </Button>

            <p className="text-sm text-center mt-2">
              Don’t have an account?{' '}
              <Link href={'/register'}>
                {' '}
                <span className="text-blue-600 cursor-pointer hover:underline">Sign up</span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
