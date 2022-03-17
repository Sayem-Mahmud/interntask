import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Header from '../Header/Header';
import Tab1 from '../Tab1/Tab1';
import './Tab2.css';

const Tab2 = () => {
    const { data, setdata, AddInput } = useAuth();
    console.log(data);
    const businessN = useRef();
    const gst = useRef();
    const address = useRef();
    const years = useRef();
    const tbcapital = useRef();
    const telNo = useRef();
    const history = useHistory();

    const handleAddData = e => {
        const businessName = businessN.current.value;
        const Gst = gst.current.value;
        const BussinessAddress = address.current.value;
        const RunningYears = years.current.value;
        const ToalbusCapital = tbcapital.current.value;
        const TelephoneNo = telNo.current.value;

        const newService = { businessName, Gst, BussinessAddress, RunningYears, ToalbusCapital, TelephoneNo };
        console.log(newService);
        AddInput(newService);
        e.target.reset();
        e.preventDefault();
        history.push('/tab3');
    }
    return (
        <div>
            <Header></Header>
            <div className="pt-2 fw-bolder text-white bg-secondary">
                <form onSubmit={handleAddData} className="row g-3 pb-2">
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label me-2 w-25">Business Name</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputName4" ref={businessN} required />
                    </div>
                    <div class="col-md-6 ">
                        <label for="inputImg4" class="form-label me-2 w-25">GST No</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputImg4" ref={gst} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPrice" class="form-label me-2 w-25">Address</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputPrice" placeholder="" ref={address} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputdescription2" class="form-label me-2 w-25">Total running years</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputAddress2" placeholder="" ref={years} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label me-2 w-25">Total Business Capital(TK)</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block " id="inputCity" ref={tbcapital} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label me-2 w-25">Tel No</label>
                        <input type="number" class="form-control w-50 mx-auto d-md-inline-block " id="inputCity" ref={telNo} required />
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Done</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Tab2;