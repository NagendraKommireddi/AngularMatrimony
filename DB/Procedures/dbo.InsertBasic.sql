CREATE procedure InsertBasic
(
@Profilefor varchar(50),
@Name varchar(50),
@Gender varchar(50),
@DOB Date,
@Religion varchar(50),
@MotherTongue varchar(50),
@Phoneno varchar(50),
@EmailId varchar(50),
@Password varchar(50),
@Image varchar(Max)
)
as
Begin 
	Insert into Registration(Profilefor,Name,Gender,DOB,Religion,MotherTongue,Phone,EmailId,Password,Image) values(@Profilefor,@Name,@Gender,@DOB,@Religion,@MotherTongue,@Phoneno,@EmailId,@Password,@Image)
End