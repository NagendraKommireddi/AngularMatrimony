Create procedure PhoneBasedSearch
(
@Phoneno varchar(50)
)
as
Begin 
	select * from  Registration where Phone=@Phoneno
End