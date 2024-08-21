import React from 'react'

export default function Map() {
    return (
        <div className="container mx-auto pb-20">
            <h2 className="text-4xl md:text-6xl pb-10 text-center capitalize">Google Location</h2>
            <div className="border-2 border-primary rounded-md overflow-hidden shadow-lg shadow-primary">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.383596378675!2d90.3460622626905!3d23.80629599017156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c5074ec8db%3A0x1450dad46461cbe8!2sMirpur-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1724256906007!5m2!1sen!2sbd" className="w-full  h-[50vh]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
