import mongosh from 'mongoose';

const medicalRecordSchema = new mongosh.Schema({
     
}, {timestamps: true});

export const MedicalRecord = mongosh.model('MedicalRecord', medicalRecordSchema);