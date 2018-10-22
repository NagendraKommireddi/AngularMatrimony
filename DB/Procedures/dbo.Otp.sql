Create procedure Otp
(
@Phoneno varchar(50),
@Otp varchar(10)
)
as
Begin 
	Update  Registration set Otp=@Otp  where Phone=@Phoneno
End