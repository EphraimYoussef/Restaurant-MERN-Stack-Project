"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log({name , email , password , confirmPassword})
  }

  return (
    <div className='bg-[#F9F9F7] min-h-screen flex flex-col justify-around items-center'>
      <img src="Register.svg" alt="" className='p-5'/>
      <div className="w-full max-w-2xl mx-auto p-10 m-10 bg-white rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-3 font-semibold rounded-full text-white"
          >
            Register
          </Button>
        </form>
      </div>
    </div>

  )
}