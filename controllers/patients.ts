import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { Patient } from '../models/patient';


const patient1 ={
    id:1,
    age:30,
    name:"Karla",
    diagnosis: 1
}

const getPatients = async (req: Request, res: Response, next: NextFunction) => {
    // let result: AxiosResponse = await axios.get(`https://`); TODO, GET patients from DB
    let result = {
        data:patient1        
    } 
    let patients: Patient = result.data;
    return res.status(200).json({
            patients
    });
};


const getPatient = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    // Todo get the patient from db 
    // let result: AxiosResponse = await axios.get(`https://patients/${id}`);
    let result = {
        data: patient1
    }
    let patient: Patient = result.data;
    return res.status(200).json({
        patient
    });
};


const updatePatient = async (req: Request, res: Response, next: NextFunction) => {

    let id: string = req.params.id;
    let name: string = req.body.name ?? null;
    let body: string = req.body.body ?? null;
    // update the patient
    let response: AxiosResponse = await axios.put(`https://patients/${id}`, {
        ...(name && { name }),
        ...(body && { body })
    });
    return res.status(200).json({
        message: response.data
    });
};

const deletePatient = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let response: AxiosResponse = await axios.delete(`https:///patients/${id}`);
    return res.status(200).json({
        message: 'patient deleted successfully'
    });
};

const addPatient = async (req: Request, res: Response, next: NextFunction) => {
    let name: string = req.body.name;
    let body: string = req.body.body;
    let response: AxiosResponse = await axios.post(`https://patients`, {
        name,
        body
    });
    return res.status(200).json({
        message: response.data
    });
};

export default { getPatients, getPatient, updatePatient, deletePatient, addPatient };