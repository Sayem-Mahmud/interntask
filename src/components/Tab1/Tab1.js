import { React, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../../hook/useAuth';
import Tab2 from '../Tab2/Tab2';
import './Tab1.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Tab1 = () => {
    const { data, setdata, AddInput } = useAuth();
    console.log(data);
    const nameRef = useRef();
    const ageRef = useRef();
    const mobileRef = useRef();
    const dobRef = useRef();
    const nameLRef = useRef();
    const history = useHistory();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const age = ageRef.current.value;
        const mobile = mobileRef.current.value;
        const dob = dobRef.current.value;
        const nameLast = nameLRef.current.value;


        const newService = { name, nameLast, age, mobile, dob };
        console.log(newService);
        AddInput(newService);
        e.target.reset();
        e.preventDefault();
        history.push('/tab2');
    }
    return (
        <div>
            <Header />
            <div className="pt-2 fw-bolder text-white bg-secondary ">
                <form onSubmit={handleAddUser} className="row g-3 pb-2">
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label me-2 w-25">First Name</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputName4" ref={nameRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputImg4" class="form-label me-2 w-25">Last Name</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputImg4" ref={nameLRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPrice" class="form-label me-2 w-25">Dob</label>
                        <input type="number" class="form-control w-50 mx-auto d-md-inline-block" id="inputPrice" placeholder="dd/mm/yr" ref={dobRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputdescription2" class="form-label me-2 w-25">Age</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputAddress2" placeholder="number" ref={ageRef} required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label me-2 w-25">Made In</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputCity" ref={mobileRef} required />
                    </div>

                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Done</button>
                    </div>

                </form>
            </div >
        </div >

    );
};
export default Tab1;
