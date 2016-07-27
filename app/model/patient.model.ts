import {Insurance} from "./insurance.model";

export class Patient {

    constructor(public active?: Boolean,
                public altPayeeActive?: String,
                public apcity?: String,
                public apfirstName?: String,
                public aplastName?: String,
                public aplastNamePrefix?: String,
                public apletterPoliteAddress?: String,
                public appoliteAddress?: String,
                public apstreet?: String,
                public aptitle?: String,
                public apzip?: String,
                public bankAccount?: String,
                public bankId?: String,
                public bankName?: String,
                public bic?: String,
                public cardValidTo?: Date,
                public city?: String,
                public company?: String,
                public countryCode?: String,
                public dateOfBirth?: Date,
                public dateOfBirthString?: Date,
                public deleted?: Number,
                public distance?: Number,
                public doctorId?: Number,
                public email?: String,
                public extPatientId?: String,
                public fax?: String,
                public firstName?: String,
                public handlingType?: String,
                public healthInsuranceAccount?: String,
                public healthInsuranceId?: Number,
                public healthInsuranceStatus?: String,
                public healthInsuranceName?: String,
                public homepatient?: String,
                public homePhone?: String,
                public iban?: String,
                public internalNumber?: Number,
                public insurance?: Insurance,
                public lastName?: String,
                public lastNamePrefix?: String,
                public letterPoliteAddress?: String,
                public mobilePhone?: String,
                public patientId?: Number,
                public patientType?: String,
                public politeAddress?: String,
                public profession?: String,
                public recordCreationDate?: Date,
                public recordModificationDate?: Date,
                public remark?: String,
                public sex?: String,
                public staffId?: String,
                public statusExtension?: String,
                public street?: String,
                public surchargeStatus?: String,
                public title?: String,
                public version?: Number,
                public workPhone?: String,
                public www?: String,
                public zipid?: Number,
                public zipnr?: Number) {
    }


    
    public doStuff() {
        console.log("doStrugg");
    }
    
}