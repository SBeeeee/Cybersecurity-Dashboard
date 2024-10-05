const ContactUsCard = () => {
    return (
        <>
            <h3 className="text-white text-2xl m-4 font-bold text-center">Contact Us</h3>
            <div id="contact" className="border-white border-2 w-[90vw] sm:w-[50vw] lg:w-[25vw] p-6 m-auto rounded-lg bg-gray-900 shadow-lg">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-white font-medium mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-white font-medium mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-white font-medium mb-1">Your Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Write your message"
                            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactUsCard;
