import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument} from "../../model/user.model";
import Student, { StudentDocument} from "../../model/student.model";
import Organization, { OrganizationDocument} from "../../model/organization.model";
import Counsellor, { CounselorDocument } from "../../model/counsellor.model";
import { omit } from "lodash";

export const createUser = async (input: DocumentDefinition<UserDocument>) =>{
    return await User.create(input);
}

export const createStudent = async (input: DocumentDefinition<StudentDocument>) =>{
    return await Student.create(input);
}


export const createCounsellor = async (input: DocumentDefinition<StudentDocument>) =>{
    return await Counsellor.create(input);
}

export const validatePassword = async ({ email, password }: { email: UserDocument["email"], password: string }) =>{

    const user = await User.findOne({ email });

    if(!user){
        return false;
    }

    const isValid = await user.comparePassword(password);

    if(!isValid) return false;
    
    return omit(user.toJSON(), "password");

}

export const findUser = (query: FilterQuery<UserDocument>) => {
  return User.findOne(query).lean();
}

