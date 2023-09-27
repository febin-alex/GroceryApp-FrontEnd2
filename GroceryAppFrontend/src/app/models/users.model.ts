export class User{
    constructor(
        public FirstName?:string,
        public LastName?:string,
        public Email?:string,
        public Gender?:string,
        public MobileNo?:string,
        public Password?:string,
        public DateOfBirth?:Date,
        public CreatedDate = new Date().toISOString()
    ){

    }
}