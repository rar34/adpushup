import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const DemoSetup = () => {
    const [phone, setPhone] = useState('');

    return (
        <div className="p-2">
            <h2 className="text-3xl md:text-5xl text-center font-semibold text-primary">Setup a Demo</h2>
            <p className="text-center text-xl text-gray-700 font-medium my-4">Free 30 Min Website Monetization Consulting Included</p>
            <div className="max-w-xl mx-auto shadow-xl rounded-lg my-10">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-gray-700">First Name<span className="text-lg text-primary">*</span></span>
                        </label>
                        <input type="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-gray-700">Work Email<span className="text-lg text-primary">*</span></span>
                        </label>
                        <input type="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-gray-700">Phone<span className="text-lg text-primary">*</span></span>
                        </label>
                        <div>
                            <PhoneInput
                                country={'us'} // Default country code
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-gray-700">Website<span className="text-lg text-primary">*</span></span>
                        </label>
                        <input type="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-gray-700">Monthly Revenue<span className="text-lg text-primary">*</span></span>
                        </label>
                        <select className="select select-bordered w-full max-w-full text-lg font-medium">
                            <option disabled selected>Select any option</option>
                            <option>Less than 1,000 USD</option>
                            <option>1,000 - 2999 USD</option>
                            <option>3,000 - 10,000 USD</option>
                            <option>10,000 - 40,000 USD</option>
                            <option>More than 40,000 USD</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-primary text-white uppercase text-xl">Get A Free Demo</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DemoSetup;