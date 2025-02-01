// src/components/TicketModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TicketModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null; // Don't render the modal if it isn't open

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-[400px]">
                {/* Modal Header with Close Button */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Ticket Purchase</h2>
                    <button onClick={closeModal}>
                        <FaTimes className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Ticket Info */}
                <div>
                    <p className="text-sm text-gray-500 mb-4">Select your payment method below:</p>

                    <div className="space-y-4 mb-6">
                        <div>
                            <input type="radio" id="credit-card" name="payment-method" value="credit-card" />
                            <label htmlFor="credit-card" className="ml-2 text-sm">Credit Card</label>
                        </div>
                        <div>
                            <input type="radio" id="paypal" name="payment-method" value="paypal" />
                            <label htmlFor="paypal" className="ml-2 text-sm">PayPal</label>
                        </div>
                        <div>
                            <input type="radio" id="google-pay" name="payment-method" value="google-pay" />
                            <label htmlFor="google-pay" className="ml-2 text-sm">Google Pay</label>
                        </div>
                    </div>

                    {/* Card Details */}
                    <div className="mb-4">
                        <label htmlFor="card-details" className="block text-sm mb-2">Card Details</label>
                        <input
                            type="text"
                            id="card-details"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                            placeholder="Enter card details"
                        />
                    </div>

                    {/* Modal Footer with Cancel and Pay Now buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={closeModal}
                            className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => alert("Payment Successful!")}
                            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketModal;
