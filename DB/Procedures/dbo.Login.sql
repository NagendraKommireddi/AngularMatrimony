Create procedure Login
(
@username varchar(50),
@password varchar(50)
)
as
Begin 
	select * from Registration where Name=@username and Password=@password
End