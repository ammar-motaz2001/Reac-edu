import React from 'react';
import { Offline } from 'react-detect-offline';
import { motion } from 'framer-motion';
import { FaExclamationCircle } from 'react-icons/fa'; // Import a warning icon from react-icons

const OfflineNotification = () => {
  return (
    <Offline>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 text-white p-10 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="mb-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <FaExclamationCircle size={80} className="mx-auto text-red-500" />
          </motion.div>
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            You Are Offline
          </motion.h2>
          <motion.p
            className="text-lg mb-5"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Please check your internet connection.
          </motion.p>
          <motion.div
            className="rounded-full bg-blue-500 text-white py-2 px-6 inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Retry
          </motion.div>
        </div>
      </motion.div>
    </Offline>
  );
};

export default OfflineNotification;
