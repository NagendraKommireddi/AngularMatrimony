Create procedure InsertMax
(
@MaritalStatus varchar(50),
@Height varchar(50),
@FamilyStatus varchar(50),
@FamilyType varchar(50),
@FamilyValues varchar(50),
@PhysicallyHandicapped varchar(50),
@Education varchar(50),
@EmployedIn varchar(50),
@Occupation varchar(50),
@AnnualIncome varchar(50),
@LocationCountry varchar(50),
@LocationState varchar(50),
@LocationCity varchar(50),
@BodyType varchar(50),
@Weight varchar(50),
@Diet varchar(50),
@SmokingHabit varchar(50),
@DrinkingHabit varchar(50),
@Star varchar(50),
@Rasi varchar(50),
@TimeOfBirth varchar(50),
@POBCountry varchar(50),
@POBState varchar(50),
@POBCity varchar(50),
@FatherOccupation varchar(50),
@MotherOccupation varchar(50),
@Brothers int,
@BrotherMarried int,
@Sisters int,
@SistersMarried int,
@ParentsContact varchar(50),
@AncestralOrigin varchar(50),
@Page1 int ,
@Page2 int,
@Page3 int,
@Phone varchar(50)
)
as
Begin 
	Update Registration set MaritalStatus=@MaritalStatus,Height=@Height,FamilyStatus=@FamilyStatus,FamilyType=@FamilyType,FamilyValues=@FamilyValues,PhysicallyHandicapped=@PhysicallyHandicapped,Education=@Education,EmployedIn=@EmployedIn,Occupation=@Occupation,AnnualIncome=@AnnualIncome,LocationCountry=@LocationCountry,LocationState=@LocationState,LocationCity=@LocationCity,BodyType=@BodyType,Weight=@Weight,Diet=@Diet,SmokingHabit=@SmokingHabit,DrinkingHabit=@DrinkingHabit,Star=@Star,Rasi=@Rasi,TimeOfBirth=@TimeOfBirth,PlaceofBirthCountry=@POBCountry,PlaceofBirthState=@POBState,PlaceofBirthCity=@POBCity,
	FatherOccupation=@FatherOccupation,MotherOccupation=@MotherOccupation,Brothers=@Brothers,Sisters=@Sisters,SistersMarried=@SistersMarried,ParentsContact=@ParentsContact,AncestralOrigin=@AncestralOrigin,Page1=@Page1,Page2=@Page2,Page3=@Page3 where Phone =@Phone
End