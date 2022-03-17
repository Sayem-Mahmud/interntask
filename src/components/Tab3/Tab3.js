import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Header from '../Header/Header';
import './Tab3.css';

const Tab3 = () => {
    const { data, setdata, AddInput } = useAuth();
    console.log(data);
    const loanA = useRef();
    const interestR = useRef();
    const LoanT = useRef();
    const MaturityL = useRef();
    const history = useHistory();


    const handleAddFinal = e => {
        const loanAmount = loanA.current.value;
        const interestRate = interestR.current.value;
        const LoanTeanure = LoanT.current.value;
        const MaturityLoan = MaturityL.current.value;

        const newService = { loanAmount, interestRate, LoanTeanure, MaturityLoan };
        console.log(newService);
        const allData = { ...data, ...newService };
        console.log(allData);
        AddInput();
        fetch('http://localhost:5000/add', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    e.target.reset();
                }
            })

        e.preventDefault();
        history.push('./');
    }

    return (
        <div>
            <Header></Header>
            <div className="pt-2 fw-bolder text-white bg-secondary">
                <form onSubmit={handleAddFinal} className="row g-3 pb-2">
                    <div class="col-md-6">
                        <label for="inputName4" class="form-label me-2 w-25">Loan Amount(TK)</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputName4" ref={loanA} required />
                    </div>

                    <div class="col-md-6 ">
                        <label for="inputImg4" class="form-label me-2 w-25">Interest Rate(%)</label>
                        <input type="text" class="form-control w-50 mx-auto d-md-inline-block" id="inputImg4" ref={interestR} required />
                    </div>

                    <div class="col-md-6">
                        <label for="inputPrice" class="form-label me-2 w-25">Loan Tenure(date)</label>
                        <input type="number" class="form-control w-50 mx-auto d-md-inline-block" id="inputPrice" ref={LoanT} placeholder="" required />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPrice" class="form-label me-2 w-25">Maturity(date)</label>
                        <input type="number" class="form-control w-50 mx-auto d-md-inline-block" id="inputPrice" ref={MaturityL} placeholder="" required />
                    </div>

                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Done</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Tab3;