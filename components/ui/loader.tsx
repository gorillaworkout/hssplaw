"use client"

import { motion } from "framer-motion"
import { Scale } from "lucide-react"
import Image from "next/image"

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-2xl"
            animate={{
              boxShadow: [
                "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Image src="/hssnotext.png" alt="HSS Partners Logo" width={50} height={100} />
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold text-gray-900">HSS Partners</h1>
          <p className="text-lg text-gray-600">Law Firm</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-600 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">Memuat...</p>
        </motion.div>
      </div>
    </div>
  )
}
