import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Shield, Star } from 'lucide-react'

const ConsultationForm: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Get Your Free AI Assessment</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Business Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Select>
              <option value="">Select Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
            </Select>
            <Button type="submit" className="w-full">Schedule Assessment</Button>
          </form>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm text-gray-300">100% Secure</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm text-gray-300">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm

