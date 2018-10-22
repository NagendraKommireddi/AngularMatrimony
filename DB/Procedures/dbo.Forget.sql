Create procedure Forget
(
@Password varchar(50),
@Phoneno varchar(50)
)
as
Begin 
	Update Registration set Password=@Password where Phone=@Phoneno
End